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
        <p key={index} className="mt-4">
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3 key={index} className="mt-8 text-lead">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul key={index} className="mt-4 flex list-disc flex-col gap-2 pl-5">
          {block.items.map((item, i) => (
            <li key={i}>
              <strong className="font-medium">{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <p key={index} className="mt-4">
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
    <>
      <section className="dark bg-background text-foreground">
        <div className="frame grid gap-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-12 lg:items-end">
          <h1 className="text-display lg:col-span-7">Terms and Conditions</h1>
          <p className="text-muted-foreground lg:col-span-4 lg:col-start-9">
            Last updated: August 25, 2026
          </p>
        </div>
      </section>

      <div className="frame grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <nav
            aria-label="On this page"
            className="bg-muted p-5 lg:sticky lg:top-24 lg:p-6"
          >
            <h2 className="text-body font-medium">On this page</h2>
            <div className="mt-3 flex max-h-[32vh] flex-col overflow-y-auto lg:max-h-[70vh]">
              {TOC.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-current={active === item.id ? "true" : undefined}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "py-1.5 text-left transition-colors duration-(--t-hover) hover:text-foreground",
                    active === item.id
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        <div className="max-w-[70ch] lg:col-span-7 lg:col-start-6">
          {SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-14 scroll-mt-24"
            >
              <h2 className="text-lead font-normal">{section.title}</h2>
              {section.blocks.map((block, i) => renderBlock(block, i))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
