import "server-only";

import nodemailer, { type Transporter } from "nodemailer";

import { SITE } from "@/lib/constants";

// Reuse one SMTP transporter across requests (and across hot reloads in dev).
const globalForMailer = globalThis as unknown as { transporter?: Transporter };

export function isMailerConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

/** Sender shown on outgoing mail. Gmail only allows the signed-in address (or its verified aliases). */
export function mailFrom(): string {
  return process.env.MAIL_FROM || `${SITE.shortName} <${process.env.SMTP_USER}>`;
}

export function getTransporter(): Transporter {
  if (!globalForMailer.transporter) {
    const port = Number(process.env.SMTP_PORT) || 465;
    globalForMailer.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      // Fail fast instead of hanging the serverless function on a bad connection.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
  }
  return globalForMailer.transporter;
}
