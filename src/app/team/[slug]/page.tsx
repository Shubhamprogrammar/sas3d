import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CtaSection } from "@/components/sections/cta-section";
import { SocialIcon } from "@/components/layout/social-icons";
import { team, getTeamMember } from "@/data/team";

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
      <section className="dark bg-background text-foreground">
        <div className="frame grid gap-10 pt-10 pb-16 md:pb-24 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div
              data-load
              style={{ "--d": "60ms" } as React.CSSProperties}
              className="relative aspect-4/5 overflow-hidden bg-muted"
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col justify-end lg:order-2 lg:col-span-6 lg:col-start-7">
            <h1 data-load style={{ "--d": "120ms" } as React.CSSProperties} className="text-head md:text-display">
              {member.name}
            </h1>
            <p className="mt-4 text-lead font-light">
              {member.founder ? "Founder" : member.role}, {member.specialty}
            </p>
            <p className="mt-6 max-w-[60ch]">{member.bio}</p>

            <dl className="mt-10 flex flex-wrap gap-12">
              <div>
                <dd className="text-head font-light tabular-nums">
                  {member.experienceYears}+
                </dd>
                <dt className="mt-1 text-muted-foreground">Years experience</dt>
              </div>
              <div>
                <dd className="text-head font-light tabular-nums">
                  {member.projects}+
                </dd>
                <dt className="mt-1 text-muted-foreground">
                  Projects delivered
                </dt>
              </div>
            </dl>

            <div className="mt-10">
              <h2 className="text-body font-medium">Skills</h2>
              <p className="mt-2 max-w-[60ch] text-muted-foreground">
                {member.skills.join(", ")}
              </p>
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="-ml-3 flex items-center">
                  {socialLinks.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-11 items-center justify-center transition-opacity duration-(--t-hover) hover:opacity-60"
                    >
                      <SocialIcon name={name} />
                      <span className="sr-only">{name}</span>
                    </a>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="link-quiet inline-flex items-center gap-1.5 font-medium"
                >
                  Work with {member.name.split(" ")[0]}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            )}

            <Link
              href="/team"
              className="link-quiet mt-8 inline-flex items-center gap-2 self-start font-medium"
            >
              <ArrowLeft className="size-4" />
              Back to team
            </Link>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
