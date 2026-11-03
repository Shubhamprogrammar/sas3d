import { SectionHeading } from "@/components/sections/section-heading";
import { TECH_STACK } from "@/lib/constants";

export function TechStack({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section-space bg-muted">
      <div className="frame">
        {heading && (
          <SectionHeading
            title="Tools we actually use"
            description="No buzzword padding: the languages, frameworks and software our clients get hands-on work in."
          />
        )}
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-3 lg:gap-y-20">
          {TECH_STACK.map((group, index) => (
            <div
              key={group.category}
              data-reveal
              style={{ "--i": index % 3 } as React.CSSProperties}
            >
              <h3 className="font-medium">{group.category}</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 leading-[1.35] text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
