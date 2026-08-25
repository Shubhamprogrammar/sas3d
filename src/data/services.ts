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
    id: "Devops Engineer",
    title: "Devops Engineer",
    description:
      "Build, automate, and scale reliable infrastructure — CI/CD pipelines, cloud deployments, monitoring, and high-availability systems.",
    deliverables: [
      "CI/CD pipeline setup & automation",
      "Cloud infrastructure (AWS, DigitalOcean, Docker, Kubernetes)",
      "Monitoring, logging & alerting systems",
      "Infrastructure as Code (Terraform, Ansible)",
    ],
    icon: "file-text",
  },
  {
    id: "manager",
    title: "Product Manager",
    description:
    "Define product vision, align teams, and deliver user-centric solutions — from idea to launch with clear strategy and measurable impact.",
    deliverables: [
    "Product roadmap & strategy planning",
    "PRDs, user stories & requirement documentation",
    "Cross-team coordination (design, dev, QA)",
    "Data-driven decision making & KPI tracking"
],
    icon: "package",
  },
  {
    id: "tester",
    title: "QA / Software Tester",
    description:
     "Ensure product quality and reliability through structured testing, automation, and bug tracking across the development lifecycle.",
    deliverables: [
     "Manual & automated testing (UI, API)",
     "Test case design & execution",
     "Bug tracking & reporting (JIRA, etc.)",
     "Performance & regression testing",
],
    icon: "bug",
  },
  {
    id: "AI Engineer",
    title: "AI Engineer",
    description:
     "Design and build intelligent systems using machine learning and AI — from data pipelines to model deployment and optimization.",
    deliverables: [
      "ML model development & training",
      "Data preprocessing & feature engineering",
      "Model deployment & API integration",
      "AI system optimization & monitoring",
],
    icon: "brainCircuit",
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
