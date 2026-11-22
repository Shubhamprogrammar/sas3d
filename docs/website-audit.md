# SAS3D Website Audit

Audit date: 2026-11-22 · Branch audited: `dev-shubh` (commit `6152899`)

## Existing architecture

| Area | Implementation |
|---|---|
| Framework | Next.js 16.4.5, App Router, React 19.2, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui components on Radix UI, `tw-animate-css`, light/dark theme toggle |
| Fonts | `next/font/google`: Geist, Geist Mono, Instrument Serif |
| Validation | zod 4 |
| Email | Resend (`resend` SDK) in `src/app/api/contact/route.ts` |
| Database / auth | None |
| Content | TypeScript data files in `src/data/` (projects, services, team, pricing, testimonials, terms) |
| SEO | Per-page `metadata`, `sitemap.ts`, `robots.ts`, generated OG image, JSON-LD (`src/lib/structured-data.ts`) |
| Tests | None (no test script) |
| Deployment | No config in repo; the defaults suit Vercel |

## Existing pages

`/`, `/about`, `/services`, `/portfolio`, `/portfolio/[slug]` (6 projects), `/team`, `/team/[slug]` (3 members), `/pricing`, `/terms-conditions`, `/contact`, `/api/contact`.

## Current functionality (before changes)

- The homepage has 12 sections: Hero, Highlights, About, Services, Portfolio, Process, Tech stack, Testimonials, Team, Pricing, FAQ, CTA.
- The contact form had name, email and message, with client and server zod validation. It sent a Resend notification plus an auto-reply.
- Case-study pages show problem, solution, approach, "results", gallery and live link.

## Identified issues

### Content accuracy (conflicts with "no fabrication" rules)
1. `src/data/testimonials.ts`: the testimonials appear fabricated, with specific metrics ("conversions jumped 64%") and 5-star ratings.
2. Hero stats bar: "4.9★ Average rating", "8+ Happy clients", "9+ Projects delivered".
3. `HIGHLIGHTS` / `CORE_VALUES`: claims nobody has backed up ("Repeat client work", "We absorb overruns").
4. Fixed pricing on `/pricing` and the homepage, published as `Offer` structured data.
5. Projects have no Internal / Demonstration / Client classification, and several "results" are filler.
6. `SITE.socials`: the Twitter and LinkedIn links point to `https://sas3d.com`, which is the wrong domain.

### Structure
7. Services were job roles (DevOps Engineer, Product Manager, QA Tester…), not the four business services. IDs contained spaces.
8. There were no dedicated service pages.
9. Site name, tagline, description and keywords described "a freelance team of designers, developers and DevOps engineers".
10. Mismatched project data: slug `atlas-content-platform` was CelebCart, titled "Grocery is One Step a way…", category "Content Writing", year 2024. "Stremify" was a misspelling of Streamify. LaunchFlow was labelled "Confidential client".

### Inquiry system
11. The form only had 3 fields: no service, budget, timeline, company or phone.
12. There was no rate limiting or spam protection. The auto-reply went to any address typed in, so the endpoint could be abused to email strangers.
13. A failed auto-reply turned a successfully delivered inquiry into an error for the visitor.
14. There was no WhatsApp contact anywhere on the site.
15. `.env.example` had `CONTACT_EMAIL=hello@SAS3D.studio`.

### SEO
16. Every page shared the same OG and Twitter title and description.
17. The sitemap had no service pages and used `new Date()` for every `lastModified`.

### Code health
18. Lint: 8 unused-variable warnings. Type check: clean.

## Recommended improvements and plan

| # | Item | Status |
|---|---|---|
| 1 | Process section rewritten to the brief's 6 steps | Done |
| 2 | Final CTA rewritten, with email, WhatsApp and contact link | Done |
| 3 | Inquiry form and API rebuilt (fields, validation, spam protection, rate limit) | Done |
| 4 | Four dedicated service pages | Done |
| 5 | CelebCart and Streamify data fixes (LaunchFlow confirmed confidential and kept as is) | Done |
| 5b | Google Tag Manager installed; Google Analytics to be configured inside GTM | Done (GTM dashboard setup pending) |
| 6 | Positioning and SEO updated | Done |
| 7 | Remove fabricated testimonials, stats and highlights | **Not done (owner decision pending)** |
| 8 | Pricing page approach | **Not done (owner decision pending)** |
| 9 | Homepage reorder and trim to the brief's 6 sections | Not done (not in approved scope) |
| 10 | Classify the remaining 5 projects | Needs owner input |
| 11 | Hero copy and CTA labels per the brief | Not done (not in approved scope) |
