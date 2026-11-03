import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Faq } from "@/components/sections/faq";
import { SocialIcon } from "@/components/layout/social-icons";
import { team } from "@/data/team";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SAS3D Studio — book a free consultation or get a fixed-price quote within one business day.",
};

const details = [
  { label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Based", value: SITE.location, href: undefined },
  { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}` },
  { label: "Book a call", value: "Free 30-min consultation", href: SITE.bookingUrl },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's talk about your project"
        description="Tell us where you are and where you want to be. We'll reply within one business day with honest next steps."
      />

      <section className="section-space">
        <div className="frame grid gap-14 lg:grid-cols-12">
          <div className="order-2 flex flex-col gap-10 lg:order-1 lg:col-span-4">
            <h2 className="sr-only">Other ways to reach us</h2>
            <dl className="flex flex-col gap-6">
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  data-reveal
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <dt className="text-small text-muted-foreground">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-lead break-words">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="link-quiet"
                        {...(detail.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <figure data-reveal>
              <div className="flex gap-1">
                {team.slice(0, 3).map((member) => (
                  <div
                    key={member.slug}
                    className="relative aspect-4/5 w-24 overflow-hidden bg-muted md:w-28"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
              <figcaption className="mt-3">
                You&apos;ll hear from one of us.
              </figcaption>
            </figure>

            <div data-reveal>
              <h3 className="text-small font-normal text-muted-foreground">
                Find us elsewhere
              </h3>
              <div className="mt-1 -ml-3 flex items-center">
                {SITE.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex size-11 items-center justify-center transition-opacity duration-(--t-hover) hover:opacity-60"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
