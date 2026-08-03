import { SectionHeading } from "@/components/sections/section-heading";
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
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {heading && (
          <SectionHeading
            eyebrow="Case studies"
            title="Work that moved the numbers"
            description="Real projects, real outcomes. Every case study breaks down the problem, our approach and the result."
            action={{ label: "View all work", href: "/portfolio" }}
          />
        )}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
