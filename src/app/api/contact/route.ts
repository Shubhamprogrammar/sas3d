import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";

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

    // TODO: wire this to your email provider (Resend, SendGrid, etc.).
    // Example with Resend:
    // await resend.emails.send({ from: "hello@SAS3D.studio", to: "hello@SAS3D.studio", subject: `New inquiry from ${name}`, text: `${message}\n\n— ${name} <${email}>` });

    console.info("Contact form submission", { name, email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
