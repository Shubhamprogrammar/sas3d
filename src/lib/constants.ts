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
    items: ["Figma", "Framer", "Sketch", "Adobe CC", "Maze", "Storybook"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Prisma", "Supabase", "tRPC"],
  },
  {
    category: "Content & Marketing",
    items: ["Sanity", "Contentful", "Notion", "GA4", "Hotjar", "Mailchimp"],
  },
  {
    category: "Infrastructure",
    items: ["Vercel", "AWS", "Docker", "Cloudflare", "Stripe", "Algolia"],
  },
  {
    category: "Collaboration",
    items: ["Slack", "Zoom", "Trello", "Linear", "Figma", "Loom"],
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
  name: "Craftlab Studio",
  shortName: "Craftlab",
  tagline: "We design & build products that people love to use",
  description:
    "Craftlab is a senior freelance team of designers, developers and writers helping early-to-mid-stage companies ship fast, high-quality digital products.",
  keywords: [
    "freelance team",
    "web development",
    "UI UX design",
    "product design",
    "content writing",
    "marketing",
    "portfolio",
  ],
  url: "https://craftlab.studio",
  email: "hello@craftlab.studio",
  phone: "+1 (555) 013-2211",
  location: "Remote — worldwide",
  foundingYear: 2016,
  teamSize: 7,
  combinedYears: 40,
  projectsDelivered: 120,
  happyClients: 80,
  socials: [
    { name: "Behance", href: "https://behance.net" },
    { name: "Dribbble", href: "https://dribbble.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
  bookingUrl: "https://cal.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Pricing", href: "/pricing" },
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
