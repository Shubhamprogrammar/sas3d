import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "tomato-food-delivery",
    title: "A full-stack food delivery platform with real-time ordering and admin controls",
    client: "Tomato",
    year: "2025",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/food_1.png",
    gallery: [
      "/images/projects/food_1.png",
      "/images/projects/food_2.png",
      "/images/projects/food_3.png",
    ],
    excerpt:
      "A modern full-stack food delivery platform with seamless user experience, real-time admin controls, secure Stripe payments, and order tracking — built with React, Node.js, and MongoDB.",
    problem:
      "Building a food delivery platform requires handling multiple complex workflows simultaneously — user authentication, real-time menu browsing, cart management, secure payment processing, order tracking, and an admin panel for restaurant management. The challenge was to deliver a production-grade experience across all these surfaces with a clean, maintainable codebase.",
    solution:
      "We built a complete full-stack food delivery platform called Tomato with a React frontend, Node.js/Express backend, and MongoDB database. The platform features JWT authentication, Stripe payment integration, real-time order management, and a dedicated admin panel for menu and order control — all deployed across Vercel and Render.",
    approach: [
      "Mapped the end-to-end food ordering flow — from user registration and menu browsing through cart management, Stripe checkout, and order tracking — to define the core application surfaces.",
      "Designed a clean, fast user interface with responsive food item browsing, category filtering, cart management, and order history, plus a separate admin panel for menu and order control.",
      "Built a production-ready full-stack application with JWT authentication, Stripe payments, RESTful API architecture, and reliable deployment workflows across Vercel and Render.",
    ],
    results: [
      { label: "Full-stack features", value: "12+" },
      { label: "Payment integration", value: "Stripe" },
      { label: "Admin panel", value: "Included" },
    ],
    liveUrl: "https://food-del-three-liard.vercel.app/",
    tags: ["Food Delivery", "Full-Stack", "React"],
    featured: true,
  },
  {
    slug: "open-your-hearts",
    title: "A community-driven initiative for spreading kindness and support",
    client: "Open Your Hearts",
    year: "2025",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/heart_1.png",
    gallery: [
      "/images/projects/heart_1.png",
      "/images/projects/heart_2.png",
      "/images/projects/heart_3.png",
    ],
    excerpt:
    
      "A community-driven initiative dedicated to spreading kindness, empathy, and support to those in need.",
    problem:
      "Communities often lack a centralized platform to organize and coordinate acts of kindness and support for those in need. Spreading empathy and help requires structured initiatives that can connect people with opportunities to make a difference.",
    solution:
      "We designed and built Open Your Hearts, a community platform that enables people to discover, participate in, and contribute to kindness initiatives. The platform connects volunteers with causes, tracks community impact, and creates a space where empathy and support can flourish.",
    approach: [
      "Mapped the core community engagement journey — discovering initiatives, participating in events, and tracking collective impact — to define the essential product surfaces.",
      "Designed a warm, inviting interface with intuitive navigation that encourages community participation and makes it easy to find ways to help.",
      "Built a responsive web application with event management, volunteer coordination features, and impact tracking to support meaningful community connections."
    ],
    results: [
      { label: "Community impact", value: "Growing" },
      { label: "Initiatives", value: "Active" },
      { label: "Engagement", value: "Community-driven" },
    ],
    liveUrl: "https://openyourhearts.vercel.app/",
    tags: ["Community", "Social Impact", "Web App"],
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
    slug: "streamify-social-learning",
    title: "A social learning platform where friends learn languages together",
    client: "Stremify",
    year: "2026",
    category: "Web Development",
    role: ["Product Design", "UX Research", "Design System", "Web Development", "Devops"],
    status: "live",
    cover: "/images/projects/streamify_1.png",
    gallery: [
      "/images/projects/streamify_1.png",
      "/images/projects/streamify_2.png",
      "/images/projects/streamify_3.png",
    ],
    excerpt:
      "A social learning platform built with the MERN stack that lets users connect with friends, chat in real time, and make video calls — so people can learn new languages together in an interactive, engaging way.",
    problem:
      "Language learning is often a lonely, repetitive grind. Learners practicing alone quickly lose motivation, most apps offer little real human interaction, and coordinating practice with friends means juggling separate chat and video tools. The challenge was to bring connection, conversation, and collaborative language learning into one seamless social experience.",
    solution:
      "We built Stremify, a social learning platform powered by the MERN stack where users connect with friends, chat in real time, and jump into video calls together. By combining social interaction with collaborative language practice, Stremify makes learning new languages fun, social, and effective — keeping learners engaged, accountable, and coming back.",
    approach: [
      "Mapped the core learner journey — connecting with friends, starting conversations, joining video calls, and practicing languages together — to define the essential product surfaces.",
      "Designed an interactive, engaging interface with friend connections, real-time chat, and seamless video call flows that make collaborative learning feel natural and fun.",
      "Built a production-ready MERN stack application with MongoDB, Express, React, and Node.js — delivering real-time communication, shared learning experiences, and reliable performance across devices.",
    ],
    results: [
      { label: "Real-time chat", value: "Built-in" },
      { label: "Video calls", value: "Seamless" },
      { label: "Learn together", value: "Social" },
    ],
    liveUrl: "https://streamifyweb-umber.vercel.app/",
    tags: ["Social Learning", "MERN Stack", "Video Calls"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
