import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-background sm:px-12 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-background/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-background/10 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-background/60">
                Ready when you are
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Let&apos;s build something worth shipping.
              </h2>
              <p className="mt-4 text-base leading-7 text-background/70">
                Tell us about your project and get a free consultation within
                one business day — no pitch, no pressure.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                variant="default"
                className="h-11 rounded-full bg-background px-6 text-foreground hover:bg-background/90"
              >
                <Link href="/contact">
                  Get a free quote
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-background/30 bg-transparent px-6 text-background hover:bg-background/10 hover:text-background"
              >
                <Link href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar />
                  Book a call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
