import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/sections/page-header";
import { TeamGrid } from "@/components/sections/team-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { teamJsonLd } from "@/lib/structured-data";
import { pageSeo } from "@/lib/seo";

const title = "Team";
const description =
  "Meet the senior designers, developers, Devops engineers and marketers behind SAS3D Studio.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/team"),
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamJsonLd({ path: "/team", name: title, description })} />
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
