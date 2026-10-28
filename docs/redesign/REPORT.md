# Portfolio redesign — audit and report

Branch: `redesign/calm-engineering` · Date: 29 Oct 2026

Screenshots: `before/` is the live site (gouravkashiv.com) and `after/` is this branch on a local production build.

## 1. Audit of the original site

I inspected the live site at desktop (1440 and 1024 px), tablet (820 px) and mobile (375 px), and read every component in the repo.

**Strengths worth keeping**
- Real production work with real screenshots: St. Bede's ERP, both Retreat apps, Kasauli Coder.
- A navy and teal direction that was already close to the brief.
- Solid technical base: Next.js 16, Tailwind 4, `next/image`, JSON-LD, sitemap.
- Projects already tried to explain decisions, not just list tech.

**Weaknesses**
- **Identity was inconsistent.** The hero said "Full-Stack Engineer & Cloud Infrastructure Architect", the README said "DevOps Developer", and the manifest said "DevOps Developer". The site still showed Kasauli Coder as current. Availability conflicted: "Full-Time Roles" in the hero, "freelance only" in About.
- **Too many competing voices.** Neon `#64ffda` accent plus emerald badges, five switchable themes (rose, forest…), a noise overlay, a custom cursor, a deferred Spline 3D background, pulsing glows and a 3D tilt on screenshots.
- **The hero was buzzword-heavy.** "Distributed backend APIs", "applied AI systems", three metric cards and three CTAs, with the main CTA below the fold on mobile.
- **Repetition.** The 30 s → 5 s ERP figure appeared five times: hero, highlights strip, project card, experience and About.
- **Overclaims that the code does not support.** Kasauli Coder was described as deployed on AWS with Nginx (it is served by Vercel). Other unsupported claims: "99.9% uptime", "cryptographically signed PDFs", "secure payments" on Retreat Cottage (guests receive payment instructions by email), realtime subscriptions and optimistic UI in the Ops Manager (neither is in the code), and a "peer-reviewed" paper (the resume says "publication in progress").
- **Monospace everywhere.** Section intros, buttons, badges and metadata were all set in mono.
- **Cards inside cards, plus pills on pills.** Every project, role, skill group and education entry was a glass card full of chips.
- **Broken links.** The GoGlobe, StarFlicks, Travel List and Eat N Split demos return HTTP 402 (Vercel deployment disabled).
- **Heavy and noisy runtime.** Lenis smooth-scroll hijacking, a WebGL Spline scene and constant ambient animation. Speed Index was 8.4 s on mobile Lighthouse.
- **Metadata.** The OG image was 640×640 but declared as 1200×630, and the public `sitemap.xml` and `robots.txt` duplicated the app routes.

## 2. What changed

**Design system** (`globals.css`)
- One palette: background `#0B1220`, surface `#111B2C`, elevated `#172338`, text `#F3F6FC`, secondary text `#A7B4C8`, subtle text `#8A98AD`, single accent `#72C8F0`.
- Geist for all text. Geist Mono only for labels, dates and stacks.
- Consistent 72 rem container, 14 px radius, hairline borders, one `btn` component, visible focus rings, a skip link.
- Alternating `bg` and `surface/40` sections give rhythm without heavy separators.

**Hero**
- Name, a role line that includes Technoledge, and the headline "I build and ship full-stack products, from architecture to production."
- A two-sentence description, four strengths, one primary CTA (View projects) and one secondary (Download resume), plus GitHub, LinkedIn and email.
- A static "request path" diagram (Interface → API → Data → Deployment) listing tools actually used in the projects. It is hidden on phones.
- A "Shipped to production" row linking to the four case studies.

**Projects**
- Four case studies, each with Problem, My role, Outcome, Engineering decisions, The hard part, Stack, and Live site and Source links (labelled "Private client codebase" where there is no public repo).
- A real screenshot gallery in a quiet browser frame, with thumbnails and a native `<dialog>` lightbox that supports Esc and arrow keys.
- All copy rewritten against the repositories; see section 4.
- The secondary projects are a compact list of three: GoGlobe, StarFlicks and IDACPS. Source links only, because the demos are down. Travel List and Eat N Split were dropped as tutorial-level.

**Experience**
- Technoledge (Oct 2026 — Present) added. Kasauli Coder now ends Sep 2026.
- A single bordered list. The 30 s → 5 s figure appears here and in the ERP case study only.

**Skills**
- Six groups, as specified, in plain text. Each group has a "Used in" line pointing to real work. No percentages and no chip clouds.

**About**
- A first-person narrative about owning every layer, with portrait, education and research and recognition merged in. The separate Education section was removed.

**Contact and footer**
- One clear email CTA, copy-email, resume, then LinkedIn, GitHub and WhatsApp.
- A small footer.
- `/contact` reuses the same block.

**Removed**
- Theme switcher (5 themes), next-themes, Spline 3D, Lenis, custom cursor, noise overlay, magnetic buttons, fixed side rails, the EngineeringHighlights strip, Preloader stub.

**SEO**
- New title, description, OG and Twitter metadata, a real 1200×630 OG image, JSON-LD updated to Technoledge.
- Manifest colours and text fixed. Duplicate public sitemap and robots files removed.

**Motion**
- One short fade-up on scroll (`Reveal`), hover transitions, native smooth anchor scrolling.
- Everything respects `prefers-reduced-motion`: framer-motion `MotionConfig reducedMotion="user"` plus a CSS override.
- No constant motion.

## 3. Checks run

| Check | Result |
|---|---|
| `biome check` | clean |
| `next build` | passes, all routes static |
| Horizontal overflow | none at 375, 768, 1024 and 1440 px (`scrollWidth == innerWidth`) |
| Mobile menu | opens, closes on link click and Esc, `aria-expanded` set |
| Anchor offsets | sections land 80 px below the viewport top, clear of the 64 px header |
| Lightbox | opens, moves focus to Close, arrow keys and Esc work |
| Keyboard focus | 2 px accent outline on all interactive elements; skip link first |
| Console | no errors |
| Routes | `/`, `/contact`, `/resume.pdf`, `/og-image.png`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` return 200; unknown routes return 404 |
| Contrast (WCAG) | text 17.3:1, secondary text 8.9:1, subtle text 6.4:1 (5.4:1 on elevated), accent 10:1, button text 10.2:1. All pass AA. |

**Lighthouse (mobile, simulated throttling)**

| | Perf | A11y | Best practices | SEO | FCP | Speed Index | LCP | TBT | Weight |
|---|---|---|---|---|---|---|---|---|---|
| Before (live, Vercel CDN) | 85 | 100 | 96 | 100 | 1.0 s | 8.4 s | 3.0 s | 140 ms | 422 KiB (+ deferred 3D) |
| After (local `next start`) | 92 | 100 | 100 | 100 | 0.9 s | 0.9 s | 3.4 s | 0 ms | 360 KiB |

The after run is on a local server, not a CDN, so these numbers are not a like-for-like comparison. LCP is the hero heading: render delay while the web font swaps in. Re-measure after deploying.

## 4. Verified claims and links

**Verified against the repositories and live sites**
- **St. Bede's ERP** (`erp-system-technoledge`): React and Vite client with Redux and MUI; Express, Mongoose, `@aws-sdk/client-s3`, PDFKit and node-cron on the server. Google Maps via `@react-google-maps/api`. The Session → Institution → Department → Course → Branch hierarchy is documented in `WORK_DONE_REPORT.txt`. Served by Nginx on Ubuntu with Let's Encrypt (response headers and `server/app.js`). Multiple institutions are served (St. Bede's, SDGI and JEC references).
- **Retreat Operations Manager**: React 19, Vite, TanStack Query, Supabase, Styled Components and jsPDF. Edge Functions include `ical`, `fetch-calendar`, `sync-external-bookings` and `get-live-availability`. Goibibo appears in the code.
- **Retreat Cottage**: Next.js, Supabase, NextAuth, React Hook Form with Zod, Nodemailer, and guest receipts. Served by Vercel. The booking flow ends in a request, with payment instructions sent by email.
- **Kasauli Coder**: Next.js, React 19, Mongoose, jose and bcrypt auth, MDX blog, member and admin dashboards. Served by Vercel.
- **GoGlobe** (Leaflet, React Router, Context), **StarFlicks** (React, OMDb) and **IDACPS** (Python, OpenCV), all checked on GitHub.

**Links**
- These return 200: kasaulicoder.com, stbedes.campusevo.com, retreatcottage.in, the-retreat-operations-manager.vercel.app, every linked GitHub repo, your GitHub profile, x.com/KashivGourav.
- LinkedIn returns 999, which is its bot block; the URL is the one from your site and resume.

## 5. Needs your input

1. **The 30 s → 5 s ERP figure.** The ERP repo's history starts after the Vite migration, so git can't confirm it. The site now says "initial load dropped from roughly 30 s to 5 s after the Vite migration". Please confirm what was measured: dev-server start, or page load in production.
2. **Which email to show.** The site uses `gouravkashiv@zohomail.in`; the resume uses `gouravkashiv3@gmail.com`. Pick one and I'll make both match.
3. **ERP ownership and timeline.** The ERP appears under both Kasauli Coder (resume bullets) and Technoledge (current role, repo name). Confirm how to attribute it.
4. **"Deployed on AWS (EC2, Route 53)"** in the Kasauli Coder experience comes from your resume. The ERP server runs Nginx on Ubuntu, but I couldn't confirm EC2 from outside.
5. **Grades and degree names.** The old site said "M.Tech" and "B.E., CGPA 9.58"; the resume says "Master in CSE" and "Bachelor in CSE". I used the resume wording and left the CGPA out. Add it back if you want it shown.
6. **Availability.** I removed the "open to full-time / freelance only" badges because they contradicted each other. Tell me what you're open to and I'll add one honest line to Contact.
7. **Dead demos.** Re-enable the Vercel deployments for GoGlobe and StarFlicks if you want live links back.
8. **LinkedIn.** Its headline and current role should be updated to Technoledge so the profiles match. I can't edit LinkedIn.
