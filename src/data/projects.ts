import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "finlight-banking-app",
    title: "Redesigning everyday money management",
    client: "Finlight",
    year: "2025",
    category: "Product Design",
    role: ["Product Design", "UX Research", "Design System"],
    status: "case-study",
    cover: "/images/projects/p1.svg",
    gallery: [
      "/images/projects/p1.svg",
      "/images/projects/p2.svg",
      "/images/projects/p3.svg",
    ],
    excerpt:
      "A full product redesign for a neobank that made budgeting feel effortless for 2M+ users across Europe.",
    problem:
      "Finlight's transaction experience was dense, jargon-heavy and hard to scan. Drop-off rates on the monthly overview were climbing and customer support tickets about 'where my money went' were the #1 category.",
    solution:
      "We rebuilt the transaction feed around clear, human categories, added smart monthly summaries, and designed a token-based design system so the team could ship new surfaces in days instead of weeks.",
    approach: [
      "Ran 18 user interviews and a 2-week diary study to map real money-management mental models.",
      "Prototyped three navigation structures and validated them with unmoderated tests on 300 users.",
      "Designed and shipped a 42-component design system with full accessibility coverage.",
    ],
    results: [
      { label: "Faster sign-up", value: "+32%" },
      { label: "Support tickets", value: "-41%" },
      { label: "App Store rating", value: "4.8★" },
    ],
    liveUrl: "https://example.com",
    tags: ["Mobile", "Fintech", "Design System"],
    featured: true,
  },
  {
    slug: "northpeak-ecommerce",
    title: "An e-commerce experience that sells",
    client: "Northpeak",
    year: "2025",
    category: "Web Development",
    role: ["Web Development", "Conversion Optimization"],
    status: "live",
    cover: "/images/projects/p2.svg",
    gallery: [
      "/images/projects/p2.svg",
      "/images/projects/p3.svg",
      "/images/projects/p4.svg",
    ],
    excerpt:
      "Headless storefront built on Next.js that took a D2C brand from 2.1% to 4.3% conversion in one quarter.",
    problem:
      "Northpeak's legacy storefront loaded slowly, had a clunky cart flow and no mobile-first checkout. Abandoned carts sat at 78% and the brand was losing share to faster competitors.",
    solution:
      "We rebuilt the storefront headlessly on Next.js with edge rendering, rebuilt the cart and checkout as a focused flow, and shipped A/B tests for pricing and upsell patterns.",
    approach: [
      "Audited the full funnel with session replays and analytics to find the three biggest drop-off points.",
      "Rebuilt performance-critical pages with edge-rendered components (LCP from 6.2s to 1.1s).",
      "Ran 12 A/B tests over 90 days and shipped the winning variants into the core experience.",
    ],
    results: [
      { label: "Conversion rate", value: "2.1 → 4.3%" },
      { label: "Page speed (LCP)", value: "1.1s" },
      { label: "Revenue", value: "+64%" },
    ],
    liveUrl: "https://example.com",
    tags: ["E-commerce", "Next.js", "Performance"],
    featured: true,
  },
  {
    slug: "luma-saas-dashboard",
    title: "A SaaS dashboard users actually understand",
    client: "Luma Analytics",
    year: "2024",
    category: "UI/UX Design",
    role: ["UI/UX Design", "Information Architecture"],
    status: "case-study",
    cover: "/images/projects/p3.svg",
    gallery: [
      "/images/projects/p3.svg",
      "/images/projects/p4.svg",
      "/images/projects/p5.svg",
    ],
    excerpt:
      "A ground-up information architecture and interface redesign for a B2B analytics platform.",
    problem:
      "Luma's dashboard was powerful but overwhelming — only 22% of new users ran their first report in week one, and churn tracked directly to that metric.",
    solution:
      "We restructured the dashboard around user goals instead of data models, introduced progressive disclosure, and built guided first-run templates that delivered value in under a minute.",
    approach: [
      "Ran a card-sorting study with 40 customers to re-derive the information architecture.",
      "Created a componentized UI kit aligned to the product's design language.",
      "Delivered a 'first-run' onboarding flow that fast-forwarded new users to their first report.",
    ],
    results: [
      { label: "First report in week 1", value: "22 → 71%" },
      { label: "Activation", value: "+49%" },
      { label: "Churn", value: "-27%" },
    ],
    tags: ["SaaS", "Dashboard", "IA"],
  },
  {
    slug: "meridian-brand-launch",
    title: "Brand + marketing site in 6 weeks",
    client: "Meridian Health",
    year: "2024",
    category: "Branding & Content",
    role: ["Branding", "Content Writing", "Web Development"],
    status: "confidential",
    cover: "/images/projects/p4.svg",
    gallery: [
      "/images/projects/p4.svg",
      "/images/projects/p5.svg",
      "/images/projects/p6.svg",
    ],
    excerpt:
      "Confidential client. End-to-end brand identity, launch copy and a marketing site for a health-tech startup.",
    problem:
      "A health-tech startup needed a trustworthy brand and website ahead of a funding announcement — with an unshakable 6-week deadline and strict confidentiality.",
    solution:
      "We ran a compressed brand sprint, defined the visual identity and voice, and shipped a fully CMS-driven marketing site — on time and under budget.",
    approach: [
      "Ran a 5-day brand sprint covering positioning, personality and visual direction.",
      "Wrote launch copy tuned for clinical credibility and consumer warmth.",
      "Built the site on a headless CMS so the team can publish content without engineering help.",
    ],
    results: [
      { label: "Time to launch", value: "6 weeks" },
      { label: "Organic traffic", value: "+3.2×" },
      { label: "Demo requests", value: "+58%" },
    ],
    tags: ["Branding", "Healthtech", "Copywriting"],
  },
  {
    slug: "atlas-content-platform",
    title: "Content engine for a B2B team",
    client: "Atlas",
    year: "2024",
    category: "Content Writing",
    role: ["Content Strategy", "SEO", "Writing"],
    status: "live",
    cover: "/images/projects/p5.svg",
    gallery: [
      "/images/projects/p5.svg",
      "/images/projects/p6.svg",
      "/images/projects/p1.svg",
    ],
    excerpt:
      "Built a repeatable content engine that turned Atlas from zero to 40k organic visitors per month.",
    problem:
      "Atlas had a great product but no organic presence. Every article was a one-off with no system behind it, and SEO traffic was stuck near zero.",
    solution:
      "We designed a topic-cluster strategy, built a content calendar and workflow, and produced 60+ pillar and cluster articles in partnership with subject-matter experts.",
    approach: [
      "Mapped 400+ keyword opportunities into 8 topic clusters with clear conversion paths.",
      "Set up a production workflow (brief → draft → expert review → edit → publish → optimize).",
      "Iterated on performance monthly, pruning and refreshing underperformers.",
    ],
    results: [
      { label: "Organic traffic", value: "0 → 40k/mo" },
      { label: "SQLs", value: "+3.4×" },
      { label: "Domain authority", value: "8 → 41" },
    ],
    liveUrl: "https://example.com",
    tags: ["Content", "SEO", "B2B"],
  },
  {
    slug: "vertex-growth-campaign",
    title: "Full-funnel growth for a marketplace",
    client: "Vertex",
    year: "2023",
    category: "Marketing",
    role: ["Performance Marketing", "Landing Pages", "Analytics"],
    status: "case-study",
    cover: "/images/projects/p6.svg",
    gallery: [
      "/images/projects/p6.svg",
      "/images/projects/p1.svg",
      "/images/projects/p2.svg",
    ],
    excerpt:
      "A 90-day growth sprint across paid acquisition, landing pages and analytics for a two-sided marketplace.",
    problem:
      "Vertex spent heavily on ads but paid acquisition cost was rising 20% quarter over quarter while activation of new suppliers stayed flat.",
    solution:
      "We rebuilt landing pages for each supply side, tightened audience targeting, and instrumented end-to-end attribution to kill unprofitable spend.",
    approach: [
      "Redesigned the supplier and buyer landing experiences with distinct value props.",
      "Rebuilt the ad account structure and creative testing system.",
      "Installed server-side tracking and a weekly reporting cadence the team could run alone.",
    ],
    results: [
      { label: "Cost per acquisition", value: "-38%" },
      { label: "Supplier activation", value: "+47%" },
      { label: "ROAS", value: "3.1×" },
    ],
    tags: ["Growth", "Marketing", "Analytics"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
