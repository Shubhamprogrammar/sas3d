import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { team } from "@/data/team";
import { SITE } from "@/lib/constants";

const STRIP = [
  "/images/projects/food_2.png",
  "/images/projects/streamify_2.png",
  "/images/projects/heart_2.png",
];

export function CtaSection() {
  return (
    <section className="dark text-foreground">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {STRIP.map((src, index) => (
          <div
            key={src}
            className={`relative overflow-clip bg-muted ${index === 0 ? "col-span-2 aspect-4/3 md:col-span-1 md:aspect-auto" : "aspect-4/3 md:aspect-auto"} md:h-[40svh]`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="drift object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="bg-field">
        <div className="frame grid gap-10 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 data-reveal className="text-head">
              Let&apos;s build something worth shipping
            </h2>
            <p
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
              className="mt-6 max-w-[52ch]"
            >
              Tell us about your project and get a free consultation within one
              business day. No pitch, no pressure.
            </p>
            <div
              data-reveal
              style={{ "--i": 2 } as React.CSSProperties}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a free quote
                  <ArrowUpRight />
                </Link>
              </Button>
              <Link
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet font-medium"
              >
                Book a call
              </Link>
            </div>
          </div>

          <figure
            data-reveal
            style={{ "--i": 3 } as React.CSSProperties}
            className="self-end lg:col-span-4 lg:col-start-9"
          >
            <figcaption className="mb-3">
              You&apos;ll hear from one of us.
            </figcaption>
            <div className="flex gap-1">
              {team.slice(0, 3).map((member) => (
                <div
                  key={member.slug}
                  className="relative aspect-4/5 w-24 overflow-hidden md:w-28"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
