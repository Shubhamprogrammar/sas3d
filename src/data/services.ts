import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Blazing-fast, scalable websites and web apps built with modern stacks — from marketing sites to complex SaaS products.",
    deliverables: [
      "Next.js & React applications",
      "Headless CMS integrations",
      "Performance & SEO optimization",
      "Third-party integrations",
    ],
    icon: "code",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces users understand at a glance. Research-driven design that balances brand, usability and business goals.",
    deliverables: [
      "Product & website design",
      "UX research & testing",
      "Design systems & component libraries",
      "Interactive prototypes",
    ],
    icon: "pen-tool",
  },
  {
    id: "content-writing",
    title: "Content Writing",
    description:
      "Clear, human copy that converts — product copy, landing pages, blog engines and full content strategies.",
    deliverables: [
      "Website & product copy",
      "Content strategy & SEO",
      "Blog & pillar content programs",
      "Brand voice & tone guidelines",
    ],
    icon: "file-text",
  },
  {
    id: "branding",
    title: "Branding & Identity",
    description:
      "Positioning, visual identity and guidelines that make your team look as good as your product performs.",
    deliverables: [
      "Brand strategy & positioning",
      "Logo & visual identity",
      "Brand guidelines",
      "Marketing collateral",
    ],
    icon: "palette",
  },
  {
    id: "marketing",
    title: "Marketing & Growth",
    description:
      "Full-funnel growth: paid acquisition, landing experiences, lifecycle campaigns and the analytics to prove ROI.",
    deliverables: [
      "Performance marketing",
      "Landing page optimization",
      "Lifecycle & email campaigns",
      "Analytics & attribution",
    ],
    icon: "trending-up",
  },
  {
    id: "audits",
    title: "Audits & Consulting",
    description:
      "A senior second opinion. We audit your product or funnel and hand you a prioritized, build-ready roadmap.",
    deliverables: [
      "UX & conversion audits",
      "Technical/performance audits",
      "SEO & content audits",
      "Prioritized roadmaps",
    ],
    icon: "search-check",
  },
];

export const processSteps = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    description:
      "We dig into your goals, users and constraints. You leave with a clear problem statement and success metrics.",
    duration: "1–2 weeks",
  },
  {
    id: "proposal",
    step: "02",
    title: "Proposal",
    description:
      "A fixed-scope, fixed-price proposal with milestones, deliverables and a timeline you can hold us to.",
    duration: "3–5 days",
  },
  {
    id: "design",
    step: "03",
    title: "Design",
    description:
      "Wireframes to high-fidelity prototypes, reviewed with you in weekly calls until it feels exactly right.",
    duration: "2–4 weeks",
  },
  {
    id: "development",
    step: "04",
    title: "Development",
    description:
      "Clean, tested, production-grade code shipped in weekly increments so you always see working progress.",
    duration: "4–8 weeks",
  },
  {
    id: "delivery",
    step: "05",
    title: "Delivery",
    description:
      "Launch day. We handle QA, deployment, analytics and handover so the team can run everything alone.",
    duration: "1 week",
  },
  {
    id: "support",
    step: "06",
    title: "Support",
    description:
      "30 days of post-launch support plus optional retainers for iteration, maintenance and growth.",
    duration: "ongoing",
  },
] as const;
