import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { TECH_STACK } from "@/lib/constants";

export function TechStack({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-[#3E73A8]/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {heading && (
          <SectionHeading
            eyebrow="Skills & tech stack"
            title="Tools we actually use"
            description="No buzzword padding — the languages, frameworks and software our clients get hands-on work in."
          />
        )}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-background p-6 shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
