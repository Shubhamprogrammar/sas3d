"use client";

import * as React from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const update =
    (field: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: event.target.value }));
      setErrors((e) => ({ ...e, [field]: "" }));
      setStatus("idle");
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border p-8">
        <CheckCircle2 className="size-8 text-emerald-500" />
        <h3 className="text-xl font-semibold tracking-tight">
          Thanks — message sent!
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          We&apos;ll get back to you within one business day. In the meantime,
          feel free to book a call directly.
        </p>
        <Button asChild variant="outline">
          <a href="https://sas3d.in" target="_blank" rel="noopener noreferrer">
            Book a call
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-border p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Jane Doe"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            className="h-11"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            className="h-11"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What are you building, what's the timeline, and what does success look like?"
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          className="min-h-36 resize-y"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Something went wrong sending your message. Please try again, or email
          us directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="h-11 w-full rounded-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight />
          </>
        )}
      </Button>
      <p
        className={cn(
          "text-center text-xs text-muted-foreground"
        )}
      >
        We reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
