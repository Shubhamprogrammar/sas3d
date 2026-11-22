import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/sections/page-header";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TechStack } from "@/components/sections/tech-stack";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { Icon } from "@/components/icon";
import { capabilities, services } from "@/data/services";
import { servicesJsonLd } from "@/lib/structured-data";
import { pageSeo } from "@/lib/seo";

const title = "Services";
const description =
  "Web development, custom software, business automation and AI-powered solutions from SAS3D — built around your business requirements.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/services", { title, description }),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd({ path: "/services", name: title, description })} />
      <PageHeader
        eyebrow="Services"
        title="Digital solutions built around your business"
        description="We help businesses build websites, custom software, automation and AI-powered tools. Every project starts with understanding your requirements."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="What we deliver" title="Our Expertise" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-muted">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-auto flex flex-col gap-2.5 border-t border-border pt-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Supporting capabilities"
              title="Skills behind every project"
              description="Design, delivery and quality work that supports each of the services above."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.id}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-background p-6"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-muted">
                    <Icon name={capability.icon} className="size-4" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {capability.description}
                  </p>
                  <ul className="mt-auto flex flex-col gap-1.5 pt-2">
                    {capability.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-foreground p-8 text-background">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-background/60">
                  Not sure what you need?
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  Describe the problem — we&apos;ll help you work out the right approach.
                </h3>
              </div>
              <Link
                href="/contact#inquiry"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-background px-5 text-sm font-medium text-foreground"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <TechStack />
      <CtaSection />
    </>
  );
}
