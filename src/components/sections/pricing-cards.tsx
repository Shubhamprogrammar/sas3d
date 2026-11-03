"use client";

import Link from "next/link";
import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing";
import type { PricingPlan } from "@/types";
import { cn } from "@/lib/utils";

function PlanStage({ plan }: { plan: PricingPlan }) {
  const from = plan.price.startsWith("From ");
  const figure = from ? plan.price.slice(5) : plan.price;

  return (
    <div key={plan.id} className="animate-in duration-200 fade-in">
      <p className="text-lead">{plan.tagline}</p>
      <p className="mt-6 flex flex-wrap items-baseline gap-x-3">
        {from && <span>From</span>}
        <span className="text-[clamp(3.75rem,8vw,7.5rem)] leading-none font-light tracking-[-0.04em] tabular-nums">
          {figure}
        </span>
        <span>{plan.period}</span>
      </p>
      <ul className="mt-8 flex flex-col gap-1.5">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button asChild size="lg" className="mt-8 w-full md:w-auto">
        <Link href="/contact">
          {plan.cta}
          <ArrowUpRight />
        </Link>
      </Button>
    </div>
  );
}

export function PricingCards({ heading = true }: { heading?: boolean }) {
  const initial =
    pricingPlans.find((plan) => plan.featured)?.id ?? pricingPlans[0].id;
  const [selected, setSelected] = React.useState(initial);
  const current =
    pricingPlans.find((plan) => plan.id === selected) ?? pricingPlans[0];

  return (
    <section className="section-space">
      <div className="frame">
        {heading && (
          <div className="mb-16 md:mb-24">
            <SectionHeading
              title="Transparent, senior-grade pricing"
              description="Fixed scope, fixed price. No surprise invoices, no junior pass-through. Pick a model that fits how you want to work."
            />
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-12">
          <ul className="flex flex-col gap-4 lg:col-span-6 lg:gap-2">
            {pricingPlans.map((plan) => {
              const isSelected = plan.id === selected;
              return (
                <li key={plan.id}>
                  <h3 className="font-light">
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelected(plan.id)}
                      onFocus={() => setSelected(plan.id)}
                      className={cn(
                        "flex items-center gap-[0.25em] text-left text-[clamp(2.625rem,10vw,5rem)] leading-[1.1] tracking-[-0.035em] transition-colors duration-(--t-hover) lg:text-display",
                        isSelected
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {plan.name}
                      {plan.featured && (
                        <span className="text-small tracking-normal">
                          Most popular
                        </span>
                      )}
                    </button>
                  </h3>
                </li>
              );
            })}
          </ul>

          <div className="lg:col-span-5 lg:col-start-8">
            <PlanStage key={current.id} plan={current} />
          </div>
        </div>

        {heading && (
          <Link
            href="/pricing"
            className="link-quiet group mt-12 inline-flex items-center gap-1.5 font-medium"
          >
            See all pricing
            <ArrowUpRight className="size-4 transition-transform duration-(--t-hover) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}

        <noscript>
          <ul className="mt-12 flex flex-col gap-2">
            {pricingPlans.map((plan) => (
              <li key={plan.id}>
                {plan.name}: {plan.price} {plan.period}
              </li>
            ))}
          </ul>
        </noscript>
      </div>
    </section>
  );
}
