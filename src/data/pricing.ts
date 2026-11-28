import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Business launch for startups, small businesses & professionals",
    price: "From ₹15,000",
    period: "per project",
    features: [
      "5–8 responsive pages",
      "UI implementation & contact forms",
      "WhatsApp integration",
      "Basic SEO & deployment",
      "15 days of bug support",
    ],
    cta: "Get started",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Business solutions for growing businesses & startups",
    price: "From ₹50,000",
    period: "per project",
    features: [
      "Custom website or web application",
      "Frontend, backend & database integration",
      "Authentication & admin dashboard",
      "API integrations",
      "Testing & deployment",
      "30 days of bug support",
    ],
    cta: "Get a quote",
    featured: true,
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Digital transformation for established businesses & funded startups",
    price: "From ₹75,000",
    period: "per project",
    features: [
      "Custom software architecture",
      "Complex backends & multiple user roles",
      "Advanced integrations & workflow automation",
      "AI features where required",
      "Cloud deployment, documentation & handover",
      "30–45 days of bug support",
    ],
    cta: "Book a call",
  },
];

export const engagementModels = [
  {
    title: "Hourly",
    description:
      "Best when the scope isn't defined enough for a fixed price — audits, fixes, ongoing changes. Billed at role-based hourly rates.",
    startingAt: "₹700/hr",
  },
  {
    title: "Fixed-price",
    description:
      "Best for well-scoped projects. Approved scope document, fixed price and 40/40/20 milestone payments. Scope changes are quoted in writing.",
    startingAt: "₹8,000",
  },
  {
    title: "Maintenance",
    description:
      "Best for ongoing upkeep after launch. Monthly or annual plans covering updates, fixes and support for websites and applications.",
    startingAt: "₹2,000/mo",
  },
];

export const faqs = [
  {
    question: "How fast will you respond?",
    answer:
      "We reply to every inquiry within one business day. During a project, you get responses within a few hours during working time via your dedicated channel.",
  },
  {
    question: "What if the scope changes mid-project?",
    answer:
      "Every fixed-price project starts from an approved scope document. Any change needs your written approval and a revised estimate before work begins — no surprises.",
  },
  {
    question: "How do payments work?",
    answer:
      "Standard projects are billed 40% in advance, 40% at the development milestone and 20% on completion. Small projects are 50% in advance and 50% before handover. Proposals are valid for 15 days.",
  },
  {
    question: "Are taxes and third-party costs included?",
    answer:
      "No. GST is stated separately where applicable. Hosting, domains, WhatsApp provider fees, AI API usage and other third-party charges are billed separately — never hidden in development fees.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes, absolutely. We routinely work under NDAs and will happily sign yours before we discuss your project or share any material.",
  },
  {
    question: "Do you work with clients in our timezone?",
    answer:
      "We're fully remote and overlap with US, EU and Asia-Pacific timezones. International projects are quoted in USD. Weekly calls are scheduled at your convenience and everything else runs async.",
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do. Source-code ownership and transfer terms are written into every contract — once the final invoice is paid, all designs, code and content are yours, including the files, repos and credentials.",
  },
  {
    question: "What if we need ongoing support after launch?",
    answer:
      "Every project includes 15–45 days of bug support, depending on the package. After that, you can move to a monthly or annual maintenance plan starting at ₹2,000/month.",
  },
];
