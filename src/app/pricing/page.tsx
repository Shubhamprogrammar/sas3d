import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { PricingCards } from "@/components/sections/pricing-cards";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { engagementModels } from "@/data/pricing";
import { TOOLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Craftlab Studio — fixed-price sprints, full engagements and monthly retainers.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent, senior-grade pricing"
        description="Fixed scope, fixed price. No surprise invoices, no junior pass-through — and a model to fit how you want to work."
      />

      <PricingCards heading={false} />

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Engagement models"
            title="Pick how you want to work"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-background p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {model.title}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {model.description}
                </p>
                <p className="mt-auto text-2xl font-semibold tracking-tight">
                  {model.startingAt}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-background p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  What&apos;s included
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {[
                    "Free discovery call — no obligation",
                    "Written proposal with fixed scope & price",
                    "Milestone payments tied to deliverables",
                    "Weekly demos and async status updates",
                    "QA, deployment and analytics at launch",
                    "Post-launch support included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Communication
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {TOOLS.map((tool) => (
                    <li key={tool.name} className="flex items-center gap-2.5">
                      <span className="size-1.5 rounded-full bg-foreground" />
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-muted-foreground">— {tool.role}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-8 w-full rounded-full">
                  <Link href="/contact">
                    Get a custom quote
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <CtaSection />
    </>
  );
}
