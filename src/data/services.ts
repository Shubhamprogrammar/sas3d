import type { Capability, ProcessStep, Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive, SEO-conscious websites and web applications designed around your business requirements.",
    deliverables: [
      "Business websites & landing pages",
      "E-commerce storefronts",
      "Web applications",
      "Website redesigns",
    ],
    icon: "code",
    seoTitle: "Website Development Services",
    seoDescription:
      "Website development services from SAS3D — responsive business websites, landing pages, e-commerce stores and web applications built with Next.js and React.",
    heroTitle: "Websites that explain your business and bring in enquiries",
    heroDescription:
      "We design and build fast, responsive websites and web applications — from a focused landing page to a full e-commerce store — structured around what your visitors need to find and do.",
    problems: [
      {
        title: "An outdated or slow website",
        description:
          "Pages that load slowly, break on mobile or look dated make visitors leave before they understand what you offer.",
      },
      {
        title: "Visitors don't turn into enquiries",
        description:
          "Unclear messaging, buried contact options and confusing navigation mean people browse and leave without getting in touch.",
      },
      {
        title: "Hard to update or grow",
        description:
          "Template sites and page builders become difficult to extend once you need custom features, integrations or a store.",
      },
      {
        title: "Weak search visibility",
        description:
          "Missing metadata, poor page structure and slow performance make it harder for customers to find you through search.",
      },
    ],
    solutions: [
      {
        title: "Clear structure and messaging",
        description:
          "We plan the pages, content hierarchy and calls to action around your services and your visitors' questions before any design work starts.",
      },
      {
        title: "Responsive, accessible build",
        description:
          "Layouts tested on mobile, tablet and desktop, with readable typography, accessible contrast and keyboard-friendly navigation.",
      },
      {
        title: "SEO-conscious foundations",
        description:
          "Page-specific titles and descriptions, semantic HTML, sitemaps, structured data and image optimisation built in from the start.",
      },
      {
        title: "Room to grow",
        description:
          "A modern codebase that can take on e-commerce, dashboards, integrations or a CMS later without a rebuild.",
      },
    ],
    features: [
      "Information architecture and page planning",
      "Responsive UI design and development",
      "Contact and inquiry forms with email notifications",
      "On-page SEO setup: metadata, sitemap, robots.txt, structured data",
      "Performance optimisation: image handling, font loading, code splitting",
      "Payment gateway integration for stores",
      "Deployment to your hosting with domain and SSL setup",
      "Handover documentation for your team",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Stripe",
      "Vercel",
    ],
    useCases: [
      {
        title: "Business websites",
        description: "A professional site that explains your services and makes it easy to contact you.",
      },
      {
        title: "Landing pages",
        description: "Focused pages for a product launch, campaign or single service.",
      },
      {
        title: "E-commerce websites",
        description: "Product catalogues, carts, checkout and order management.",
      },
      {
        title: "Portfolio websites",
        description: "Showcase work, case studies and team profiles in a clean layout.",
      },
      {
        title: "Web applications",
        description: "Logged-in experiences such as booking, ordering or customer portals.",
      },
      {
        title: "Website redesign",
        description: "Rebuild an existing site with better structure, speed and mobile usability.",
      },
    ],
    relatedProjects: ["tomato-food-delivery", "celebcart-grocery-platform", "open-your-hearts"],
    faqs: [
      {
        question: "Can you redesign our existing website instead of starting over?",
        answer:
          "Yes. We first review your current site, content and analytics (if available), then decide together whether to improve it in place or rebuild it on a new codebase.",
      },
      {
        question: "Will the website work well on mobile?",
        answer:
          "Every page is designed and tested for mobile, tablet and desktop screen sizes before launch.",
      },
      {
        question: "Can we update the content ourselves?",
        answer:
          "If you need to edit content regularly, we can include a CMS or an admin panel. We will discuss which option suits how often your content changes.",
      },
      {
        question: "How is pricing decided?",
        answer:
          "Pricing depends on the number of pages, features and integrations. We share a quote after understanding your requirements in a free consultation.",
      },
    ],
    inquiryService: "Website Development",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Custom web applications, dashboards, SaaS platforms, APIs and business-specific software built around how you work.",
    deliverables: [
      "SaaS platforms",
      "Admin dashboards & CRMs",
      "Management systems",
      "Custom APIs",
    ],
    icon: "layout-dashboard",
    seoTitle: "Custom Software Development",
    seoDescription:
      "Custom software development from SAS3D — SaaS applications, admin dashboards, CRM and management systems, and APIs designed around your business processes.",
    heroTitle: "Software built around the way your business actually works",
    heroDescription:
      "When spreadsheets and off-the-shelf tools stop fitting, we build web-based software — dashboards, CRMs, management systems and SaaS products — shaped around your roles, data and workflows.",
    problems: [
      {
        title: "Work lives in spreadsheets and chat threads",
        description:
          "Information is scattered, duplicated and hard to trust, so teams spend time searching instead of working.",
      },
      {
        title: "Off-the-shelf tools don't fit",
        description:
          "Generic software forces you to change your process, charges for features you don't use and lacks the ones you need.",
      },
      {
        title: "No clear view of the business",
        description:
          "Without a central system it is hard to see status, ownership, payments or performance at a glance.",
      },
      {
        title: "Access and permissions are hard to control",
        description:
          "Everyone sees everything, or sharing data with the right people becomes a manual task.",
      },
    ],
    solutions: [
      {
        title: "Requirements-first planning",
        description:
          "We map your users, roles, data and workflows, then agree on scope and milestones before development begins.",
      },
      {
        title: "Role-based applications",
        description:
          "Each team gets the screens and permissions it needs, with access control enforced on the server.",
      },
      {
        title: "Reliable data handling",
        description:
          "Structured databases, validation and transactions for workflows where accuracy matters, such as payments and records.",
      },
      {
        title: "APIs and integrations",
        description:
          "Well-defined APIs so your software can connect to payment providers, email services and the tools you already use.",
      },
    ],
    features: [
      "Requirements analysis and scope definition",
      "Database design and data modelling",
      "Role-based access control and authentication",
      "Admin dashboards with search, filters and reports",
      "CSV export and reporting views",
      "REST APIs and third-party integrations",
      "Automated tests for critical workflows",
      "Deployment, documentation and handover",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "REST APIs",
      "Docker",
    ],
    useCases: [
      {
        title: "SaaS applications",
        description: "Multi-user products where companies sign up and manage their own workspace.",
      },
      {
        title: "Admin dashboards",
        description: "One place to manage records, orders, users and content.",
      },
      {
        title: "CRM systems",
        description: "Track leads, clients, projects and payments through the full lifecycle.",
      },
      {
        title: "Management systems",
        description: "Inventory, bookings, staff, appointments or operations management.",
      },
      {
        title: "Custom APIs",
        description: "Back-end services that power your apps or connect existing systems.",
      },
      {
        title: "Business-specific platforms",
        description: "Software for a process unique to your industry or company.",
      },
    ],
    relatedProjects: ["customer-management-platform", "launchflow-internal-ops", "streamify-social-learning"],
    faqs: [
      {
        question: "Should we build custom software or use an existing tool?",
        answer:
          "If an existing tool covers your process well, we will tell you. Custom software makes sense when your workflow, permissions or integrations don't fit what is available.",
      },
      {
        question: "Can you build on top of our existing system?",
        answer:
          "Often, yes. We review the existing codebase or data first and recommend whether to extend it, integrate with it or migrate away from it.",
      },
      {
        question: "Can the software be delivered in phases?",
        answer:
          "Yes. We usually define a first release covering the most important workflows, then plan further milestones based on your priorities.",
      },
      {
        question: "Who owns the code and data?",
        answer:
          "Ownership, hosting accounts and handover terms are agreed in writing in the proposal before any work starts.",
      },
    ],
    inquiryService: "Custom Software",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Workflow automation, system integrations and automated processes that cut repetitive manual work.",
    deliverables: [
      "Workflow automation",
      "API & system integrations",
      "Automated notifications",
      "Data synchronisation",
    ],
    icon: "workflow",
    seoTitle: "Business Automation Services",
    seoDescription:
      "Business automation services from SAS3D — workflow automation, API integrations, automated notifications, data sync and lead management automation.",
    heroTitle: "Automate the repetitive work that slows your team down",
    heroDescription:
      "We connect your tools and automate routine steps — data entry, follow-ups, notifications and reporting — so your team spends less time on manual work and fewer things fall through the cracks.",
    problems: [
      {
        title: "Copying data between tools",
        description:
          "The same information is typed into forms, spreadsheets and systems by hand, which takes time and introduces errors.",
      },
      {
        title: "Missed follow-ups",
        description:
          "Leads, invoices and approvals depend on someone remembering to act, so some are delayed or forgotten.",
      },
      {
        title: "Tools that don't talk to each other",
        description:
          "Your CRM, forms, sheets and email each hold part of the picture with no connection between them.",
      },
      {
        title: "Manual reports",
        description:
          "Weekly or monthly reports are assembled by hand from several sources.",
      },
    ],
    solutions: [
      {
        title: "Process mapping",
        description:
          "We document the current workflow step by step and identify which steps are rule-based and safe to automate.",
      },
      {
        title: "Integrations between systems",
        description:
          "We connect your applications through their APIs and webhooks so data moves automatically.",
      },
      {
        title: "Triggered notifications",
        description:
          "Email or messaging alerts when something needs attention — a new lead, an overdue payment or a pending approval.",
      },
      {
        title: "Monitoring and fallbacks",
        description:
          "Automations log what they do and report failures so a person can step in when something unexpected happens.",
      },
    ],
    features: [
      "Workflow analysis and automation plan",
      "API and webhook integrations",
      "Automated email and messaging notifications",
      "Scheduled jobs and data synchronisation",
      "Lead capture and routing",
      "Automated reports and exports",
      "Error logging and failure alerts",
      "Documentation of every automated workflow",
    ],
    technologies: [
      "Node.js",
      "Python",
      "REST APIs",
      "Webhooks",
      "Scheduled jobs",
      "PostgreSQL",
      "MongoDB",
      "Email APIs",
      "Docker",
    ],
    useCases: [
      {
        title: "Workflow automation",
        description: "Move tasks through approval and status steps without manual hand-offs.",
      },
      {
        title: "API integrations",
        description: "Connect your website, CRM, payment provider and internal tools.",
      },
      {
        title: "Automated notifications",
        description: "Alert the right person when an event happens or a deadline passes.",
      },
      {
        title: "Data synchronisation",
        description: "Keep records consistent across systems without re-entering them.",
      },
      {
        title: "Lead management automation",
        description: "Capture enquiries, assign owners and schedule follow-ups automatically.",
      },
      {
        title: "Repetitive task automation",
        description: "Generate documents, reports and exports on a schedule.",
      },
    ],
    relatedProjects: ["launchflow-internal-ops", "customer-management-platform"],
    faqs: [
      {
        question: "Which processes are good candidates for automation?",
        answer:
          "Tasks that follow clear rules and happen often — data entry, notifications, status updates and reports — are usually the best place to start.",
      },
      {
        question: "Do we need to replace our current tools?",
        answer:
          "Usually not. Where your tools provide APIs or webhooks, we connect them as they are.",
      },
      {
        question: "What happens if an automation fails?",
        answer:
          "We build in logging and failure alerts so problems are visible and can be handled by a person instead of failing silently.",
      },
      {
        question: "Can automation be added to software you build for us?",
        answer:
          "Yes. Automated notifications, scheduled jobs and integrations can be part of a custom software project from the start.",
      },
    ],
    inquiryService: "Business Automation",
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description:
      "AI integrations, intelligent assistants, document processing and AI-powered workflows for practical business use.",
    deliverables: [
      "AI chatbots & assistants",
      "RAG & document intelligence",
      "AI integrations",
      "AI workflow automation",
    ],
    icon: "brainCircuit",
    seoTitle: "AI Development Services",
    seoDescription:
      "AI development services from SAS3D — AI chatbots, RAG applications, document intelligence, AI integrations and AI-powered workflow automation for businesses.",
    heroTitle: "Practical AI that fits into your existing work",
    heroDescription:
      "We help you apply AI where it is genuinely useful — answering questions from your own documents, extracting data from files, assisting your team and automating steps that need language understanding.",
    problems: [
      {
        title: "Knowledge is hard to find",
        description:
          "Answers live in documents, policies and past conversations that take time to search through.",
      },
      {
        title: "Manual document handling",
        description:
          "Invoices, forms and reports are read and re-typed by hand to get the data into your systems.",
      },
      {
        title: "Repeated customer questions",
        description:
          "Your team answers the same questions again and again across email, chat and phone.",
      },
      {
        title: "Unclear where AI helps",
        description:
          "It is difficult to tell which AI ideas are practical, affordable and safe for your business data.",
      },
    ],
    solutions: [
      {
        title: "Use-case assessment",
        description:
          "We start by identifying where AI is useful for you, what data it needs and how its output will be checked.",
      },
      {
        title: "Grounded answers with RAG",
        description:
          "Assistants that answer from your own approved documents and can show where an answer came from.",
      },
      {
        title: "Document intelligence",
        description:
          "Extract structured fields from documents and send them into your systems, with review steps where accuracy matters.",
      },
      {
        title: "Integration into existing tools",
        description:
          "AI features added to your website, dashboard or workflow rather than as a separate tool your team has to adopt.",
      },
    ],
    features: [
      "AI use-case discovery and feasibility review",
      "Chatbots and assistants for websites or internal teams",
      "Retrieval-augmented generation (RAG) over your documents",
      "Document classification and data extraction",
      "LLM API integration into existing applications",
      "Human review steps for sensitive outputs",
      "Usage, cost and quality monitoring",
      "Data handling aligned with your privacy requirements",
    ],
    technologies: [
      "Python",
      "Node.js",
      "LLM APIs",
      "Embeddings",
      "Vector search",
      "PostgreSQL",
      "REST APIs",
      "Next.js",
    ],
    useCases: [
      {
        title: "AI-powered chatbots",
        description: "Answer common customer questions on your website or messaging channels.",
      },
      {
        title: "RAG applications",
        description: "Search and question-answering over manuals, policies and knowledge bases.",
      },
      {
        title: "Document intelligence",
        description: "Read invoices, forms or resumes and extract the fields you need.",
      },
      {
        title: "AI integrations",
        description: "Add summarisation, classification or drafting to your existing software.",
      },
      {
        title: "AI workflow automation",
        description: "Automations that sort, route or draft responses to incoming requests.",
      },
      {
        title: "Intelligent business assistants",
        description: "Internal assistants that help staff find information and complete routine tasks.",
      },
    ],
    relatedProjects: [],
    faqs: [
      {
        question: "Is our data used to train AI models?",
        answer:
          "We choose providers and settings based on your data requirements and explain how data is processed and stored before anything is built.",
      },
      {
        question: "How accurate are AI answers?",
        answer:
          "AI output can be wrong, so we ground answers in your documents where possible, test against real examples and add human review for important decisions.",
      },
      {
        question: "Can AI be added to software we already use?",
        answer:
          "If your software can be extended or exposes an API, AI features can often be integrated into it directly.",
      },
      {
        question: "What does it cost to run?",
        answer:
          "Running costs depend on the provider and usage volume. We estimate them during planning so you can decide with clear numbers.",
      },
    ],
    inquiryService: "AI Solutions",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

/** Team skills that support the four services above. */
export const capabilities: Capability[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces users understand at a glance, balancing brand, usability and business goals.",
    deliverables: [
      "Product & website design",
      "Design systems & component libraries",
      "Interactive prototypes",
    ],
    icon: "pen-tool",
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, cloud deployments and monitoring so your software ships and runs reliably.",
    deliverables: [
      "CI/CD pipeline setup",
      "Cloud infrastructure (AWS, Docker)",
      "Monitoring & alerting",
    ],
    icon: "file-text",
  },
  {
    id: "product-management",
    title: "Product Management",
    description:
      "Turning goals into a clear scope, roadmap and requirements the whole team can work from.",
    deliverables: [
      "Roadmap & scope planning",
      "Requirement documents & user stories",
      "Cross-team coordination",
    ],
    icon: "package",
  },
  {
    id: "quality-assurance",
    title: "QA & Testing",
    description:
      "Structured manual and automated testing across the development lifecycle.",
    deliverables: [
      "Manual & automated testing (UI, API)",
      "Test case design & execution",
      "Regression testing",
    ],
    icon: "bug",
  },
];

export const processSteps: readonly ProcessStep[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    description:
      "We understand your business, the problem you want to solve, your users and your constraints.",
  },
  {
    id: "planning",
    step: "02",
    title: "Planning",
    description:
      "We define the scope, technical architecture and milestones, and agree on them with you before work starts.",
  },
  {
    id: "design",
    step: "03",
    title: "Design",
    description:
      "We plan the user experience and interface, and review it with you before development.",
  },
  {
    id: "development",
    step: "04",
    title: "Development",
    description:
      "We build the solution in milestones and share progress so you can give feedback along the way.",
  },
  {
    id: "testing",
    step: "05",
    title: "Testing",
    description:
      "We validate functionality, performance and security across devices before release.",
  },
  {
    id: "deployment",
    step: "06",
    title: "Deployment",
    description:
      "We deploy to production and provide the agreed handover, documentation and support.",
  },
];
