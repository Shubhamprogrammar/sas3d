import { Quote } from "lucide-react";

import { StarRating } from "@/components/sections/star-rating";
import { SectionHeading } from "@/components/sections/section-heading";
import { Avatar } from "@/components/sections/team-grid";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Clients who said yes"
          description="Reviews from the founders and leaders we've shipped with — including ratings from Upwork and Fiverr."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col gap-5 rounded-xl border border-border bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <StarRating rating={testimonial.rating} />
                <Quote className="size-5 text-muted-foreground/40" />
              </div>
              <blockquote className="text-sm leading-7 text-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                {/* <Avatar
                  src={testimonial.avatar}
                  name={testimonial.name}
                  className="size-10"
                /> */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company} ·{" "}
                    {testimonial.source}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
