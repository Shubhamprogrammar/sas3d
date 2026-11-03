"use client";

import * as React from "react";

import { ProjectCard } from "@/components/sections/project-card";
// import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

// const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function PortfolioFilter() {
  const [active] = React.useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section className="section-space">
      <div className="frame">
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

        <div className="sheet flex min-w-0 flex-col gap-14 md:gap-24">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
