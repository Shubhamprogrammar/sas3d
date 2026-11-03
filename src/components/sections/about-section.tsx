import { Fragment } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, User, Zap } from "lucide-react";

import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/sections/section-heading";
import { CORE_VALUES, SITE } from "@/lib/constants";

const structure = [
  { title: "Frontend", description: "Modern, responsive user experiences" },
  { title: "Backend", description: "Scalable & secure systems" },
  { title: "DevOps & AI", description: "Reliable deployment and smart automation" },
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

          <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-border p-8 shadow-xl">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-14 -bottom-14 size-44 rounded-full bg-violet-100/70 dark:bg-violet-500/10"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-8 size-28 rounded-full bg-violet-200/70 dark:bg-violet-500/15"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Team size & structure
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight">
                A focused {SITE.teamSize}-person team
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Three experienced engineers. One shared goal: build great
                products and help your business grow.
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-2 sm:flex-row">
                {structure.map((item, index) => (
                  <Fragment key={item.title}>
                    {index > 0 && (
                      <Plus className="size-3.5 shrink-0 self-center text-violet-500" />
                    )}
                    <div className="flex flex-1 flex-col items-center rounded-xl bg-violet-50 px-3 py-5 text-center dark:bg-violet-500/10">
                      <span className="flex size-11 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-500/20">
                        <User className="size-5 fill-current" />
                      </span>
                      <h4 className="mt-3 text-sm font-semibold">{item.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-violet-50/70 p-3 dark:bg-violet-500/5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">
                  <Zap className="size-4 fill-current" />
                </span>
                <p className="text-sm leading-6 text-muted-foreground">
                  A lean team with senior expertise, delivering end-to-end
                  solutions — from concept to deployment.
                </p>
              </div>
            </div>
            <Link
              href="/team"
              className="group relative inline-flex w-fit items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
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
