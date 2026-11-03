"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { processSteps } from "@/data/services";

// Weeks each step takes at its longest, read from its stated duration, so the
// block under each step is a true picture of how long it runs: tall on larger
// screens, a bar on a phone. Support has no end, so it takes a fixed size.
const WEEKS: Record<string, number> = {
  discovery: 2,
  proposal: 1,
  design: 4,
  development: 8,
  delivery: 1,
  support: 3,
};

export function ProcessRow() {
  const scroller = React.useRef<HTMLOListElement>(null);
  const bar = React.useRef<HTMLDivElement>(null);

  const syncBar = React.useCallback(() => {
    const el = scroller.current;
    if (!el || !bar.current) return;
    const seen = (el.scrollLeft + el.clientWidth) / el.scrollWidth;
    bar.current.style.transform = `scaleX(${Math.min(1, seen)})`;
  }, []);

  React.useEffect(() => {
    syncBar();
    window.addEventListener("resize", syncBar);
    return () => window.removeEventListener("resize", syncBar);
  }, [syncBar]);

  const move = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * 312,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="mt-12 md:mt-16">
      <div className="frame hidden items-center gap-4 md:flex">
        <div className="h-1.5 flex-1 bg-border">
          <div
            ref={bar}
            className="h-full origin-left scale-x-50 bg-foreground transition-transform duration-200"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous steps"
            onClick={() => move(-1)}
            className="flex size-12 items-center justify-center bg-foreground text-background transition-transform duration-(--t-press) active:scale-95"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next steps"
            onClick={() => move(1)}
            className="flex size-12 items-center justify-center bg-foreground text-background transition-transform duration-(--t-press) active:scale-95"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <ol
        ref={scroller}
        onScroll={syncBar}
        tabIndex={0}
        aria-label="Our six steps, from first call to launch"
        className="mx-auto flex max-w-[100rem] flex-col gap-10 px-5 md:mt-8 md:snap-x md:flex-row md:gap-8 md:overflow-x-auto md:px-8 md:pb-2 md:[scrollbar-width:none]"
      >
        {processSteps.map((step) => (
          <li
            key={step.id}
            className="flex shrink-0 snap-start flex-col md:w-[calc(50vw-3rem)] md:scroll-ml-8 lg:w-80"
          >
            <h3 className="text-lead font-medium">{step.title}</h3>
            <p className="mt-3 md:min-h-[9.5em]">{step.description}</p>
            <p className="mt-3 font-medium md:hidden">{step.duration}</p>
            <div className="mt-2 flex flex-col justify-end md:mt-auto md:min-h-[20rem]">
              <div
                style={{ "--weeks": WEEKS[step.id] } as React.CSSProperties}
                className="flex h-5 w-[calc(var(--weeks)*12.5%)] items-end bg-field text-field-foreground md:h-[calc(var(--weeks)*2.5rem)] md:w-full md:p-3"
              >
                <p className="hidden font-medium md:block">{step.duration}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
