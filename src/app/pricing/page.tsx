import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { PricingCards } from "@/components/sections/pricing-cards";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { engagementModels } from "@/data/pricing";
import { TOOLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for SAS3D Studio — fixed-price sprints, full engagements and monthly retainers.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Transparent, senior-grade pricing"
        description="Fixed scope, fixed price. No surprise invoices, no junior pass-through, and a model to fit how you want to work."
      />

      <PricingCards heading={false} />

      <section className="section-space bg-muted">
        <div className="frame">
          <SectionHeading title="Pick how you want to work" />
          <ul className="mt-16 flex flex-col gap-12 md:mt-24 md:gap-16">
            {engagementModels.map((model) => (
              <li
                key={model.title}
                data-reveal
                className="grid gap-3 lg:grid-cols-12 lg:items-baseline"
              >
                <h3 className="text-head font-light lg:col-span-4">
                  {model.title}
                </h3>
                <p className="lg:col-span-5">{model.description}</p>
                <p className="text-lead lg:col-span-2 lg:col-start-11 lg:text-right">
                  {model.startingAt}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid gap-12 md:mt-28 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-5">
              <h3 className="text-lead">What&apos;s included</h3>
              <ul className="mt-5 flex flex-col gap-2">
                {[
                  "Free discovery call, no obligation",
                  "Written proposal with fixed scope & price",
                  "Milestone payments tied to deliverables",
                  "Weekly demos and async status updates",
                  "QA, deployment and analytics at launch",
                  "Post-launch support included",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="lg:col-span-5 lg:col-start-7"
            >
              <h3 className="text-lead">Communication</h3>
              <dl className="mt-5 flex flex-col gap-2">
                {TOOLS.map((tool) => (
                  <div key={tool.name} className="flex justify-between gap-4">
                    <dt className="font-medium">{tool.name}</dt>
                    <dd className="text-right text-muted-foreground">
                      {tool.role}
                    </dd>
                  </div>
                ))}
              </dl>
              <Button asChild size="lg" className="mt-8 w-full md:w-auto">
                <Link href="/contact">
                  Get a custom quote
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PortfolioGrid limit={1} />
      <Faq />
      <CtaSection />
    </>
  );
}
