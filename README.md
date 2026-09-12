# Ahmed Abdelsamie — Portfolio

Live at **[takeshy.vercel.app](https://takeshy.vercel.app)**

A frontend engineer's portfolio built around one idea: prove claims instead of asserting them. Every number on the page is real and traceable to an actual project; the "Live" section doesn't tell you the site is fast, it measures your own browser's Core Web Vitals in front of you and shows the result.

## What's actually here

- **Live Core Web Vitals** — LCP, INP, CLS, and TTFB measured in the visitor's own browser via the official [`web-vitals`](https://github.com/GoogleChrome/web-vitals) library, updating live rather than only finalizing on tab-hide. If a metric hasn't fired yet (INP needs a real interaction), it says so instead of faking a number.
- **A scroll-driven CI/CD pipeline visualization** — five stages (`COMMIT → BUILD → TEST → DEPLOY → LIVE`) that light up as you scroll, built with Framer Motion's `useScroll`/`useTransform` against vector elements only (no canvas or video frame-scrubbing). The stage captions are the same real, verified numbers cited in the case study it sits next to — not invented copy.
- **Sitewide 3D depth on scroll** — a shared perspective context, a two-speed parallax blueprint grid, and settle-into-place reveals across every section, anchored by a hero diagram that tilts in real 3D as you scroll past it.
- **Honest case studies** — three real projects (a monolith → 6-module micro-frontend migration, a Next.js/Prisma/Supabase wellness platform, and a digital-solutions company's own site rebuild), each with a problem/architecture/impact breakdown instead of a feature list.

## Stack

Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · TypeScript · Tailwind CSS · Framer Motion · Radix UI · `web-vitals` · Vercel Analytics & Speed Insights

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

Requires Node 24.x (see `engines` in `package.json`).

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying from `master`.
