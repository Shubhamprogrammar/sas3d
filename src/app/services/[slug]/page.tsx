import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";

import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject } from "@/data/projects";
import { getService, services } from "@/data/services";
import { whatsappUrl } from "@/lib/constants";
import { pageSeo } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";
import type { Project } from "@/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    ...pageSeo(`/services/${service.id}`, {
      title: service.seoTitle,
      description: service.seoDescription,
    }),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.id}`;
  const inquiryHref = `/contact?service=${encodeURIComponent(service.inquiryService)}#inquiry`;
  const relatedProjects = service.relatedProjects
    .map((projectSlug) => getProject(projectSlug))
    .filter((project): project is Project => Boolean(project));
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <JsonLd
        data={serviceJsonLd(service, {
          path,
          name: service.seoTitle,
          description: service.seoDescription,
        })}
      />

      {/* 1. Hero */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="hover:text-foreground">Services</Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-foreground">{service.title}</li>
            </ol>
          </nav>
          <div className="mt-8 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-background">
              <Icon name={service.icon} className="size-5" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {service.title}
            </p>
          </div>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {service.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {service.heroDescription}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 rounded-full px-6">
              <Link href={inquiryHref}>
                Get a Free Consultation
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 rounded-full px-6">
              <a
                href={whatsappUrl(
                  `Hello SAS3D, I would like to discuss a project related to ${service.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
              >
                <MessageCircle />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Problems */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Challenges we solve"
            title="Problems this service addresses"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solutions */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our approach" title="How SAS3D helps" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="flex gap-5 rounded-xl border border-border bg-background p-6"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Features and technologies */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="What you get" title="Features & deliverables" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Tools" title="Technologies" />
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
              {service.technologies.map((tech) => (
                <li key={tech}>
                  <Badge variant="outline" className="rounded-full px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              The final stack is chosen during planning based on your requirements and existing systems.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Use cases */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Use cases" title="What we can build for you" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-base font-semibold tracking-tight">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related projects (only rendered when real projects exist) */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Related work"
              title="Relevant projects"
              action={{ label: "Explore Our Work", href: "/portfolio" }}
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Process */}
      <ProcessSteps />

      {/* 9. FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description={`Common questions about ${service.title}.`}
            />
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="py-4 text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other services — internal linking */}
      <section className="pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 border-t border-border pt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Other services
            </p>
            <div className="flex flex-wrap gap-3">
              {otherServices.map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-foreground/40"
                >
                  {other.title}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              ))}
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              <ArrowLeft className="size-4" />
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Inquiry CTA */}
      <CtaSection
        title={`Ready to talk about ${service.title}?`}
        description="Tell us what you need and we'll discuss scope, approach and a quote based on your requirements."
        ctaLabel="Request a Quote"
        ctaHref={inquiryHref}
      />
    </>
  );
}
