import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/layout/social-icons";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-24 lg:pt-28">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-flex size-2 rounded-full bg-emerald-500" />
          Available for new projects
          <span className="hidden text-border sm:inline">/</span>
          <span className="hidden sm:inline">Remote — worldwide</span>
        </p>

        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          We design &amp; build products{" "}
          <span className="font-display italic font-normal">
            people love
          </span>
          <br />
          to use.
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            {SITE.name} is a senior freelance team of designers, developers and
            writers. We help early-to-mid-stage companies ship faster and
            convert better — {SITE.combinedYears} combined years of experience,
            {SITE.projectsDelivered}+ projects delivered.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <div className="flex items-center gap-2">
              {SITE.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-11 rounded-full px-6">
            <Link href="/contact">
              Book a free consultation
              <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 rounded-full px-6">
            <Link href="/portfolio">View our work</Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { value: `${SITE.combinedYears}+`, label: "Years combined" },
            { value: `${SITE.projectsDelivered}+`, label: "Projects delivered" },
            { value: `${SITE.happyClients}+`, label: "Happy clients" },
            { value: "4.9★", label: "Average rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 bg-background px-6 py-8"
            >
              <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-8 pt-14">
        <a
          href="#highlights"
          aria-label="Scroll down"
          className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
