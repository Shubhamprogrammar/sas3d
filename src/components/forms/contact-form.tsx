"use client";

import * as React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";
import { SITE, inquiryMailto, whatsappUrl } from "@/lib/constants";
import {
  BUDGET_OPTIONS,
  HONEYPOT_FIELD,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  contactSchema,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName =
  | "name"
  | "email"
  | "service"
  | "message"
  | "company"
  | "phone"
  | "budget"
  | "timeline";

const FIELD_ORDER: FieldName[] = [
  "name",
  "email",
  "company",
  "phone",
  "service",
  "budget",
  "timeline",
  "message",
];

const EMPTY_VALUES: Record<FieldName, string> = {
  name: "",
  email: "",
  service: "",
  message: "",
  company: "",
  phone: "",
  budget: "",
  timeline: "",
};

const MESSAGE_MAX = 3000;

const noopSubscribe = () => () => {};

/** Service requested via ?service=... (e.g. from a service page), if valid. */
function readRequestedService(): string {
  const requested = new URLSearchParams(window.location.search).get("service") ?? "";
  return (SERVICE_OPTIONS as readonly string[]).includes(requested) ? requested : "";
}

const selectClassName =
  "h-11 w-full min-w-0 appearance-none rounded-lg border border-input bg-transparent px-2.5 pr-9 text-base outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 [&>option]:bg-background [&>option]:text-foreground";

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  );
}

function RequiredMark() {
  return (
    <span className="text-destructive" aria-hidden>
      *
    </span>
  );
}

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [serverError, setServerError] = React.useState("");
  const [errors, setErrors] = React.useState<Partial<Record<FieldName, string>>>({});
  const [values, setValues] = React.useState<Record<FieldName, string>>(EMPTY_VALUES);
  const [honeypot, setHoneypot] = React.useState("");
  const submittingRef = React.useRef(false);
  const startedAtRef = React.useRef<number>(0);
  const formRef = React.useRef<HTMLFormElement>(null);
  const successRef = React.useRef<HTMLDivElement>(null);

  const requestedService = React.useSyncExternalStore(
    noopSubscribe,
    readRequestedService,
    () => ""
  );
  // The visitor's own choice wins; otherwise pre-select the requested service.
  const serviceValue = values.service || requestedService;

  React.useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  React.useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const update =
    (field: FieldName) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const value = event.target.value;
      setValues((v) => ({ ...v, [field]: value }));
      setErrors((e) => (e[field] ? { ...e, [field]: undefined } : e));
      if (status === "error") {
        setStatus("idle");
        setServerError("");
      }
    };

  const focusFirstError = (fieldErrors: Partial<Record<FieldName, string>>) => {
    const first = FIELD_ORDER.find((field) => fieldErrors[field]);
    if (first) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingRef.current) return;

    const parsed = contactSchema.safeParse({ ...values, service: serviceValue });
    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as FieldName;
        next[field] ??= issue.message;
      }
      setErrors(next);
      focusFirstError(next);
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          [HONEYPOT_FIELD]: honeypot,
          startedAt: startedAtRef.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Partial<Record<FieldName, string>>;
      };

      if (res.ok && data.ok) {
        // Only non-personal fields are sent to analytics.
        trackEvent({
          event: "generate_lead",
          form: "inquiry",
          service: parsed.data.service,
          budget: parsed.data.budget || "not_provided",
          timeline: parsed.data.timeline || "not_provided",
        });
        setStatus("success");
        setValues(EMPTY_VALUES);
        return;
      }

      if (res.status === 400 && data.fieldErrors) {
        setErrors(data.fieldErrors);
        focusFirstError(data.fieldErrors);
      }
      setServerError(
        res.status === 429
          ? "You've sent several inquiries in a short time. Please wait a few minutes, or contact us directly by email or WhatsApp."
          : data.error
            ? `${data.error}. Please try again, or contact us directly by email or WhatsApp.`
            : "Something went wrong while sending your inquiry. Please try again, or contact us directly by email or WhatsApp."
      );
      setStatus("error");
    } catch {
      setServerError(
        "We couldn't reach our server. Please check your connection and try again, or contact us directly by email or WhatsApp."
      );
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-4 rounded-2xl border border-border p-8 outline-none"
      >
        <CheckCircle2 className="size-8 text-emerald-500" aria-hidden />
        <h3 className="text-xl font-semibold tracking-tight">Inquiry received</h3>
        <p className="text-sm leading-6 text-muted-foreground">
          Thank you for contacting SAS3D! Your inquiry has been received. Our team
          will review your requirements and get back to you.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-cta="whatsapp">
              <MessageCircle />
              Message us on WhatsApp
            </a>
          </Button>
          <Button
            variant="ghost"
            className="rounded-full"
            onClick={() => {
              startedAtRef.current = Date.now();
              setStatus("idle");
            }}
          >
            Send another inquiry
          </Button>
        </div>
      </div>
    );
  }

  const describedBy = (field: FieldName, extra?: string) =>
    [errors[field] ? `${field}-error` : null, extra].filter(Boolean).join(" ") || undefined;

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-busy={submitting}
      aria-describedby="inquiry-required-note"
      className="relative flex flex-col gap-5 rounded-2xl border border-border p-6 sm:p-8"
    >
      <p id="inquiry-required-note" className="text-xs text-muted-foreground">
        Fields marked <span className="text-destructive">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            Full name <RequiredMark />
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={update("name")}
            required
            maxLength={100}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className="h-11"
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email address <RequiredMark />
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={update("email")}
            required
            maxLength={254}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className="h-11"
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Business / company name</Label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
            value={values.company}
            onChange={update("company")}
            maxLength={120}
            aria-invalid={!!errors.company}
            aria-describedby={describedBy("company")}
            className="h-11"
          />
          <FieldError id="company-error" message={errors.company} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            Mobile / WhatsApp number <RequiredMark />
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. +91 98765 43210"
            value={values.phone}
            onChange={update("phone")}
            required
            maxLength={20}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone")}
            className="h-11"
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">
          Required service <RequiredMark />
        </Label>
        <SelectWrapper>
          <select
            id="service"
            name="service"
            value={serviceValue}
            onChange={update("service")}
            required
            aria-invalid={!!errors.service}
            aria-describedby={describedBy("service")}
            className={selectClassName}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </SelectWrapper>
        <FieldError id="service-error" message={errors.service} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">Estimated budget</Label>
          <SelectWrapper>
            <select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={update("budget")}
              aria-invalid={!!errors.budget}
              aria-describedby={describedBy("budget")}
              className={selectClassName}
            >
              <option value="">Optional</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </SelectWrapper>
          <FieldError id="budget-error" message={errors.budget} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="timeline">Expected timeline</Label>
          <SelectWrapper>
            <select
              id="timeline"
              name="timeline"
              value={values.timeline}
              onChange={update("timeline")}
              aria-invalid={!!errors.timeline}
              aria-describedby={describedBy("timeline")}
              className={selectClassName}
            >
              <option value="">Optional</option>
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </SelectWrapper>
          <FieldError id="timeline-error" message={errors.timeline} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <Label htmlFor="message">
          Project description <RequiredMark />
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What do you want to build or improve? Include the problem you're solving, key features and any existing systems."
          value={values.message}
          onChange={update("message")}
          required
          maxLength={MESSAGE_MAX}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message", "message-count")}
          className="min-h-36 flex-1 resize-y"
        />
        <div className="flex items-start justify-between gap-4">
          <FieldError id="message-error" message={errors.message} />
          <p id="message-count" className="ml-auto shrink-0 text-xs text-muted-foreground">
            {values.message.length}/{MESSAGE_MAX}
          </p>
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input
          id={HONEYPOT_FIELD}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div aria-live="assertive">
        {status === "error" && serverError && (
          <div className="flex flex-col gap-3 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <p>{serverError}</p>
            <div className="flex flex-wrap gap-4 text-foreground">
              <a href={inquiryMailto()} data-cta="email" className="inline-flex items-center gap-1.5 underline underline-offset-4">
                <Mail className="size-4" aria-hidden />
                {SITE.email}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                className="inline-flex items-center gap-1.5 underline underline-offset-4"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="h-11 w-full rounded-full"
      >
        {submitting ? (
          <>
            <Loader2 className="animate-spin motion-reduce:animate-none" aria-hidden />
            Sending your inquiry…
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowUpRight aria-hidden />
          </>
        )}
      </Button>
      <p className={cn("text-center text-xs text-muted-foreground")}>
        Your details are used only to respond to your inquiry.
      </p>
    </form>
  );
}
