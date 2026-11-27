"use server";

import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  checkPassword,
  createSession,
  deleteSession,
  isAdminConfigured,
  requireAdmin,
} from "@/lib/admin-auth";
import { CONTACT_STATUSES, getContactsCollection, type ContactStatus } from "@/lib/mongodb";
import { rateLimit } from "@/lib/rate-limit";

export type LoginState = { error?: string };

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (!isAdminConfigured()) {
    return { error: "ADMIN_PASSWORD is not set on the server." };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limited = rateLimit(`admin-login:${ip}`, { limit: 5, windowMs: 15 * 60 * 1000 });
  if (!limited.allowed) {
    const minutes = Math.ceil(limited.retryAfterSeconds / 60);
    return { error: `Too many attempts. Try again in ${minutes} min.` };
  }

  const password = formData.get("password");
  if (typeof password !== "string" || !checkPassword(password)) {
    return { error: "Incorrect password." };
  }

  await createSession();
  redirect("/admin-dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/admin-dashboard/login");
}

export async function updateInquiryStatus(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id");
  const status = formData.get("status");
  if (typeof id !== "string" || !ObjectId.isValid(id)) return;
  if (!CONTACT_STATUSES.includes(status as ContactStatus)) return;

  const contacts = await getContactsCollection();
  await contacts.updateOne(
    { _id: new ObjectId(id) },
    { $set: { status: status as ContactStatus, updatedAt: new Date() } }
  );
  revalidatePath("/admin-dashboard", "layout");
}
