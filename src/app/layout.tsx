import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { RevealObserver } from "@/components/layout/reveal-observer";
import { SITE } from "@/lib/constants";
import { team } from "@/data/team";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

// Runs before first paint so a stored dark theme never flashes light.
const bootScript = `(function(){var d=document.documentElement;d.classList.add("js");var s=null;try{s=localStorage.getItem("theme")}catch(e){}var m=window.matchMedia("(prefers-color-scheme: dark)").matches;d.classList.toggle("dark",s?s==="dark":m)})()`;

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  metadataBase: new URL(SITE.url),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      foundingDate: String(SITE.foundingYear),
      image: `${SITE.url}/opengraph-image`,
      areaServed: "Worldwide",
      member: team.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        url: `${SITE.url}/team/${member.slug}`,
        sameAs: Object.values(member.socials ?? {}).filter(Boolean),
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
