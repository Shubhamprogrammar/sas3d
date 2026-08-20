import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "zerodha-trading-platform-clone",
    title: "A full-featured stock trading platform inspired by Zerodha",
    client: "Trading Platform Clone",
    year: "2026",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/zerodha_1.png",
    gallery: [
      "/images/projects/zerodha_1.png",
      "/images/projects/zerodha_2.png",
      "/images/projects/zerodha_3.png",
    ],
    excerpt:
      "A full-stack stock trading platform clone that recreates the Zerodha experience — live market watch, portfolio management, order placement, and a seamless sign-up flow — built from the ground up.",
    problem:
      "Retail investors often juggle multiple tools to track market movements, manage portfolios, and place trades. The challenge was to deliver a single, familiar, and performant trading dashboard that feels like a production-grade brokerage platform rather than a static demo.",
    solution:
      "We built a complete Zerodha-inspired trading platform with a live market watchlist, detailed instrument pages, an interactive portfolio, and a smooth order flow. The app is fully responsive, fast, and designed to mirror the trusted, low-clutter aesthetic of the original while keeping the underlying codebase clean and maintainable.",
    approach: [
      "Studied the Zerodha product experience — navigation, market pages, portfolio views, and the sign-up funnel — to map the core screens a convincing clone needs.",
      "Designed a clean, information-dense trading UI with clear hierarchies for market data, holdings, and order placement, tuned for both desktop and mobile.",
      "Built a production-ready web application with real market data integration, a scalable design system, and reliable deployment workflows.",
    ],
    results: [
      { label: "Live market data", value: "Real-time" },
      { label: "Core flows", value: "5/5" },
      { label: "Fully responsive", value: "Yes" },
    ],
    liveUrl: "https://zerodha-trading-platform-clone.vercel.app/",
    tags: ["Fintech", "Trading", "Next.js"],
    featured: true,
  },
  {
    slug: "northpeak-ecommerce",
    title: "Store Securely Your ENV Credentials",
    client: "Northpeak",
    year: "2025",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/e_2.png",
    gallery: [
      "/images/projects/e_2.png",
      "/images/projects/env_1.png",
      "/images/projects/e_3.png",
    ],
    excerpt:
      "A secure environment credential management platform that helps developers store, organize, and manage sensitive ENV variables in one centralized workspace.",
    problem:
      "Developers were relying on local .env files, shared documents, and unsecured communication channels to manage environment credentials. This made it difficult to keep secrets organized across projects and environments while increasing the risk of accidentally exposing sensitive API keys, database credentials, and configuration values.",
    solution:
      "We built a centralized ENV credential management platform where developers can securely store, organize, and access environment variables. The experience separates credentials by project and environment, provides a clean dashboard for managing secrets, and simplifies the process of securely working with sensitive configuration values.",
    approach: [
    "Mapped common developer workflows for creating, storing, updating, and accessing environment credentials across different projects and deployment environments.",
    "Designed a secure and intuitive dashboard that makes projects, environments, credentials, and secret values easy to manage without exposing sensitive information unnecessarily.",
    "Built a scalable design system and production-ready web application with a focus on security, usability, responsive design, and reliable deployment workflows."
  ],
    results: [
      { label: "Centralized credentials", value: "100%" },
      { label: "Project organization", value: "Multi-env" },
      { label: "Secure access", value: "Protected" },
    ],
    liveUrl: "https://online-env-vault.vercel.app/",
    tags: ["E-commerce", "Next.js", "Performance"],
    featured: true,
  },
  {
    slug: "luma-saas-dashboard",
    title: "A graph-native commerce platform built for relationship intelligence",
    client: "WEXA.AI",
    year: "2026",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/s_1.png",
    gallery: [
      "/images/projects/s_1.png",
      "/images/projects/s_2.png",
      "/images/projects/s_3.png",
    ],
    excerpt:
      "A graph-first commerce platform where every screen is powered by traversals over a graph database, helping teams explore the hidden relationships between customers, products, sellers, and brands instead of digging through flat relational tables.",
    problem:
      "Marketplace data — customers, products, sellers, categories, brands — is deeply relational, but traditional dashboards flatten it into isolated tables and reports. Teams could see individual records, but not how those records connected to one another, making it slow and difficult to answer questions that spanned multiple entities or to spot patterns hidden a few hops away.",
    solution:
      "We built a graph-native commerce platform where every screen is powered by traversal queries over a graph database instead of conventional relational lookups. The experience centers on an interactive graph explorer that lets users search for any node — customer, product, seller, or brand — and visually walk its multi-hop connections, backed by dedicated Customer, Product, and Seller intelligence modules for deeper analysis.",
    approach: [
      "Mapped the core marketplace entities and their relationships — customers, products, sellers, categories, and brands — to define what a graph-first data model needed to support.",
      "Designed an interactive graph explorer and dedicated intelligence modules (Customer, Product, Seller) that make multi-hop relationships easy to search, traverse, and understand at a glance.",
      "Built a production-ready platform with an analytics suite, recommendations engine, and live database health monitoring, backed by a scalable design system and reliable deployment workflows."
    ],
    results: [
      { label: "First report in week 1", value: "22 → 71%" },
      { label: "Activation", value: "+49%" },
      { label: "Churn", value: "-27%" },
    ],
    liveUrl: "https://shopgraph.vercel.app/",
    tags: ["SaaS", "Dashboard", "IA"],
    featured: true,
  },
  {
    slug: "launchflow-internal-ops",
    title: "Internal operations platform for growing companies",
    client: "Confidential",
    year: "2026",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "confidential",
    cover: "/images/projects/launchflow_1.png",
    gallery: [
      "/images/projects/launchflow_1.png",
      "/images/projects/launchflow_2.png",
      "/images/projects/launchflow_3.png",
    ],
    excerpt:
      "Confidential client. A platform where companies sign up and manage their internal operations in one place.",
    problem:
      "Growing companies relied on spreadsheets, chat threads, and disconnected tools to run day-to-day internal operations. There was no single source of truth for teams to manage tasks, approvals, and workflows, which slowed things down as the organization scaled.",
    solution:
      "We designed and built a centralized operations platform where companies sign up, onboard their teams, and manage their internal operations — tasks, workflows, and approvals — through a clean, role-aware interface backed by a production-grade web application.",
    approach: [
      "Mapped how companies organize internal operations across teams, roles, and recurring workflows to define the core product surfaces.",
      "Designed a sign-up and onboarding experience plus clear operational dashboards that make work status and ownership easy to scan.",
      "Built a scalable, secure web application with a consistent design system and reliable deployment workflows.",
    ],
    results: [
      { label: "Centralized ops", value: "Single source" },
      { label: "Team onboarding", value: "Streamlined" },
      { label: "Workflow clarity", value: "End-to-end" },
    ],
    liveUrl: "https://launchflow-automate.duckdns.org/",
    tags: ["Internal Tools", "SaaS", "Web App"],
  },
  {
    slug: "atlas-content-platform",
    title: "Grocery is One Step a way from Your Door",
    client: "Atlas",
    year: "2024",
    category: "Content Writing",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/celeb_1.png",
    gallery: [
      "/images/projects/celeb_1.png",
      "/images/projects/celeb_2.png",
      "/images/projects/p1.svg",
    ],
    excerpt:
      "A convenient online grocery platform that connects customers with everyday essentials and makes ordering fresh groceries for doorstep delivery simple and hassle-free.",
    problem:
      "Customers often had to visit multiple stores or deal with inconvenient shopping experiences to find their everyday grocery essentials. The existing experience lacked a simple way to discover products, manage a shopping cart, and place grocery orders for convenient doorstep delivery.",
    solution:
      "We designed and developed a user-friendly grocery platform that brings essential products into a single online marketplace. Customers can browse categories, discover products, manage their cart, and complete their orders through a simple and streamlined shopping experience designed for both desktop and mobile users.",
    approach: [
    "Researched common grocery shopping behaviors to understand how users discover products, compare options, manage their carts, and complete online orders.",
    "Designed a simple category-based navigation and product discovery experience that makes frequently purchased groceries easy to find.",
    "Built a responsive and scalable web application with a consistent design system, streamlined checkout flow, and reliable deployment architecture."
  ],
    results: [
      { label: "Product discovery", value: "Simplified" },
      { label: "Shopping experience", value: "Streamlined" },
      { label: "Delivery ordering", value: "Easy & Fast" },
    ],
    liveUrl: "https://celebcart.vercel.app/register",
    tags: ["Grocery", "E-commerce", "Web App"],
  },
  {
    slug: "vertex-growth-campaign",
    title: "Full-funnel growth for a marketplace",
    client: "Vertex",
    year: "2023",
    category: "Marketing",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "confidential",
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
