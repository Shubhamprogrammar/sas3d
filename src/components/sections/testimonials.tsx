import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const LEAD_ID = "t6";

export function Testimonials() {
  const lead = testimonials.find((t) => t.id === LEAD_ID) ?? testimonials[0];
  const others = testimonials.filter((t) => t.id !== lead.id);

  return (
    <section className="dark bg-background text-foreground">
      <div className="frame flex min-h-svh flex-col justify-between gap-20 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 data-reveal className="text-head">
              Clients who said yes
            </h2>
            <p
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="mt-5 max-w-[44ch]"
            >
              Reviews from the founders and leaders we&apos;ve shipped with,
              including ratings from Upwork and Fiverr.
            </p>
          </div>
          <figure
            data-reveal
            style={{ "--i": 2 } as React.CSSProperties}
            className="lg:col-span-7 lg:col-start-6"
          >
            <blockquote className="text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] leading-[1.2] font-light tracking-[-0.02em]">
              “{lead.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-medium">{lead.name}</p>
              <p className="text-muted-foreground">
                {lead.role}, {lead.company}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {others.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              data-reveal
              style={{ "--i": index } as React.CSSProperties}
              className={cn(index % 2 === 1 && "lg:mt-20")}
            >
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-small text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
