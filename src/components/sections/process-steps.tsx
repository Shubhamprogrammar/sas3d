import { SectionHeading } from "@/components/sections/section-heading";
import { processSteps } from "@/data/services";
import { TOOLS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="bg-[#3E73A8]/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title="A process that removes surprises"
          description="Six steps from first call to launch — with a fixed price, fixed scope and weekly demos at every stage."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3 shadow-xl">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-muted/60 "
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-muted-foreground ">
                  {step.step}
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground shadow-xl">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight ">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background p-8 shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Communication tools
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                You always know where things stand.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm"
                  title={tool.role}
                >
                  <span className="size-1.5 rounded-full bg-foreground" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
