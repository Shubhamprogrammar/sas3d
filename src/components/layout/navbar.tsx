"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Terms lives in the footer and Contact is the action button, so the bar
// keeps to five plain links.
const BAR_LINKS = NAV_LINKS.filter(
  (link) => link.href !== "/terms-conditions" && link.href !== "/contact"
);

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="dark sticky top-0 z-50 w-full bg-background text-foreground">
      <div className="frame flex h-16 items-center justify-between gap-6">
        <Link href="/" className="link-quiet font-medium">
          {SITE.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {BAR_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-quiet text-muted-foreground hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">
              Get in touch
              <ArrowUpRight />
            </Link>
          </Button>
          <button
            type="button"
            className="link-quiet h-11 px-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="frame flex h-[calc(100svh-4rem)] flex-col justify-between overflow-y-auto pt-6 pb-8 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "block py-1.5 text-head text-muted-foreground transition-colors hover:text-foreground",
                    pathname === link.href && "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 w-full" onClick={() => setOpen(false)}>
            <Link href="/contact">
              Get in touch
              <ArrowUpRight />
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
