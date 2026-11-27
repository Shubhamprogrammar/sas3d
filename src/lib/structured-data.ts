import { pricingPlans } from "@/data/pricing";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { SITE } from "@/lib/constants";
import type { PricingPlan, TeamMember } from "@/types";

const CONTEXT = "https://schema.org";
const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const organizationRef = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE.name,
};

const websiteRef = { "@type": "WebSite", "@id": WEBSITE_ID };

function memberUrl(member: TeamMember) {
  return `${SITE.url}/team/${member.slug}`;
}

function personBase(member: TeamMember) {
  return {
    "@type": "Person",
    "@id": `${memberUrl(member)}#person`,
    name: member.name,
    jobTitle: member.role,
    url: memberUrl(member),
    sameAs: Object.values(member.socials).filter(Boolean),
  };
}

export const siteJsonLd = {
  "@context": CONTEXT,
  "@graph": [
    {
      ...organizationRef,
      alternateName: SITE.shortName,
      url: SITE.url,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      foundingDate: String(SITE.foundingYear),
      image: `${SITE.url}/opengraph-image`,
      areaServed: "Worldwide",
      member: team.map(personBase),
    },
    {
      ...websiteRef,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

export function teamMemberJsonLd(member: TeamMember) {
  return {
    "@context": CONTEXT,
    "@type": "ProfilePage",
    "@id": `${memberUrl(member)}#profile`,
    url: memberUrl(member),
    name: `${member.name} — ${member.role}`,
    isPartOf: websiteRef,
    mainEntity: {
      ...personBase(member),
      description: member.bio,
      image: `${SITE.url}${member.photo}`,
      knowsAbout: member.skills,
      worksFor: organizationRef,
    },
  };
}

export function teamPageJsonLd(description: string) {
  return {
    "@context": CONTEXT,
    "@type": "CollectionPage",
    "@id": `${SITE.url}/team#page`,
    url: `${SITE.url}/team`,
    name: `Team — ${SITE.name}`,
    description,
    isPartOf: websiteRef,
    about: organizationRef,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: team.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: member.name,
        url: memberUrl(member),
      })),
    },
  };
}

export const servicesJsonLd = {
  "@context": CONTEXT,
  "@graph": services.map((service) => ({
    "@type": "Service",
    "@id": `${SITE.url}/services#${service.id}`,
    name: service.title,
    description: service.description,
    url: `${SITE.url}/services`,
    provider: organizationRef,
  })),
};

// Plan prices are display strings such as "From ₹10,900", so the listed amount is a minimum.
function planOffer(plan: PricingPlan) {
  return {
    "@type": "Offer",
    url: `${SITE.url}/pricing`,
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: Number(plan.price.replace(/\D/g, "")),
      priceCurrency: "INR",
      unitText: plan.period,
    },
  };
}

export const pricingJsonLd = {
  "@context": CONTEXT,
  "@graph": pricingPlans.map((plan) => ({
    "@type": "Service",
    "@id": `${SITE.url}/pricing#${plan.id}`,
    name: plan.name,
    description: plan.tagline,
    url: `${SITE.url}/pricing`,
    provider: organizationRef,
    offers: planOffer(plan),
  })),
};
