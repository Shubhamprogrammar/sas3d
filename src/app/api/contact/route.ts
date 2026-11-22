import { NextResponse } from "next/server";
import { Resend } from "resend";

import { SITE } from "@/lib/constants";
import { rateLimit } from "@/lib/rate-limit";
import {
  HONEYPOT_FIELD,
  MIN_FILL_TIME_MS,
  contactSchema,
  type ContactData,
} from "@/lib/validations";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };

function json(body: Record<string, unknown>, status: number, headers?: HeadersInit) {
  return NextResponse.json(body, { status, headers });
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/** Reject cross-site form posts. Requests without an Origin header (curl, some proxies) are allowed. */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originHost = new URL(origin).host;
    const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    return originHost === host || originHost === new URL(SITE.url).host;
  } catch {
    return false;
  }
}

function notificationText(data: ContactData, ip: string): string {
  const line = (label: string, value: string) => `${label}: ${value || "—"}`;
  return [
    `New project inquiry received through ${SITE.url}/contact`,
    "",
    line("Full name", data.name),
    line("Email", data.email),
    line("Company", data.company),
    line("Phone", data.phone),
    line("Service", data.service),
    line("Budget", data.budget),
    line("Timeline", data.timeline),
    "",
    "Project description:",
    data.message,
    "",
    "---",
    `Submitted: ${new Date().toISOString()}`,
    `IP: ${ip}`,
    "Reply to this email to respond to the visitor directly.",
  ].join("\n");
}

// Deliberately does not echo the visitor's name or message: the address is
// unverified, so the auto-reply must not be usable to send arbitrary text.
const CONFIRMATION_TEXT = [
  "Hello,",
  "",
  `Thank you for contacting ${SITE.shortName}! Your inquiry has been received. Our team will review your requirements and get back to you.`,
  "",
  `If you need to add anything, reply to this email or message us on WhatsApp at ${SITE.phone}.`,
  "",
  `— ${SITE.shortName}`,
  SITE.url,
  "",
  "You received this email because this address was entered in the contact form on our website. If this wasn't you, you can ignore it.",
].join("\n");

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return json({ error: "Invalid request origin" }, 403);
  }

  const ip = clientIp(request);
  const limited = rateLimit(`contact:${ip}`, RATE_LIMIT);
  if (!limited.allowed) {
    return json(
      { error: "Too many submissions. Please try again later or contact us directly." },
      429,
      { "Retry-After": String(limited.retryAfterSeconds) }
    );
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return json({ error: "Submission is too large" }, 413);
    }
    const parsedBody: unknown = JSON.parse(raw);
    if (!parsedBody || typeof parsedBody !== "object" || Array.isArray(parsedBody)) {
      return json({ error: "Invalid request body" }, 400);
    }
    body = parsedBody as Record<string, unknown>;
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  // Spam checks: a filled honeypot or an instant submission is treated as a bot.
  // Respond as if it succeeded so bots get no signal, but send nothing.
  const honeypot = body[HONEYPOT_FIELD];
  const startedAt = Number(body.startedAt);
  const tooFast = Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_TIME_MS;
  if ((typeof honeypot === "string" && honeypot.trim() !== "") || tooFast) {
    return json({ ok: true }, 200);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      fieldErrors[field] ??= issue.message;
    }
    return json({ error: "Please check the highlighted fields", fieldErrors }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; inquiry could not be delivered.");
    return json({ error: "The inquiry service is temporarily unavailable" }, 503);
  }

  const data = parsed.data;
  const contactEmail = process.env.CONTACT_EMAIL || SITE.email;
  const from = process.env.CONTACT_FROM || `${SITE.shortName} <onboarding@resend.dev>`;
  const resend = new Resend(apiKey);

  try {
    const notification = await resend.emails.send({
      from,
      to: [contactEmail],
      replyTo: data.email,
      subject: `New inquiry: ${data.service} — ${data.name}`,
      text: notificationText(data, ip),
    });
    if (notification.error) {
      console.error("[contact] Notification email failed:", notification.error.message);
      return json({ error: "We couldn't send your inquiry" }, 502);
    }
  } catch (error) {
    console.error("[contact] Notification email threw:", error);
    return json({ error: "We couldn't send your inquiry" }, 502);
  }

  // The inquiry has reached the team at this point. A failed confirmation
  // email is logged but does not turn the visitor's submission into an error.
  try {
    const confirmation = await resend.emails.send({
      from,
      to: [data.email],
      replyTo: contactEmail,
      subject: `We've received your inquiry — ${SITE.shortName}`,
      text: CONFIRMATION_TEXT,
    });
    if (confirmation.error) {
      console.warn("[contact] Confirmation email failed:", confirmation.error.message);
    }
  } catch (error) {
    console.warn("[contact] Confirmation email threw:", error);
  }

  return json({ ok: true }, 200);
}
