import { pricingPlans } from "@/data/pricing";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { SITE } from "@/lib/constants";
import type { PricingPlan, Service, TeamMember } from "@/types";

type JsonLdNode = Record<string, unknown>;

interface PageInfo {
  path: string;
  name: string;
  description: string;
}

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

// Only verified profiles belong here. The other SITE.socials links are placeholders.
const ORGANIZATION_SAME_AS = [
  "https://github.com/sas3dev",
  "https://www.instagram.com/sas3dev/",
];

function absoluteUrl(path: string): string {
  return `${SITE.url}${path}`;
}

function toGraph(nodes: JsonLdNode[]): JsonLdNode {
  return { "@context": "https://schema.org", "@graph": nodes };
}

function webPageNode(type: string, { path, name, description }: PageInfo): JsonLdNode {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
  };
}

function itemList(items: JsonLdNode[]): JsonLdNode {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
  };
}

function personSummary(member: TeamMember): JsonLdNode {
  const url = absoluteUrl(`/team/${member.slug}`);
  return {
    "@type": "Person",
    "@id": `${url}#person`,
    name: member.name,
    jobTitle: member.role,
    url,
    sameAs: Object.values(member.socials).filter(Boolean),
  };
}

function planOffer(plan: PricingPlan): JsonLdNode | null {
  const match = plan.price.match(/^From ₹([\d,]+)$/);
  if (!match) return null;

  return {
    "@type": "Offer",
    name: plan.name,
    description: plan.tagline,
    url: absoluteUrl("/pricing"),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: Number(match[1].replace(/,/g, "")),
      priceCurrency: "INR",
      unitText: plan.period,
    },
  };
}

export function siteJsonLd(): JsonLdNode {
  return toGraph([
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      foundingDate: String(SITE.foundingYear),
      image: absoluteUrl("/opengraph-image"),
      logo: absoluteUrl("/sas3d.jpeg"),
      areaServed: "Worldwide",
      knowsAbout: services.map((service) => service.title),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phone,
      },
      sameAs: ORGANIZATION_SAME_AS,
      member: team.map(personSummary),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": ORGANIZATION_ID },
    },
  ]);
}

export function webPageJsonLd(page: PageInfo): JsonLdNode {
  return toGraph([webPageNode("WebPage", page)]);
}

export function teamJsonLd(page: PageInfo): JsonLdNode {
  return toGraph([
    {
      ...webPageNode("CollectionPage", page),
      mainEntity: itemList(
        team.map((member) => {
          const { "@type": type, "@id": id, name, url } = personSummary(member);
          return { "@type": type, "@id": id, name, url };
        })
      ),
    },
  ]);
}

export function teamMemberJsonLd(member: TeamMember, page: PageInfo): JsonLdNode {
  return toGraph([
    {
      ...webPageNode("ProfilePage", page),
      mainEntity: {
        ...personSummary(member),
        description: member.bio,
        image: absoluteUrl(member.photo),
        knowsAbout: member.skills,
        worksFor: { "@id": ORGANIZATION_ID },
      },
    },
  ]);
}

export function servicesJsonLd(page: PageInfo): JsonLdNode {
  return toGraph([
    {
      ...webPageNode("CollectionPage", page),
      mainEntity: itemList(
        services.map((service) => ({
          "@type": "Service",
          "@id": `${absoluteUrl(`/services/${service.id}`)}#service`,
          name: service.title,
          description: service.description,
          url: absoluteUrl(`/services/${service.id}`),
          provider: { "@id": ORGANIZATION_ID },
        }))
      ),
    },
  ]);
}

export function pricingJsonLd(page: PageInfo): JsonLdNode {
  return toGraph([
    {
      ...webPageNode("WebPage", page),
      mainEntity: {
        "@type": "Service",
        "@id": `${absoluteUrl(page.path)}#service`,
        name: `${SITE.name} product design and development`,
        description: SITE.description,
        provider: { "@id": ORGANIZATION_ID },
        offers: pricingPlans.map(planOffer).filter(Boolean),
      },
    },
  ]);
}

function breadcrumbList(items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: Service, page: PageInfo): JsonLdNode {
  const url = absoluteUrl(page.path);
  return toGraph([
    {
      ...webPageNode("WebPage", page),
      mainEntity: { "@id": `${url}#service` },
      breadcrumb: breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.title, path: page.path },
      ]),
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.title,
      serviceType: service.title,
      description: service.seoDescription,
      url,
      areaServed: "Worldwide",
      provider: { "@id": ORGANIZATION_ID },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} use cases`,
        itemListElement: service.useCases.map((useCase) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: useCase.title,
            description: useCase.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]);
}
