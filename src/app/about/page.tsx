import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/page-header";
import { SectionHeading } from "@/components/sections/section-heading";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaSection } from "@/components/sections/cta-section";
import { TeamGrid } from "@/components/sections/team-grid";
import { Icon } from "@/components/icon";
import { CORE_VALUES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, values and people behind Craftlab Studio — a senior freelance team of designers, developers and writers.",
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
        eyebrow="About us"
        title="A small team with a senior bar"
        description="SAS3D started with one laptop and a simple belief: clients deserve senior work without agency overhead."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Our story
              </p>
              <div className="mt-5 flex flex-col gap-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                <p>
                  {SITE.name} was founded in {SITE.foundingYear} by Sandeep Pal, Abhishek
                  Mankumbare and Shubham Maurya after a decade working at agencies where client budgets
                  paid for layers of management. He wanted a different model:
                  experienced craftspeople doing the work directly, at a price
                  that makes sense for early-to-mid-stage companies.
                </p>
                <p>
                  What started as a three-person studio grew slowly and
                  deliberately. We only add a member when a client need recurs
                  often enough to justify it — which is why today we&apos;re
                  just {SITE.teamSize} people with {SITE.combinedYears} combined
                  years of experience and a portfolio we&apos;re proud of.
                </p>
                <p>
                  We stay small on purpose. Every project is led by a senior
                  craft lead, staffed with exactly the specialists it needs,
                  and reported on honestly — week one to launch.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1 bg-background p-6">
                    <span className="text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-border p-8">
                <p className="text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Working philosophy:
                  </span>{" "}
                  we ship fast, we put quality over quantity, and we judge our
                  work by the numbers it moves — not the pixels it contains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Core values"
            title="How we work, every project"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-muted">
                  <Icon name={value.icon} className="size-5" />
                </span>
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <TeamGrid heading={false} />

      <CtaSection />
    </>
  );
}
