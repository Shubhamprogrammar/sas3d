import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { CORE_VALUES, SITE } from "@/lib/constants";

const structure = [
  { label: "Designers", value: "2" },
  { label: "Web Developers", value: "3" },
  { label: "Product Managers", value: "1" },
  { label: "Mobile Developers", value: "2" },
  { label: "Devops", value: "1" },
  { label: "AI Specialists", value: "1" },
  { label: "Tester", value: "2" },
];

export function   AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About us"
          title="A small team, a senior bar"
          description={`${SITE.name} started in ${SITE.foundingYear} with one laptop and a simple belief: clients deserve senior work without agency overhead. Today we're a ${SITE.teamSize}-person team with ${SITE.combinedYears} combined years shipping products together.`}
          action={{ label: "More about us", href: "/about" }}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border p-8 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Our philosophy
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {CORE_VALUES.map((value) => (
                <div key={value.title} className="flex flex-col gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-muted border shadow-lg">
                    <Icon name={value.icon} className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{value.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-border p-8 shadow-xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Team size & structure
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {structure.map((item) => (
                  <Badge key={item.label} variant="secondary" className="h-8 gap-2 rounded-full px-3 text-sm font-medium shadow-lg">
                    {item.value}
                    <span className="text-muted-foreground">{item.label}</span>
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Every project is led by a senior craft lead and staffed with
                exactly the specialists it needs — never a bench of juniors
                learning on your budget.
              </p>
            </div>
            <Link
              href="/team"
              className="group inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
              Meet the team
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
