# SAS3D Studio — Team Portfolio

A freelance team portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **shadcn/ui**. UI follows the editorial, metric-led layout of the [Jonny Czar Portfolio 2024](https://www.behance.net/gallery/159150041/Jonny-Czar-Portfolio-2024) reference.

## Stack

- Next.js 16 (Turbopack), React 19
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- shadcn/ui components (`radix-ui`, lucide-react)
- Zod validation for the contact form
- next/font (Geist + Instrument Serif for display accents)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
npm start        # serve the production build
```

## Project structure

```
src/
├── app/                 # routes: /, /about, /services, /portfolio, /portfolio/[slug],
│                        #   /team, /team/[slug], /pricing, /contact, /api/contact,
│                        #   sitemap.ts, robots.ts
├── components/
│   ├── ui/              # shadcn components
│   ├── layout/          # navbar, footer, theme-toggle, social icons
│   ├── sections/        # page sections (hero, highlights, case studies, pricing…)
│   └── forms/           # contact form
├── data/                # all site content lives here (edit this, not the components)
│   ├── projects.ts
│   ├── team.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── pricing.ts
├── lib/                 # constants (site config, nav, highlights, tech stack, values)
│   └── validations.ts   # zod schemas
├── types/               # shared TypeScript types
└── hooks/               # use-mobile
```

## Editing content

Everything content-driven is in `src/data/` and `src/lib/constants.ts`:

- **Projects / case studies** → `src/data/projects.ts` (slug, cover, problem, solution, approach, results/metrics)
- **Team members** → `src/data/team.ts`
- **Services & process steps** → `src/data/services.ts`
- **Testimonials** → `src/data/testimonials.ts`
- **Pricing & FAQ** → `src/data/pricing.ts`
- **Site name, nav, socials, awards, tech stack, core values** → `src/lib/constants.ts`

## Images

Placeholder SVGs are generated in `public/images/team/` and `public/images/projects/`. Replace them with real photos/screenshots — the same filenames are referenced from `src/data/`.

## Contact form

The form posts to `src/app/api/contact/route.ts`. It validates with Zod and currently logs submissions. Wire it to an email provider (Resend, SendGrid, etc.) — see the `TODO` in the route. `.env.local` holds keys (copy `.env.example`).

## Customization

- Colors / fonts: CSS variables in `src/app/globals.css` (Tailwind v4 `@theme`).
- Dark mode: toggled via `.dark` class on `<html>`, persisted to localStorage.
- Meta/SEO: `metadata` in `src/app/layout.tsx` + per-page; sitemap and robots generated in `src/app/`.
