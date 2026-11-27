export * from "./project";
export * from "./team-member";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface Service {
  /** URL slug — the page lives at /services/{id}. */
  id: string;
  title: string;
  /** Short card description. */
  description: string;
  /** Key capabilities shown on cards. */
  deliverables: string[];
  icon: string;
  /** Service-page SEO title. */
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  problems: ServiceItem[];
  solutions: ServiceItem[];
  /** Concrete deliverables listed on the service page. */
  features: string[];
  technologies: string[];
  useCases: ServiceItem[];
  relatedProjects: string[];
  faqs: FaqItem[];
  /** Matches an inquiry-form service option, used to pre-select it. */
  inquiryService: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  source?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export type TermsBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: { label: string; text: string }[] }
  | { type: "contact"; lines: string[] };

export interface TermsSection {
  id: string;
  title: string;
  blocks: TermsBlock[];
}
