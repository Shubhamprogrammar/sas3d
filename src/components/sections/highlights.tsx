import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/sections/section-heading";
import { HIGHLIGHTS } from "@/lib/constants";

export function Highlights() {
  return (
    <section id="highlights" className="bg-[#FA8072]/3 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Highlights"
          title="Early milestones that build trust"
          description="Small, meaningful signs of progress we can earn in our first year—without overstating the work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-xl"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-muted">
                <Icon name={highlight.icon} className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-5">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
