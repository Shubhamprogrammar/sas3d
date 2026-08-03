import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingCards({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {heading && (
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent, senior-grade pricing"
            description="Fixed scope, fixed price. No surprise invoices, no junior pass-through. Pick a model that fits how you want to work."
            action={{ label: "See all pricing", href: "/pricing" }}
          />
        )}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col gap-6 rounded-2xl border p-8",
                plan.featured
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground ring-1 ring-foreground/10">
                  Most popular
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.featured ? "text-background/70" : "text-muted-foreground"
                  )}
                >
                  {plan.tagline}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.featured ? "text-background/70" : "text-muted-foreground"
                  )}
                >
                  {plan.period}
                </span>
              </div>
              <ul
                className={cn(
                  "flex flex-col gap-3 border-t pt-6 text-sm",
                  plan.featured ? "border-background/20" : "border-border"
                )}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.featured ? "text-background" : "text-foreground"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="mt-auto w-full"
              >
                <Link href="/contact">
                  {plan.cta}
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
