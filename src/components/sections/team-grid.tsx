import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { team } from "@/data/team";
import { getInitialsColor, initials } from "@/lib/constants";

export function TeamGrid({
  heading = true,
  limit,
}: {
  heading?: boolean;
  limit?: number;
}) {
  const items = limit ? team.slice(0, limit) : team;

  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {heading && (
          <SectionHeading
            eyebrow="The team"
            title="Senior people, no pass-through"
            description="Designers, developers, Devops and Testers who have shipped together for years."
            action={{ label: "Meet everyone", href: "/team" }}
          />
        )}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {items.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group flex flex-col gap-5 rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30 shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    {member.founder && (
                      <Badge variant="secondary" className="rounded-full">
                        Founder
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {member.role} — {member.specialty}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
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
