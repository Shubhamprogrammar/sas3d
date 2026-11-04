import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

// Next.js replaces a parent's openGraph object instead of merging it, so each
// page needs the shared fields and app/opengraph-image alongside its own url.
export function pageOpenGraph(path: string): Metadata["openGraph"] {
  return {
    title: SITE.name,
    description: SITE.description,
    url: path,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  };
}

export function pageSeo(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: pageOpenGraph(path),
  };
}
