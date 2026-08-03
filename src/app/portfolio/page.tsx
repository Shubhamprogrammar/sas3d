import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { PortfolioFilter } from "@/components/sections/portfolio-filter";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Craftlab Studio — the problems, the approach and the measurable results behind our projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Work that moved the numbers"
        description="Every project below breaks down the problem, our approach and — most importantly — the result."
      />
      <PortfolioFilter />
      <CtaSection />
    </>
  );
}
