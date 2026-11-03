import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <h2 data-reveal className="text-head lg:col-span-7">
        {title}
      </h2>
      {(description || action) && (
        <div
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
          className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9"
        >
          {description && <p className="max-w-[60ch]">{description}</p>}
          {action && (
            <Link
              href={action.href}
              className="link-quiet group inline-flex items-center gap-1.5 font-medium"
            >
              {action.label}
              <ArrowUpRight className="size-4 transition-transform duration-(--t-hover) group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
