import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { TeamGrid } from "@/components/sections/team-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/json-ld";
import { teamPageJsonLd } from "@/lib/structured-data";

const description =
  "Meet the senior designers, developers, Devops engineers and marketers behind SAS3D Studio.";

export const metadata: Metadata = {
  title: "Team",
  description,
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamPageJsonLd(description)} />
      <PageHeader
        eyebrow="The team"
        title="Senior people, no pass-through"
        description="Three specialists who have shipped together for years. Every project is led by a sas3d lead and staffed with exactly the skills it needs."
      />
      <TeamGrid heading={false} />
      <CtaSection />
    </>
  );
}
