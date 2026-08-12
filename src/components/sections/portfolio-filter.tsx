"use client";

import * as React from "react";

import { ProjectCard } from "@/components/sections/project-card";
// import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

// const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function PortfolioFilter() {
  const [active, setActive] = React.useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={active === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </div> */}

        <div
          className={cn(
            "mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
