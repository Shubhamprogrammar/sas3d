import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaSection } from "@/components/sections/cta-section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, UI/UX design, content writing, branding, marketing and audits — one senior team for your whole product.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Everything you need to ship"
        description="One team, every craft. Mix and match services: most projects combine design, development and content under a single fixed price."
      />

      <ServicesSection
        title="Six crafts, one team"
        description="Each craft below lists exactly what you get from it."
        action={null}
      />

      <section className="dark bg-field text-foreground">
        <div className="frame flex flex-col items-start gap-8 py-14 md:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="max-w-[44rem]">
            <h2 className="text-head">Not sure what you need?</h2>
            <p className="mt-5 text-lead font-light">
              Start with an audit: a senior second opinion for a flat fee.
            </p>
          </div>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            <Button asChild size="lg">
              <Link href="/contact">
                Request an audit
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <PortfolioGrid limit={1} />
      <ProcessSteps />
      <TechStack />
      <CtaSection />
    </>
  );
}
