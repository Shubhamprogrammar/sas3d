import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group flex flex-col gap-6 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/30 sm:p-8",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono text-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{project.category}</span>
          <span className="text-border">/</span>
          <span>{project.year}</span>
        </div>
        {project.status === "confidential" ? (
          <Badge variant="outline" className="gap-1 rounded-full">
            <Lock className="size-3" />
            Confidential
          </Badge>
        ) : (
          <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        )}
      </div>

      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-balance text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.excerpt}
        </p>
      </div>

      <div className="mt-auto grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-muted/40">
        {project.results.slice(0, 3).map((metric) => (
          <div key={metric.label} className="px-4 py-4">
            <p className="text-lg font-semibold tracking-tight sm:text-xl">
              {metric.value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </Link>
  );
}
