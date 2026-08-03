import type { Metadata } from "next";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Faq } from "@/components/sections/faq";
import { SocialIcon } from "@/components/layout/social-icons";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Craftlab Studio — book a free consultation or get a fixed-price quote within one business day.",
};

const details = [
  { icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Based", value: SITE.location, href: undefined },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}` },
  { icon: Calendar, label: "Book a call", value: "Free 30-min consultation", href: SITE.bookingUrl },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us where you are and where you want to be. We'll reply within one business day with honest next steps."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {details.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href ?? "#"}
                    {...(detail.href
                      ? { target: detail.href.startsWith("http") ? "_blank" : undefined, rel: detail.href.startsWith("http") ? "noopener noreferrer" : undefined }
                      : {})}
                    className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-foreground/30"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <detail.icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-medium">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Find us elsewhere
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {SITE.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                    >
                      <SocialIcon name={social.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
