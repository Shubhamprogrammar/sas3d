import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

interface PageMeta {
  /** Page title without the site-name suffix. */
  title?: string;
  description?: string;
}

const OG_IMAGE = {
  url: "/opengraph-image",
  type: "image/png",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — ${SITE.tagline}`,
};

function socialTitle(title?: string): string {
  return title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}

// Next.js replaces a parent's openGraph object instead of merging it, so each
// page needs the shared fields and app/opengraph-image alongside its own url.
export function pageOpenGraph(path: string, page: PageMeta = {}): Metadata["openGraph"] {
  return {
    title: socialTitle(page.title),
    description: page.description ?? SITE.description,
    url: path,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [OG_IMAGE],
  };
}

export function pageTwitter(page: PageMeta = {}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title: socialTitle(page.title),
    description: page.description ?? SITE.description,
    images: [OG_IMAGE.url],
  };
}

export function pageSeo(
  path: string,
  page: PageMeta = {}
): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  return {
    alternates: { canonical: path },
    openGraph: pageOpenGraph(path, page),
    twitter: pageTwitter(page),
  };
}
