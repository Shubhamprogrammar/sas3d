"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { termsSections } from "@/data/terms";
import type { TermsBlock } from "@/types";

const SECTIONS = termsSections;
const TOC = SECTIONS.map((s) => ({ id: s.id, title: s.title }));

function renderBlock(block: TermsBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="pb-4">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3
          key={index}
          className="text-xl font-semibold text-foreground mt-4"
        >
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul
          key={index}
          className="list-disc list-inside space-y-2 text-sm text-muted-foreground"
        >
          {block.items.map((item, i) => (
            <li key={i}>
              <strong className="text-foreground">{item.label}</strong>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <p key={index} className="pb-4">
          {block.lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < block.lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      );
    default:
      return null;
  }
}

export function TermsContent() {
  const [active, setActive] = useState("1");

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  useEffect(() => {
    const sections = TOC.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Terms and Conditions
        </h1>
        <p className="pb-8 text-muted-foreground">Last updated: August 25, 2026</p>

        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 rounded-2xl border border-border bg-background p-6 shadow-xl">
              <nav>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  On this page
                </h2>
                <div className="max-h-[70vh] overflow-y-auto pr-2 space-y-1">
                  {TOC.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                      className={cn(
                        "block w-full text-left text-sm rounded-lg px-3 py-1.5 transition-colors",
                        active === item.id
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-2 prose max-w-none text-muted-foreground">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 mb-10"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                {section.blocks.map((block, i) => renderBlock(block, i))}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
