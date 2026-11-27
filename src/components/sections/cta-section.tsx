import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE, inquiryMailto, whatsappUrl } from "@/lib/constants";

export function CtaSection({
  title = "Have an Idea? Let's Build It Together.",
  description = "Tell us about your business challenge or project idea. Let's discuss how SAS3D can help.",
  ctaLabel = "Start Your Project",
  ctaHref = "/contact#inquiry",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="py-24" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-background sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-background/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-background/10 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-background/60">
                Free consultation
              </p>
              <h2
                id="final-cta-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
              >
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-background/70">
                {description}
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-background px-7 text-base text-foreground hover:bg-background/90"
              >
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowUpRight />
                </Link>
              </Button>
              <ul className="flex flex-col gap-2.5 text-sm text-background/80">
                <li>
                  <a
                    href={inquiryMailto()}
                    data-cta="email"
                    className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-background hover:underline"
                  >
                    <Mail className="size-4" aria-hidden />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl()}
                    data-cta="whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-background hover:underline"
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    WhatsApp {SITE.phone}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-background hover:underline"
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
