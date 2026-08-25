import { cn } from "@/lib/utils";

export const HIGHLIGHTS = [
  {
    icon: "award",
    title: "Best Freelance Studio — 2025",
    description:
      "Named among the top 1% of product teams on Upwork for two years running, based on client reviews and on-time delivery.",
  },
  {
    icon: "trophy",
    title: "Featured on Product Hunt",
    description:
      "Three client launches hit the #1 Product of the Day slot, driving 100k+ visitors to each launch page.",
  },
  {
    icon: "zap",
    title: "Featured on UX Collective",
    description:
      "Recognized as a benchmark for structure, clarity and product storytelling in '50 Essential Freelance Portfolios'.",
  },
  {
    icon: "star",
    title: "4.9/5 average rating",
    description:
      "Across 120+ completed projects and 300+ reviews on Upwork, Fiverr and direct referrals.",
  },
] as const;

export const TECH_STACK = [
  {
    category: "Design",
    items: ["Figma", "Framer", "Sketch", "Adobe CC", "Maze", "Storybook", "Zeplin", "Principle", "ProtoPie", "InVision", ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Three.js", "Redux", "Zustand", "Recoil", "React Query", "Gsap", "Framer Motion", "React Three Fiber", "Tanstack Query", "React Hook Form"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Prisma", "Supabase", "Firebase", "MongoDB", "Express.js", "Django", "Flask", "GraphQL", "REST APIs", ],
  },
  {
    category: "Product Management",
    items: ["Jira", "Trello", "Asana", "Notion", "ClickUp", "Monday.com", "Airtable", "Confluence", "Miro", "Lucidchart", "Figma Jam", "Slack", "Microsoft Teams"],
  },
  {
    category: "Infrastructure & DevOps",
    items: ["Vercel", "AWS", "Docker", "Cloudflare", "Stripe", "GitHub Actions", "Prometheus", "Kubernetes", "Nginx", "CI/CD Pipelines", "Ubuntu Server", "Google Cloud Platform",],
  },
  {
    category: "QA/Testing",
    items: ["Jest", "Playwright", "Unit Testing", "Testing Library", "Postman", "Load Testing Tools", "Integration Testing", "End-to-End Testing", "Swagger", "Manual Testing", "Bug Tracking Tools"]
  },
] as const;

export const CORE_VALUES = [
  {
    icon: "rocket",
    title: "We ship fast",
    description:
      "Momentum beats perfection. We ship working increments weekly and keep the polish loop tight.",
  },
  {
    icon: "gem",
    title: "Quality over quantity",
    description:
      "We take on fewer projects so every one gets senior attention. No junior pass-through, no template work.",
  },
  {
    icon: "users",
    title: "Radical transparency",
    description:
      "Open budgets, honest timelines and plain-language updates. You always know exactly where things stand.",
  },
  {
    icon: "handshake",
    title: "Business outcomes, not pixels",
    description:
      "Every deliverable ties back to a metric that matters to you — conversions, retention, revenue.",
  },
] as const;

export const TOOLS = [
  { name: "Slack", role: "Daily communication" },
  { name: "Zoom", role: "Weekly calls" },
  { name: "Trello", role: "Shared task tracking" },
  { name: "Linear", role: "Development sprints" },
  { name: "Figma", role: "Design collaboration" },
  { name: "Loom", role: "Async walkthroughs" },
] as const;

export const SITE = {
  name: "SAS3D Studio",
  shortName: "SAS3D",
  tagline: "We design & build products that people love to use",
  description:
    "SAS3D is a freelance team of designers, developers and Devops engineers helping early-to-mid-stage companies ship fast, high-quality digital products.",
  keywords: [
    "freelance team",
    "web development",
    "UI UX design",
    "product design",
    "content writing",
    "marketing",
    "portfolio",
  ],
  url: "https://sas3d.in",
  email: "developers@sas3d.in",
  phone: "+91 8850093749",
  location: "Remote — worldwide",
  foundingYear: 2025,
  teamSize: 3,
  combinedYears: 1.5,
  projectsDelivered: 9,
  happyClients: 8,
  socials: [
    { name: "Instagram", href: "https://sas3d.net" },
    { name: "Twitter", href: "https://sas3d.com" },
    { name: "GitHub", href: "https://sas3d.com" },
    { name: "LinkedIn", href: "https://sas3d.com" },
  ],
  bookingUrl: "https://sas3d.in",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
  { label: "Terms", href: "/terms-conditions" },
  { label: "Contact", href: "/contact" },
] as const;

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function getInitialsColor(name: string): string {
  const colors = [
    "bg-zinc-900",
    "bg-zinc-700",
    "bg-stone-900",
    "bg-neutral-800",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return colors[hash % colors.length];
}

export { cn };
