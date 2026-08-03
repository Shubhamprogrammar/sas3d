export * from "./project";
export * from "./team-member";

export interface Service {
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
  duration: string;
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
