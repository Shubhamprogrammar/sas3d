import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "sas3d_admin";
const COOKIE_PATH = "/admin-dashboard";
const SESSION_SECONDS = 60 * 60 * 12;

const sha256 = (value: string) => createHash("sha256").update(value).digest();

// The signing key is derived from the password, so changing ADMIN_PASSWORD signs everyone out.
function signingKey(): Buffer | null {
  const password = process.env.ADMIN_PASSWORD;
  return password ? sha256(`sas3d-admin-session:${password}`) : null;
}

function sign(payload: string, key: Buffer): string {
  return createHmac("sha256", key).update(payload).digest("base64url");
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  return timingSafeEqual(sha256(input), sha256(password));
}

export async function createSession() {
  const key = signingKey();
  if (!key) throw new Error("ADMIN_PASSWORD is not set");

  const expiresAt = String(Date.now() + SESSION_SECONDS * 1000);
  (await cookies()).set(COOKIE_NAME, `${expiresAt}.${sign(expiresAt, key)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: COOKIE_PATH,
    maxAge: SESSION_SECONDS,
  });
}

export async function deleteSession() {
  (await cookies()).set(COOKIE_NAME, "", { path: COOKIE_PATH, maxAge: 0 });
}

export async function isAuthenticated(): Promise<boolean> {
  const key = signingKey();
  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!key || !value) return false;

  const [expiresAt, signature] = value.split(".");
  if (!expiresAt || !signature) return false;

  const expected = Buffer.from(sign(expiresAt, key));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    return false;
  }
  return Number(expiresAt) > Date.now();
}

export async function requireAdmin() {
  if (!(await isAuthenticated())) redirect("/admin-dashboard/login");
}
