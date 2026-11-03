import { SectionHeading } from "@/components/sections/section-heading";
import { HIGHLIGHTS } from "@/lib/constants";

export function Highlights() {
  return (
    <section id="highlights" className="section-space bg-muted">
      <div className="frame">
        <SectionHeading
          title="Early milestones that build trust"
          description="Small, meaningful signs of progress we can earn in our first year, without overstating the work."
        />
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:gap-8">
          {HIGHLIGHTS.map((highlight, index) => (
            <li
              key={highlight.title}
              data-reveal
              style={{ "--i": index } as React.CSSProperties}
            >
              <h3 className="text-lead">{highlight.title}</h3>
              <p className="mt-3">{highlight.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
