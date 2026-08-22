import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations";
import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid submission", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const contactEmail = process.env.CONTACT_EMAIL ?? SITE.email;
    const from = process.env.CONTACT_FROM ?? `SAS3D Studio <onboarding@resend.dev>`;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
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

    if (confirmation.error || notification.error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}