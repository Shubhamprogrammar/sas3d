import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(254, "Email is too long"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;
