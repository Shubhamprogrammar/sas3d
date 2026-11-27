import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Our Expertise"
          description="Four ways we help businesses turn ideas and operational challenges into working digital solutions."
          action={{ label: "View Services", href: "/services" }}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30 shadow-xl"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                <Icon name={service.icon} className="size-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-col gap-2 pt-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="size-4 shrink-0 text-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-1 pt-2 text-sm font-medium underline-offset-4 hover:underline"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
