import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { TeamGrid } from "@/components/sections/team-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the senior designers, developers, writers and marketers behind SAS3D Studio.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Senior people, no pass-through"
        description="Six specialists who have shipped together for years. Every project is led by a senior craft lead and staffed with exactly the skills it needs."
      />
      <TeamGrid heading={false} />
      <CtaSection />
    </>
  );
}
