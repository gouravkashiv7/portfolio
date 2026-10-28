# Gourav Kashiv — Portfolio

Source for [gouravkashiv.com](https://www.gouravkashiv.com): the personal site of Gourav Kashiv, a full-stack engineer who builds and ships products from application architecture to production.

## Stack

- **Framework:** Next.js 16 (App Router, React 19), TypeScript
- **Styling:** Tailwind CSS 4 with design tokens in `src/app/globals.css`
- **Type:** Geist and Geist Mono via `next/font`
- **Motion:** framer-motion (`LazyMotion`), respecting `prefers-reduced-motion`
- **Tooling:** Biome for lint and format, Husky + lint-staged, pnpm

## Structure

```text
src/app/
├── _data/site.ts        # All content: links, case studies, roles, skills
├── _components/         # Hero, Projects, Gallery, Experience, Skills, About, Contact…
├── contact/             # Standalone /contact page
├── globals.css          # Colour tokens, buttons, focus styles
├── layout.tsx           # Fonts, metadata, JSON-LD
└── page.tsx             # Home page sections
resume-source/           # Editable HTML source for public/resume.pdf
docs/redesign/           # Redesign audit, report and before/after screenshots
```

Content lives in `src/app/_data/site.ts`. Edit it there rather than in components.

## Updating the resume

Edit `resume-source/resume.html`, then print it to `public/resume.pdf` (A4, one page) with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --print-to-pdf=public/resume.pdf "file://$PWD/resume-source/resume.html"
```

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).
