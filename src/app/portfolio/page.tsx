import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { PortfolioFilter } from "@/components/sections/portfolio-filter";
import { CtaSection } from "@/components/sections/cta-section";
import { pageSeo } from "@/lib/seo";

const title = "Our Work";
const description =
  "Projects by SAS3D — web applications, e-commerce, dashboards and SaaS platforms, with the problem, approach and technology behind each one.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/portfolio", { title, description }),
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
