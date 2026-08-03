import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: { label: string; href: string };
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center"
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <div
        className={cn(
          "flex w-full flex-col gap-6 md:flex-row md:items-end md:justify-between",
          align === "center" && "md:flex-col md:items-center"
        )}
      >
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {action && (
          <Link
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            {action.label}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
      {description && (
        <p
          className={cn(
            "max-w-xl text-base leading-7 text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
