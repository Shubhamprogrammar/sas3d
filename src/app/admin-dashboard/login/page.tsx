import { redirect } from "next/navigation";

import { isAdminConfigured, isAuthenticated } from "@/lib/admin-auth";
import { SITE } from "@/lib/constants";
import { LoginForm } from "./login-form";

export default async function AdminLoginPage() {
  if (await isAuthenticated()) redirect("/admin-dashboard");

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-20">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-background p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {SITE.shortName} admin
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the admin password to view contact inquiries.
        </p>
        <div className="mt-8">
          {isAdminConfigured() ? (
            <LoginForm />
          ) : (
            <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
              Admin access is disabled. Set <code>ADMIN_PASSWORD</code> in the server environment
              and restart.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
