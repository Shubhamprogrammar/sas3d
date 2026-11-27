import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Faq } from "@/components/sections/faq";
import { SocialIcon } from "@/components/layout/social-icons";
import { SITE, inquiryMailto, whatsappUrl } from "@/lib/constants";
import { pageSeo } from "@/lib/seo";

const title = "Contact Us";
const description =
  "Contact SAS3D for a free consultation on website development, custom software, business automation or AI solutions. Send an inquiry, email or message us on WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/contact", { title, description }),
};

const nextSteps = [
  {
    title: "We review your inquiry",
    description: "We read your requirements and note any questions.",
  },
  {
    title: "Discovery call",
    description: "We get in touch to understand your goals in more detail.",
  },
  {
    title: "Proposal & quote",
    description: "You receive a recommended approach, scope and quote.",
  },
];

const telHref = `tel:${SITE.phone.replace(/[^+\d]/g, "")}`;

const cardClass = "flex items-start gap-4 rounded-xl border border-border bg-background p-5";
const pillClass =
  "inline-flex h-8 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium transition-colors hover:border-foreground/40";

function CardIcon({ icon: IconComponent }: { icon: LucideIcon }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
      <IconComponent className="size-4" aria-hidden />
    </span>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </p>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us about your business challenge or project idea. Use the form, or reach us directly by email or WhatsApp — whichever is easier for you."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={inquiryMailto()}
                  data-cta="email"
                  className={`${cardClass} transition-colors hover:border-foreground/30`}
                >
                  <CardIcon icon={Mail} />
                  <div className="min-w-0">
                    <CardLabel>Email us</CardLabel>
                    <p className="mt-1 break-words text-sm font-medium">{SITE.email}</p>
                  </div>
                </a>

                <div className={cardClass}>
                  <CardIcon icon={Phone} />
                  <div className="min-w-0">
                    <CardLabel>Phone / WhatsApp</CardLabel>
                    <p className="mt-1 text-sm font-medium">{SITE.phone}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cta="whatsapp"
                        className={pillClass}
                      >
                        <MessageCircle className="size-3.5" aria-hidden />
                        WhatsApp
                      </a>
                      <a href={telHref} data-cta="phone" className={pillClass}>
                        <Phone className="size-3.5" aria-hidden />
                        Call
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`${cardClass} sm:col-span-2 lg:col-span-1`}>
                  <CardIcon icon={MapPin} />
                  <div className="min-w-0">
                    <CardLabel>Based</CardLabel>
                    <p className="mt-1 text-sm font-medium">{SITE.location}</p>
                  </div>
                </div>
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

              {/* Grows to fill the column so both sides end at the same line. */}
              <div className="flex flex-1 flex-col rounded-xl border border-border bg-muted/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  What happens next
                </p>
                <ol className="mt-4 flex flex-1 flex-col justify-between gap-4">
                  {nextSteps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{step.title}</p>
                        <p className="mt-0.5 text-sm leading-5 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div id="inquiry" className="flex scroll-mt-24 flex-col [&>form]:flex-1">
              <h2 className="sr-only">Project inquiry form</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
