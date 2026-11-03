import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";

import { getScreens } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

// One project is one strip of its real screens, with its record underneath.
export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article className={cn("strip min-w-0", className)}>
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="strip-frames flex snap-x gap-2 overflow-x-auto transition-opacity duration-200 [scrollbar-width:none] md:overflow-visible">
          {getScreens(project).map((src, index) => (
            <div
              key={src}
              data-reveal="open"
              style={{ "--i": index } as React.CSSProperties}
              className="relative h-30 shrink-0 snap-start overflow-hidden bg-muted aspect-[2.1/1] md:h-auto md:min-w-0 md:flex-1"
            >
              <Image
                src={src}
                alt={`${project.name} screen ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 26vw, (min-width: 768px) 33vw, 260px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        <div data-reveal className="mt-4 grid gap-3 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-2">
          <h3 className="flex items-start gap-1.5 font-medium">
            <span className="link-quiet group-hover:decoration-current">
              {project.name}
            </span>
            {project.status === "confidential" ? (
              <Lock aria-label="Confidential" className="mt-1.5 size-3.5 shrink-0" />
            ) : (
              <ArrowUpRight
                aria-hidden
                className="mt-1 size-4 shrink-0 transition-transform duration-(--t-hover) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            )}
          </h3>
          <p className="text-muted-foreground">{project.year}</p>
          </div>
          <p className="lg:col-span-5">{project.excerpt}</p>
          <dl className="grid grid-cols-3 gap-4 lg:col-span-5">
            {project.results.slice(0, 3).map((metric) => (
              <div key={metric.label} className="min-w-0">
                <dd className="font-medium break-words">{metric.value}</dd>
                <dt className="text-small break-words text-muted-foreground">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Link>
    </article>
  );
}
