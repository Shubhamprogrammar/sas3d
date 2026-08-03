"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">
            {SITE.shortName[0]}
          </span>
          {SITE.shortName}
          <span className="hidden text-muted-foreground sm:inline">Studio</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "bg-muted font-medium text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link href="/contact">
              Get in touch
              <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    active && "bg-muted font-medium text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2" onClick={() => setOpen(false)}>
              <Link href="/contact">
                Get in touch
                <ArrowUpRight />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
