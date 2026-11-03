import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export function PortfolioGrid({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section-space">
      <div className="frame grid gap-12 lg:grid-cols-12 lg:gap-8">
        {heading && (
          <div className="min-w-0 lg:col-span-3">
            <div className="flex flex-col items-start gap-4 lg:sticky lg:top-24">
              <h2 data-reveal className="text-lead font-normal">
                Work that moved the numbers
              </h2>
              <p data-reveal>
                Real projects, real outcomes. Every case study breaks down the
                problem, our approach and the result.
              </p>
              <Link
                href="/portfolio"
                data-reveal
                className="link-quiet group inline-flex items-center gap-1.5 font-medium"
              >
                View all work
                <ArrowUpRight className="size-4 transition-transform duration-(--t-hover) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        )}
        <div
          className={`sheet flex min-w-0 flex-col gap-14 md:gap-20 ${heading ? "lg:col-span-9" : "lg:col-span-12"}`}
        >
          {items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
