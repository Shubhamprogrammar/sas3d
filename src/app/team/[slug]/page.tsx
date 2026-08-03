import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CtaSection } from "@/components/sections/cta-section";
import { SocialIcon } from "@/components/layout/social-icons";
import { Badge } from "@/components/ui/badge";
import { team, getTeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Member not found" };
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const socialLinks = Object.entries(member.socials).map(([name, href]) => ({
    name,
    href,
  }));

  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to team
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {member.name}
                </h1>
                {member.founder && (
                  <Badge className="rounded-full">Founder</Badge>
                )}
              </div>
              <p className="mt-2 text-lg text-muted-foreground">
                {member.role} — {member.specialty}
              </p>
              <p className="mt-6 max-w-xl text-base leading-8">{member.bio}</p>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-border pt-8">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">
                    {member.experienceYears}+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years experience
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">
                    {member.projects}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Projects delivered
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Skills
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {socialLinks.length > 0 && (
                <div className="mt-8 flex items-center gap-2">
                  {socialLinks.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className={cn(
                        "flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                      )}
                    >
                      <SocialIcon name={name} />
                      <span className="sr-only">{name}</span>
                    </a>
                  ))}
                  <Link
                    href="/contact"
                    className="ml-2 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    Work with {member.name.split(" ")[0]}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
