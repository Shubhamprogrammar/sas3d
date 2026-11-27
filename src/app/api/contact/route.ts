import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ObjectId } from "mongodb";

import { contactSchema } from "@/lib/validations";
import { SITE } from "@/lib/constants";
import { getContactsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Honeypot: real visitors never see this field, so only bots fill it in.
  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  // Save first so the inquiry is kept even if sending email fails.
  let savedId: ObjectId | null = null;
  try {
    const contacts = await getContactsCollection();
    const recent = await contacts.countDocuments({
      email,
      createdAt: { $gt: new Date(Date.now() - RATE_WINDOW_MS) },
    });
    if (recent >= RATE_LIMIT) {
      return NextResponse.json(
        { error: "Too many messages, please try again later" },
        { status: 429 }
      );
    }

    const { insertedId } = await contacts.insertOne({
      name,
      email,
      message,
      status: "new",
      emailSent: false,
      createdAt: new Date(),
      userAgent: request.headers.get("user-agent"),
    });
    savedId = insertedId;
  } catch (error) {
    console.error("Failed to save contact message", error);
  }

  const emailSent = await sendEmails(name, email, message);

  if (savedId && emailSent) {
    try {
      const contacts = await getContactsCollection();
      await contacts.updateOne({ _id: savedId }, { $set: { emailSent: true } });
    } catch (error) {
      console.error("Failed to update contact message", error);
    }
  }

  if (!savedId && !emailSent) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

async function sendEmails(name: string, email: string, message: string) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return false;
  }

  const contactEmail = process.env.CONTACT_EMAIL ?? SITE.email;
  const from = process.env.CONTACT_FROM ?? `SAS3D Studio <onboarding@resend.dev>`;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const [confirmation, notification] = await Promise.all([
      resend.emails.send({
        from,
        to: [email],
        replyTo: contactEmail,
        subject: `We got your message, ${name} — ${SITE.name}`,
        text: `Hi ${name},\n\nThanks for reaching out. We've received your message and will get back to you within one business day.\n\nYour message:\n${message}\n\n— ${SITE.name} team`,
      }),
      resend.emails.send({
        from,
        to: [contactEmail],
        replyTo: email,
        subject: `New inquiry from ${name} <${email}>`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    ]);
    return !confirmation.error && !notification.error;
  } catch (error) {
    console.error("Failed to send contact emails", error);
    return false;
  }
}
