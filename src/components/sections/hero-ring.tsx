"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

export type RingFrame = {
  src: string;
  href: string;
  name: string;
  year: string;
};

const PHONE_FRAMES = 12;

const round = (value: number) => Number(value.toFixed(3));

// Frames sit on a tilted ellipse: small at the top, larger towards the viewer,
// and each is turned so its base follows the curve. On a phone the ellipse
// becomes a circle wider than the screen, which leaves one arc above the text
// and one below it.
function placeFrame(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const phoneAngle = (index / PHONE_FRAMES) * Math.PI * 2 - Math.PI / 2;
  const nearness = 1 - Math.max(0, -Math.sin(angle));

  return {
    "--x": `${round(50 + 40 * Math.cos(angle))}%`,
    "--y": `${round(50 + 39 * Math.sin(angle))}%`,
    "--w": `${round(7.4 + 3.2 * nearness)}%`,
    "--mx": `calc(50% + ${round(66 * Math.cos(phoneAngle))}vw)`,
    "--my": `calc(50% + ${round(66 * Math.sin(phoneAngle))}vw)`,
    "--r": `${round(-24 * Math.sin(2 * angle))}deg`,
    "--mr": `${round(-20 * Math.sin(2 * phoneAngle))}deg`,
    "--i": index,
  } as React.CSSProperties;
}

export function HeroRing({
  frames,
  sentence,
  action,
}: {
  frames: RingFrame[];
  sentence: string;
  action: React.ReactNode;
}) {
  const [active, setActive] = React.useState<number | null>(null);
  const current = active === null ? null : frames[active];

  return (
    <section className="dark relative isolate h-[max(44rem,calc(100svh-4rem))] overflow-hidden bg-background text-foreground">
      {frames.map((frame, index) => (
        <Link
          key={frame.src}
          href={frame.href}
          data-frame
          aria-label={`${frame.name}, ${frame.year}`}
          style={placeFrame(index, frames.length)}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
          className={cn(
            "absolute top-(--my) left-(--mx) block w-[max(21vw,5rem)] -translate-x-1/2 -translate-y-1/2 rotate-(--mr) transition-opacity duration-200 md:top-(--y) md:left-(--x) md:w-[max(var(--w),5.5rem)] md:rotate-(--r)",
            index >= PHONE_FRAMES && "hidden md:block",
            active !== null && active !== index && "opacity-45",
            active === index && "z-10"
          )}
        >
          <span
            className={cn(
              "relative block aspect-4/3 overflow-hidden"
            )}
          >
            <Image
              src={frame.src}
              alt=""
              fill
              sizes="(min-width: 768px) 20vw, 40vw"
              className="object-cover object-top"
            />
          </span>
        </Link>
      ))}

      <div className="pointer-events-none absolute inset-0 grid place-items-center px-7">
        <div className="pointer-events-auto flex max-w-[37.5rem] flex-col items-center text-center">
          <h1 className="lines text-display whitespace-nowrap">
            <span className="line">
              <span data-line style={{ "--i": 0 } as React.CSSProperties}>
                Products people
              </span>
            </span>
            <span className="line">
              <span data-line style={{ "--i": 1 } as React.CSSProperties}>
                love to use
              </span>
            </span>
          </h1>
          <p
            data-load
            aria-live="polite"
            style={{ "--d": "420ms" } as React.CSSProperties}
            className="mt-6 flex min-h-[6.2em] max-w-[40ch] items-start justify-center md:min-h-[4.7em]"
          >
            {current ? `${current.name}, ${current.year}` : sentence}
          </p>
          <div data-load className="mt-4 w-full md:w-auto">
            {action}
          </div>
        </div>
      </div>
    </section>
  );
}
