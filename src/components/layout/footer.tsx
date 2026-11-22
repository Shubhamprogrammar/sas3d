import Link from "next/link";

import { SocialIcon } from "@/components/layout/social-icons";
import { services } from "@/data/services";
import { NAV_LINKS, SITE, inquiryMailto, whatsappUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              {SITE.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SITE.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={inquiryMailto()}
                  data-cta="email"
                  className="break-all transition-colors hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  data-cta="whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp {SITE.phone}
                </a>
              </li>
              <li>{SITE.location}</li>
              <li>
                <Link
                  href="/contact#inquiry"
                  className="transition-colors hover:text-foreground"
                >
                  Get a Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built with care by the {SITE.name} team — ships fast, quality over
            quantity.
          </p>
        </div>
      </div>
    </footer>
  );
}
