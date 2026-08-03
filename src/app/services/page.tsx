import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Icon } from "@/components/icon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, UI/UX design, content writing, branding, marketing and audits — one senior team for your whole product.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to ship"
        description="One team, every craft. Mix and match services — most projects combine design, development and content under a single fixed price."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we deliver"
            title="Six crafts, one team"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-muted">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-auto flex flex-col gap-2.5 border-t border-border pt-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-foreground p-8 text-background">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-background/60">
                  Not sure what you need?
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Start with an audit — a senior second opinion for a flat fee.
                </h3>
              </div>
              <a
                href="/contact"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground"
              >
                Request an audit
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <TechStack />
      <CtaSection />
    </>
  );
}
