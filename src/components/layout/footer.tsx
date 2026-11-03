import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SocialIcon } from "@/components/layout/social-icons";
import { NAV_LINKS, SITE } from "@/lib/constants";

const tile = "flex flex-col justify-between gap-8 bg-muted p-5 md:p-6";

export function Footer() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="mx-auto grid w-full max-w-[100rem] grid-cols-2 gap-1.5 p-1.5 md:gap-2 md:p-2 lg:grid-cols-12">
        <Link
          href="/"
          className="col-span-2 flex min-h-40 items-center justify-center bg-foreground text-[clamp(3.5rem,13vw,13rem)] leading-none font-light tracking-[-0.04em] text-background lg:order-5 lg:col-span-8 lg:min-h-80"
        >
          {SITE.shortName}
        </Link>

        <Link
          href="/contact"
          className="group col-span-2 flex min-h-40 flex-col justify-between bg-primary p-5 text-lead font-medium text-primary-foreground transition-colors duration-(--t-hover) hover:bg-(--primary-strong) md:p-6 lg:order-6 lg:col-span-4 lg:min-h-80"
        >
          Start a project
          <ArrowUpRight
            aria-hidden
            strokeWidth={1.5}
            className="size-16 self-end transition-transform duration-(--t-hover) group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

        <nav aria-label="Footer" className={`${tile} lg:order-2 lg:col-span-3`}>
          <ul className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-quiet">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${tile} lg:order-4 lg:col-span-3`}>
          <a
            href={`mailto:${SITE.email}`}
            className="link-quiet text-body font-medium break-words"
          >
            {SITE.email}
          </a>
          <div className="-ml-3 flex flex-wrap items-center">
            {SITE.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex size-11 items-center justify-center text-muted-foreground transition-colors duration-(--t-hover) hover:text-foreground"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>

        <div className={`${tile} lg:order-3 lg:col-span-2`}>
          <p>{SITE.location}</p>
          <div className="flex flex-col gap-1.5">
            <a
              href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
              className="link-quiet"
            >
              {SITE.phone}
            </a>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              Book a free consultation
            </a>
          </div>
        </div>

        <div className={`${tile} lg:order-1 lg:col-span-4`}>
          <p className="text-lead">{SITE.tagline}.</p>
          <p className="text-small text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
