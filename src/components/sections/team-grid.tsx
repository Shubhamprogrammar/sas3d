import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { team } from "@/data/team";
import { getInitialsColor, initials } from "@/lib/constants";

// Portraits share one height at unequal widths, the way frames sit on a sheet.
const SPANS = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3"];

export function TeamGrid({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const items = limit ? team.slice(0, limit) : team;

  return (
    <section className="section-space">
      <div className="frame">
        {heading && (
          <SectionHeading
            title="Senior people, no pass-through"
            description="Designers, developers, DevOps and testers who have shipped together for years."
            action={{ label: "Meet everyone", href: "/team" }}
          />
        )}
        <div
          className={`grid gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 ${heading ? "mt-16 md:mt-24" : ""}`}
        >
          {items.map((member, index) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className={`group block ${SPANS[index % SPANS.length]}`}
            >
              <div
                data-reveal="open"
                style={{ "--i": index } as React.CSSProperties}
                className="relative aspect-4/5 overflow-hidden bg-muted lg:aspect-auto lg:h-[clamp(26rem,42vw,40rem)]"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  loading={!heading && index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div
                data-reveal
                style={{ "--i": index } as React.CSSProperties}
                className="mt-3 flex items-start justify-between gap-3"
              >
                <div>
                  <h3 className="link-quiet group-hover:decoration-current">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {member.founder ? "Founder" : member.role},{" "}
                    {member.specialty}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform duration-(--t-hover) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Avatar({
  src,
  name,
  className,
}: {
  src?: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full ${getInitialsColor(name)} ${className}`}
    >
      {src ? (
        <Image src={src} alt={name} width={80} height={80} className="size-full object-cover" />
      ) : (
        <span className="text-sm font-semibold text-background">
          {initials(name)}
        </span>
      )}
    </div>
  );
}
