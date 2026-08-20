import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Lock } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProject } from "@/data/projects";
import { cn } from "@/lib/utils";

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

  return (
    <>
      <PageHeader eyebrow="Work" title={project.title} />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {/* {project.client} */}
              </span>
              {/* <span className="text-border">/</span> */}
              <span>{project.year}</span>
              <span className="text-border">/</span>
              <div className="flex flex-wrap gap-2">
                {project.role.map((role) => (
                  <Badge key={role} variant="outline" className="rounded-full">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {project.status === "confidential" ? (
                <Badge variant="outline" className="gap-1.5 rounded-full px-3 py-1">
                  <Lock className="size-3.5" />
                  Confidential client
                </Badge>
              ) : (
                project.liveUrl && (
                  <Button asChild size="sm" className="rounded-full">
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

          <div className="mt-8 relative aspect-[16/8] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {project.results.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1 bg-background px-6 py-8">
                <span className="text-4xl font-semibold tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The problem
              </p>
              <p className="mt-4 text-lg leading-8">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                The solution
              </p>
              <p className="mt-4 text-lg leading-8">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Our approach
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {project.approach.map((step, i) => (
              <div
                key={step}
                className="flex flex-col gap-3 rounded-xl border border-border bg-background p-6"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Selected visuals
          </p>
          <div
            className={cn(
              "mt-6 grid gap-4",
              project.gallery.length > 1
                ? "sm:grid-cols-2"
                : "sm:grid-cols-1"
            )}
          >
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted"
              >
                <Image
                  src={src}
                  alt={`${project.title} visual ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            >
              <ArrowLeft className="size-4" />
              Back to all work
            </Link>
            {next && (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group flex items-center gap-3 text-sm font-medium underline-offset-4 hover:underline"
              >
                Next project: {next.title}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
