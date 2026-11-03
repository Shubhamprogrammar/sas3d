import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { SectionHeading } from "@/components/sections/section-heading";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaSection } from "@/components/sections/cta-section";
import { TeamGrid } from "@/components/sections/team-grid";
import { CORE_VALUES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, values and people behind SAS3D Studio — a freelance team of designers, developers and writers.",
};

const stats = [
  { value: SITE.foundingYear, label: "Founded" },
  { value: `${SITE.teamSize}`, label: "Team members" },
  { value: `${SITE.combinedYears}+`, label: "Combined years" },
  { value: `${SITE.projectsDelivered}+`, label: "Projects delivered" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A small team with a senior bar"
        description="SAS3D started with one laptop and a simple belief: clients deserve senior work without agency overhead."
      />

      <section className="section-space">
        <div className="frame grid gap-14 lg:grid-cols-12">
          <dl className="grid grid-cols-2 gap-6 lg:col-span-3 lg:grid-cols-1 lg:content-start">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                style={{ "--i": index } as React.CSSProperties}
              >
                <dd className="text-head font-light tabular-nums">{stat.value}</dd>
                <dt className="mt-1 text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2 data-reveal className="text-head">
              Our story
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-lead font-light">
              <p data-reveal>
                {SITE.name} was founded in {SITE.foundingYear} by Sandeep Pal,
                Abhishek Mankumbare and Shubham Maurya after a decade working at
                agencies where client budgets paid for layers of management.
                They wanted a different model: experienced craftspeople doing
                the work directly, at a price that makes sense for
                early-to-mid-stage companies.
              </p>
              <p data-reveal>
                {`What started as a three-person studio grew slowly and deliberately. We only add a member when a client need recurs often enough to justify it, which is why today we're just ${SITE.teamSize} people with ${SITE.combinedYears} combined years of experience and a portfolio we're proud of.`}
              </p>
              <p data-reveal>
                We stay small on purpose. Every project is led by a sas3d lead,
                staffed with exactly the specialists it needs, and reported on
                honestly, week one to launch.
              </p>
              <p data-reveal>
                Working philosophy: we ship fast, we put quality over quantity,
                and we judge our work by the numbers it moves, not the pixels it
                contains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-muted">
        <div className="frame">
          <SectionHeading title="How we work, every project" />
          <ul className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:gap-8">
            {CORE_VALUES.map((value, index) => (
              <li
                key={value.title}
                data-reveal
                style={{ "--i": index } as React.CSSProperties}
              >
                <h3 className="text-lead">{value.title}</h3>
                <p className="mt-3">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TeamGrid />

      <TechStack />

      <CtaSection />
    </>
  );
}
