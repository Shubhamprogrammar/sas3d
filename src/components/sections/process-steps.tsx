import { ProcessRow } from "@/components/sections/process-row";
import { SectionHeading } from "@/components/sections/section-heading";
import { TOOLS } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <section className="section-space">
      <div className="frame">
        <SectionHeading
          title="A process that removes surprises"
          description="Six steps from first call to launch, with a fixed price, fixed scope and weekly demos at every stage."
        />
      </div>

      <ProcessRow />

      <div className="frame mt-20 grid gap-8 md:mt-28 lg:grid-cols-12">
        <div data-reveal className="lg:col-span-4">
          <h3 className="text-lead">Communication tools</h3>
          <p className="mt-3">You always know where things stand.</p>
        </div>
        <ul
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
          className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-3 lg:col-span-7 lg:col-start-6"
        >
          {TOOLS.map((tool) => (
            <li key={tool.name}>
              <p className="font-medium">{tool.name}</p>
              <p className="text-small text-muted-foreground">{tool.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
