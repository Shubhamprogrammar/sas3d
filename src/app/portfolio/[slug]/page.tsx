import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Lock } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { projects, getProject, getScreens } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const screens = getScreens(project);

  return (
    <>
      <PageHeader title={project.name} description={project.title} />

      <section className="dark bg-background pb-14 text-foreground md:pb-20">
        <div className="frame">
          <div
            data-load
            style={{ "--d": "260ms" } as React.CSSProperties}
            className="relative aspect-[2.1/1] overflow-hidden bg-muted"
          >
            <Image
              src={project.cover}
              alt={`${project.name} main screen`}
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground">
              {project.year}, {project.role.join(", ")}
            </p>
            {project.status === "confidential" ? (
              <p className="flex shrink-0 items-center gap-1.5 font-medium">
                <Lock className="size-4" />
                Confidential client
              </p>
            ) : (
              project.liveUrl && (
                <Button asChild className="shrink-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                    Visit live project
                  </a>
                </Button>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="frame">
          <h2 className="sr-only">Results</h2>
          <dl className="grid gap-8 md:grid-cols-3">
            {project.results.map((metric, metricIndex) => (
              <div
                key={metric.label}
                data-reveal
                style={{ "--i": metricIndex } as React.CSSProperties}
              >
                <dd className="text-head font-light break-words">
                  {metric.value}
                </dd>
                <dt className="mt-2">{metric.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-20 grid gap-12 md:mt-32 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-5">
              <h2 className="text-lead font-normal">The problem</h2>
              <p className="mt-4">{project.problem}</p>
            </div>
            <div
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="lg:col-span-5 lg:col-start-7"
            >
              <h2 className="text-lead font-normal">The solution</h2>
              <p className="mt-4">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-muted">
        <div className="frame grid gap-10 lg:grid-cols-12">
          <h2 data-reveal className="text-head lg:col-span-5">
            Our approach
          </h2>
          <ol className="flex list-decimal flex-col gap-6 pl-6 lg:col-span-6 lg:col-start-7">
            {project.approach.map((step, stepIndex) => (
              <li
                key={step}
                data-reveal
                style={{ "--i": stepIndex } as React.CSSProperties}
                className="pl-2"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space">
        <div className="frame">
          <h2 data-reveal className="text-head">
            Selected visuals
          </h2>
          <div className="mt-12 grid gap-2 md:mt-16 md:grid-cols-2">
            {screens.map((src, screenIndex) => (
              <div
                key={src}
                data-reveal="open"
                style={{ "--i": screenIndex % 2 } as React.CSSProperties}
                className="relative aspect-[2.1/1] overflow-hidden bg-muted first:md:col-span-2"
              >
                <Image
                  src={src}
                  alt={`${project.name} screen ${screenIndex + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">
            {project.tags.join(", ")}
          </p>
        </div>
      </section>

      <section className="bg-muted">
        <div className="frame flex flex-col gap-8 py-14 md:py-20">
          {next && (
            <Link href={`/portfolio/${next.slug}`} className="group block">
              <span className="flex items-center gap-3 text-head font-light">
                <span className="link-quiet group-hover:decoration-current">
                  Next: {next.name}
                </span>
                <ArrowUpRight className="size-[0.7em] shrink-0 transition-transform duration-(--t-hover) group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          )}
          <Link
            href="/portfolio"
            className="link-quiet inline-flex items-center gap-2 self-start font-medium"
          >
            <ArrowLeft className="size-4" />
            Back to all work
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
