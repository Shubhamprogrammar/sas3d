import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HeroRing, type RingFrame } from "@/components/sections/hero-ring";
import { Button } from "@/components/ui/button";
import { getScreens, projects } from "@/data/projects";
import { SITE } from "@/lib/constants";

// Confidential work stays out of the first screen.
const frames: RingFrame[] = projects
  .filter((project) => project.status !== "confidential")
  .flatMap((project) =>
    getScreens(project).map((src) => ({
      src,
      href: `/portfolio/${project.slug}`,
      name: project.name,
      year: project.year,
    }))
  );

export function Hero() {
  return (
    <HeroRing
      frames={frames}
      sentence={`${SITE.name} is a freelance team of designers, developers and DevOps engineers helping early-stage companies ship faster.`}
      action={
        <Button asChild size="lg" className="w-full md:w-auto">
          <Link href="/contact">
            Book a free consultation
            <ArrowUpRight />
          </Link>
        </Button>
      }
    />
  );
}
