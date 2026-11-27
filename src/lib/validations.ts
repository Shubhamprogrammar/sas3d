import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Website Development",
  "Custom Software",
  "E-commerce",
  "Business Automation",
  "AI Solutions",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
  "Not Sure Yet",
  "Prefer to Discuss",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 2–4 Weeks",
  "Within 1–3 Months",
  "Flexible",
  "Not Decided",
] as const;

/** Strip control characters and collapse whitespace for single-line fields. */
function singleLine(value: string): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Keep newlines but strip other control characters for multi-line fields. */
function multiLine(value: string): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

const optionalText = (max: number, message: string) =>
  z
    .string()
    .transform(singleLine)
    .pipe(z.string().max(max, message))
    .optional()
    .default("");

const optionalOption = <T extends readonly [string, ...string[]]>(options: T) =>
  z.union([z.enum(options), z.literal("")]).optional().default("");

export const contactSchema = z.object({
  name: z
    .string({ error: "Please enter your full name" })
    .transform(singleLine)
    .pipe(
      z
        .string()
        .min(2, "Please enter your full name")
        .max(100, "Name is too long")
    ),
  email: z
    .string({ error: "Please enter your email address" })
    .transform((value) => singleLine(value).toLowerCase())
    .pipe(
      z
        .email("Please enter a valid email address")
        .max(254, "Email address is too long")
    ),
  service: z.enum(SERVICE_OPTIONS, { error: "Please choose the service you need" }),
  message: z
    .string({ error: "Please describe your project" })
    .transform(multiLine)
    .pipe(
      z
        .string()
        .min(20, "Please add a little more detail (at least 20 characters)")
        .max(3000, "Please keep the description under 3000 characters")
    ),
  company: optionalText(120, "Company name is too long"),
  phone: z
    .string({ error: "Please enter your mobile number" })
    .transform(singleLine)
    .pipe(
      z
        .string()
        .min(1, "Please enter your mobile number")
        .max(20, "Phone number is too long")
        .regex(/^\+?[\d\s()-]+$/, "Please enter a valid mobile number")
        .refine((value) => {
          const digits = value.replace(/\D/g, "").length;
          return digits >= 10 && digits <= 15;
        }, "Please enter a valid mobile number (10–15 digits, with country code if outside India)")
    ),
  budget: optionalOption(BUDGET_OPTIONS),
  timeline: optionalOption(TIMELINE_OPTIONS),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

/** Hidden honeypot field name. Real visitors never fill it in. */
export const HONEYPOT_FIELD = "website";

/** Submissions faster than this after the form renders are treated as bots. */
export const MIN_FILL_TIME_MS = 3000;
