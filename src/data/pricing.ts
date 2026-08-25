import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "sprint",
    name: "Sprint",
    tagline: "A focused project, shipped fast",
    price: "From $4,900",
    period: "per project",
    features: [
      "1 dedicated sas3d lead",
      "2-week design or build sprint",
      "Fixed scope & fixed price",
      "Weekly demos & async updates",
      "30 days of post-launch support",
    ],
    cta: "Book a sprint",
  },
  {
    id: "engagement",
    name: "Engagement",
    tagline: "End-to-end product delivery",
    price: "From $14,900",
    period: "per project",
    features: [
      "Full cross-functional team",
      "Discovery → design → build → launch",
      "Dedicated Slack channel",
      "Weekly stakeholder calls",
      "QA, deployment & analytics",
      "60 days of post-launch support",
    ],
    cta: "Get a quote",
    featured: true,
  },
  {
    id: "retainer",
    name: "Retainer",
    tagline: "A senior team on call",
    price: "From $6,500",
    period: "per month",
    features: [
      "Priority access to the team",
      "Up to 80 hours/month",
      "Iteration, maintenance & growth",
      "Monthly roadmap & reporting",
      "Pause or cancel anytime",
    ],
    cta: "Book a call",
  },
];

export const engagementModels = [
  {
    title: "Hourly",
    description:
      "Best for small, open-ended tasks — audits, fixes, reviews. Billed in 0.5h increments, invoiced weekly.",
    startingAt: "$95/hr",
  },
  {
    title: "Fixed-price",
    description:
      "Best for well-scoped projects. Fixed scope, fixed price, milestone payments. We absorb overruns.",
    startingAt: "$4,900",
  },
  {
    title: "Retainer",
    description:
      "Best for ongoing work. A monthly commitment gets you priority access and a dedicated senior team.",
    startingAt: "$6,500/mo",
  },
];

export const faqs = [
  {
    question: "How fast will you respond?",
    answer:
      "We reply to every inquiry within one business day. In a sprint or retainer, you get responses within a few hours during working time via your dedicated Slack channel.",
  },
  {
    question: "What if the scope changes mid-project?",
    answer:
      "Our fixed-price quotes include a clear change-control process. Small changes are absorbed; significant new scope is quoted transparently before any work begins — no surprises.",
  },
  {
    question: "Can you sign an NDA?",
    answer:
      "Yes, absolutely. We routinely work under NDAs and will happily sign yours before we discuss your project or share any material.",
  },
  {
    question: "Do you work with clients in our timezone?",
    answer:
      "We're fully remote and overlap with US, EU and Asia-Pacific timezones. Weekly calls are scheduled at your convenience and everything else runs async.",
  },
  {
    question: "Who owns the code and designs?",
    answer:
      "You do. Once the invoice is paid, all designs, code, and content are 100% yours — including the files, repos and credentials.",
  },
  {
    question: "What if we need ongoing support after launch?",
    answer:
      "Every project includes a free post-launch support window. After that, you can move to a monthly retainer or buy support hours as needed.",
  },
];
