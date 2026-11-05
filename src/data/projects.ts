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
    liveUrl: "https://tomato.sas3d.in/",
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
      "A PWA community platform for organizing kindness initiatives — installable, offline-capable, with real-time notifications. Built with Next.js, TypeScript, and a Node.js/Express backend with Socket.IO.",
    problem:
      "Communities often lack a centralized platform to organize and coordinate acts of kindness and support for those in need. Spreading empathy and help requires structured initiatives that can connect people with opportunities to make a difference — accessible even on low-bandwidth or offline scenarios.",
    solution:
      "We designed and built Open Your Hearts as a Progressive Web App (PWA) — a community platform that enables people to discover, participate in, and contribute to kindness initiatives. The platform connects volunteers with causes, tracks community impact, and creates a space where empathy and support can flourish, with full offline support and native app-like experience.",
    approach: [
      "Mapped the core community engagement journey — discovering initiatives, participating in events, and tracking collective impact — to define the essential product surfaces.",
      "Designed a warm, inviting interface with intuitive navigation that encourages community participation and makes it easy to find ways to help.",
      "Built a full-stack PWA with Next.js (React, TypeScript, Tailwind) featuring Service Worker for offline caching, Web App Manifest for installability, and Push API for real-time notifications.",
      "Developed a Node.js/Express backend with MongoDB featuring JWT authentication, real-time Socket.IO notifications, image uploads, social features (follow, likes, bookmarks, comments with @mentions), reporting, daily prompts, and weekly email digests.",
      "Implemented security hardening: Helmet headers, rate limiting, bcrypt password hashing, input validation, and structured logging with Pino.",
      "Implemented PWA best practices: offline-first caching strategies, background sync for form submissions, and native install prompts across devices."
    ],
    results: [
      { label: "Community impact", value: "Growing" },
      { label: "Initiatives", value: "Active" },
      { label: "Engagement", value: "Community" },
      { label: "PWA score", value: "95+/100" },
    ],
    liveUrl: "https://openyourhearts.sas3d.in/",
    tags: ["Community", "Social Impact", "PWA", "Full-Stack", "Offline-First", "Real-time", "Socket.IO"],
    featured: true,
  },
  {
    slug: "customer-management-platform",
    title: "One connected system for the full client lifecycle, from first lead to final payment",
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
      "An internal CRM and business management platform that brings leads, sales, proposals, projects, invoices, and payments into one system, with role-based access for every team.",
    problem:
      "Running a client lifecycle touches sales, delivery, and finance, and each stage depends on the one before it. When that work is spread across separate tools, a client's history is hard to follow, follow-ups can slip, and it takes real effort to answer simple questions about what has been sold, delivered, and paid.",
    solution:
      "We built a single platform that follows each client from first contact to final payment. Leads move through a drag-and-drop pipeline and convert into clients and projects, proposals and invoices generate branded PDFs, and project progress is calculated from completed work. Reports, global search, notifications, and an audit log tie the whole system together.",
    approach: [
    "Mapped the full client lifecycle, from lead capture through pipeline, proposal, project delivery, invoicing, and payment, so each stage carries its records into the next.",
    "Designed focused modules for each team, with six roles and record-level access control, so sales, project managers, developers, and finance each work with the information they need.",
    "Built for real financial workflows, including partial payments, payment voiding, automatic overdue detection, and separate totals for each currency, backed by database transactions and automated tests."
  ],
    results: [
    { label: "User roles with record-level access", value: "6" },
    { label: "Currencies, never mixed in totals", value: "7" },
    { label: "Report areas with CSV export", value: "4" },
  ],
    liveUrl: "https://customer-management-portal-gray.vercel.app//",
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
    liveUrl: "https://celebcart.sas3d.in",
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
    liveUrl: "https://stremify.sas3d.in/",
    tags: ["Social Learning", "MERN Stack", "Video Calls"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
