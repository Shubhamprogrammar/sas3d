# SAS3D Manual Setup Checklist

## A. Completed by code
- [x] Process section ("How We Work"), 6 steps
- [x] Final CTA with email, WhatsApp and contact link
- [x] Inquiry form: all fields, client and server validation, sanitisation, honeypot, fill-time check, rate limit, origin check, loading, success and error states
- [x] Team notification to `CONTACT_EMAIL` (default `sas3dev@gmail.com`); visitor confirmation that doesn't block the response
- [x] Four service pages under `/services/*`
- [x] CelebCart slug, title and year fixed, with a redirect from the old URL; Streamify spelling; LaunchFlow kept as a confidential project
- [x] Positioning, per-page metadata, sitemap and structured data
- [x] `.env.example` updated (real env files untouched)
- [x] Google Tag Manager (`GTM-T44V5578`) installed on every page (production only), with `virtual_pageview` and `generate_lead` events and `data-cta` link labels
- [x] Terms section 14 names Google Tag Manager and Google Analytics

## B. Requires business-owner input
- [ ] Testimonials: remove, or replace with real ones you have permission to publish
- [ ] Hero stats (4.9★, 8+ clients, 9+ projects, 1+ years): confirm with evidence, or remove
- [ ] Highlights and Core Values claims ("Repeat client work", "We absorb overruns"…): confirm or remove
- [ ] Pricing page: keep, remove, or change to "quote after discovery"
- [ ] Classify each project as Internal, Demonstration or Client, and confirm it is approved for public display: Tomato, Open Your Hearts, Customer Management (WEXA.AI), CelebCart, Streamify
- [ ] Confirm the LaunchFlow screenshots contain no confidential client details (the project is shown publicly with a Confidential badge)
- [ ] Decide whether to add a cookie-consent banner (currently analytics loads for everyone)
- [ ] AI project(s) for the AI Solutions page (Hospital Management, AI PR Reviewer, Resume Analyzer): description, screenshots, demo link and permission
- [ ] Correct Twitter and LinkedIn URLs, currently `https://sas3d.com`
- [ ] Confirm the response-time promise you want to make, if any. All "within one business day" text was removed from the CTA and contact page (it still appears in pricing FAQs)
- [ ] Review the service-page copy (problems, FAQs, technologies) for accuracy

## C. Requires external account configuration
- [ ] Email is sent over SMTP with Nodemailer (`src/lib/mailer.ts`). For Gmail, turn on 2-Step Verification for `sas3dev@gmail.com`, then create an App Password at https://myaccount.google.com/apppasswords. Gmail allows about 500 emails a day (each inquiry sends 2)
- [ ] Create a MongoDB Atlas cluster for storing inquiries, and allow Vercel under Network Access (`0.0.0.0/0`). If the database password contains `@`, `:`, `/`, `#` or `%`, URL-encode it in the connection string (for example `@` → `%40`)
- [ ] In the hosting provider's environment variables (not in git), set:
  - `SMTP_HOST=smtp.gmail.com`
  - `SMTP_PORT=465`
  - `SMTP_USER=sas3dev@gmail.com`
  - `SMTP_PASS=<16-character App Password, without spaces>`
  - `CONTACT_EMAIL=sas3dev@gmail.com`
  - Optional: `MAIL_FROM=SAS3D <sas3dev@gmail.com>` (Gmail only allows `SMTP_USER` or one of its verified "Send mail as" aliases)
  - `MONGODB_URI=<Atlas connection string>`
  - `ADMIN_PASSWORD=<long random value>` for the inquiries dashboard at `/admin-dashboard` (admin is disabled when unset)
- [ ] Optional: add a shared rate-limit store (Upstash Redis) if spam gets through
- [ ] Submit `https://sas3d.in/sitemap.xml` in Google Search Console

### Google Tag Manager setup (tagmanager.google.com → container GTM-T44V5578)
Do **not** also add Google Analytics code to the website, or visits will be counted twice.
1. **Connect Google Analytics.** Tags → New → Tag type **Google Tag** → Tag ID `G-KCLJR5CQ84` → Trigger **Initialization – All Pages** → Save. Skip this if a Google Tag with this ID already exists.
2. **Page changes: nothing to add in GTM.** GA4's Enhanced measurement ("Page changes based on browser history events", on by default) already records page changes on this site. Do **not** create a GA4 tag for `virtual_pageview`, or page views will be counted twice. The site still pushes `virtual_pageview` to the data layer; it only becomes useful if you ever turn that GA4 setting off.
3. **Create the inquiry event.**
   - Data Layer Variables: `service`, `budget` and `timeline`.
   - Trigger: Custom Event `generate_lead`.
   - Tag: GA4 Event named `generate_lead`, with parameters service, budget and timeline.
4. **Optional: track WhatsApp and email clicks.**
   - Variables → enable built-in **Click Element**.
   - Trigger: **Click – Just Links**, "Some link clicks", where Click URL contains `wa.me` (WhatsApp) or starts with `mailto:` (email).
   - Tag: GA4 Event named `contact_click`, parameter `method` = whatsapp or email.
5. **Test and publish.** Click **Preview** (opens Tag Assistant), browse the live site, change pages and send a test inquiry. Confirm the tags fire, then click **Submit → Publish**.
6. **Mark the lead as a conversion.** Google Analytics → Admin → Data display → **Key events** → New key event → `generate_lead`.
7. **Make the inquiry details visible in reports.** Google Analytics → Admin → Data display → **Custom definitions** → Create custom dimension (scope: Event) for `service`, `budget` and `timeline`.

## D. Requires real-world testing (after deployment)
- [ ] Submit a real inquiry and confirm it arrives at sas3dev@gmail.com (check spam), with Reply-To set to the visitor
- [ ] Confirm the visitor confirmation email arrives
- [ ] Submit an empty form and an invalid email, and check that errors appear and focus moves to the first invalid field
- [ ] Double-click "Send Inquiry" and confirm only one email arrives
- [ ] Open a service page's "Request a Quote" and check the service is pre-selected
- [ ] On a phone, tap the WhatsApp links and check they open WhatsApp with the prefilled message; tap the email links and check the mail app opens
- [ ] Check layouts at 360, 390, 768, 1024 and 1440 px: navigation, form, service pages, footer (now 4 columns) and no horizontal scrolling
- [ ] Open `/portfolio/atlas-content-platform` and check it redirects to `/portfolio/celebcart-grocery-platform`
- [ ] Validate a service page with Google's Rich Results Test
- [ ] Check link previews (WhatsApp, LinkedIn) show the new OG title and image
- [ ] Open the live site on your phone and check that Google Analytics → Reports → **Realtime** shows you within about a minute
- [ ] Send a test inquiry and check that `generate_lead` appears in GA4 Realtime → Events
