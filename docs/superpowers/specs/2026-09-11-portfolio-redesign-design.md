# Portfolio Redesign — Systems & Architecture Identity

**Date:** 2026-09-11
**Status:** Approved by Ahmed — proceeding to implementation

## Problem

The current portfolio (Next.js 15 / React 19 / Tailwind / Framer Motion) reads as a generic "Framer Motion tutorial" template: typing-effect hero, auto-playing skill-meter carousel, animated stat counters, magenta→cyan neon gradient, Orbitron display font, keyword-stuffed metadata, hardcoded "© 2021"/"© 2023" copyright strings. It undersells 6+ years of experience and doesn't reflect the candidate's actual professional identity: architecting micro-frontend systems and design systems (Kayra Export / Elonky migration — Monolith → 6 modules, 90% CI/CD time cut, 60% production-bug reduction).

Target audience: hiring managers at product/dev-tools/AI companies (Deepgram, ElevenLabs, Vercel-adjacent culture) who explicitly screen for "product and UX judgment" and value restraint/craft over decoration.

## Goals

- Replace the "tutorial portfolio" genre with a distinctive "systems & architecture" identity, specific to this candidate's real strength.
- Feature the Elonky (elonky.com, live marketplace, built at Kayra Export) migration as the flagship case study — real screenshots, live link, honest framing (led/architected within a team, not solo).
- Keep the same tech stack (no new frameworks) — Tailwind, Framer Motion (used far more sparingly), Next.js Image/font pipeline.
- Fix incidental staleness found during audit: hardcoded copyright years (done — see prior session), 4-years bio text (done), "two click to hide the links" copy (done).

## Non-goals

- No new backend/CMS — content stays hardcoded in component files, same as today.
- No multi-page site — stays a single scrolling page with anchor nav, same as today.
- No code/architecture diagrams that reveal Elonky's actual implementation — screenshots and prose only, per no-NDA-but-no-code-sharing constraint.

## Design tokens

**Color** (`globals.css` CSS variables):

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#0B0E13` | Base background |
| `--surface` | `#141922` | Panels, case-study cards |
| `--border` | `#232A36` | Hairline rules / blueprint-grid lines |
| `--text` | `#E7EAEE` | Primary text |
| `--text-muted` | `#7C8592` | Captions, dates, labels |
| `--accent` | `#FF7A45` | Schematic-redline orange — single accent, used sparingly |

**Type** (`next/font/google`, replacing Orbitron/Rajdhani/Aldrich):

- Display + body: **IBM Plex Sans** (different weights) — one coherent type family instead of a flashy display font + generic body face.
- Utility/mono: **IBM Plex Mono** — nav index numbers, tech-stack tags, dates, metric readouts.

**Layout:**

- **Nav** (`Nav.tsx`): fixed, numbered mono index — `00 Home / 01 Work / 02 Capabilities / 03 About / 04 Contact`.
- **Hero** (replaces `Banner.tsx`): name + role statement, no `TypeAnimation`. Signature element: a small SVG architecture diagram (`ArchitectureDiagram.tsx`, new) — labeled nodes (Monolith → 6 modules) connected by thin lines, one orchestrated assemble-in animation on load via Framer Motion, `prefers-reduced-motion` respected, then static.
- **Capabilities** (replaces `skills/Skills.tsx` + `Skill.tsx`, drops `react-multi-carousel`): static grid grouped by layer — Frontend / Architecture & Systems / Testing & Quality / Infra & Tooling.
- **Case studies** (replaces `work/Work.tsx` + `Project.tsx`): Elonky first — problem → architecture → impact structure, real screenshots (`public/img/case-studies/elonky-*.png`), live link (elonky.com), metrics as mono data readouts. Then Shifaref and Doreyazilim in the existing lighter tile format.
- **About** (`About.tsx`): shortened narrative; drop the three big `CountUp` counters, keep at most one understated inline stat.
- **Contact** (`Contact.tsx`): unchanged structurally, restyled to match new tokens.
- **Metadata** (`layout.tsx`): drop the keyword-stuffed `classification`/`category`/`keywords` fields, fix `other.copyRight`, rewrite description to match the systems-identity narrative.

## Content — Elonky case study (honest framing)

- Elonky (elonky.com) — a live global handmade-goods/home-decor marketplace, built at Kayra Export.
- Ahmed's role: architected and led the migration from a monolithic frontend to a micro-frontend architecture (Webpack Module Federation, 6 autonomous modules) **within a team** — not sole author of the whole platform.
- Metrics (from cv.md, already verified against reports): 90% CI/CD time reduction (16min → 1.5min), 50+ component shared design system, 85% E2E test coverage (Playwright), 60% production-bug reduction.
- No internal code, architecture diagrams of the real system, or proprietary detail — screenshots of the public site only, per the no-code-sharing constraint (no NDA, but code itself stays private).

## Testing / validation

- `npm run build` must pass with no new errors.
- Manual check: responsive at mobile/tablet/desktop widths.
- Manual check: keyboard focus visible on nav/links (accessibility floor from frontend-design skill).
- Manual check: `prefers-reduced-motion` respected on the hero diagram.
- Visual self-review via Playwright screenshots before pushing.

## Rollout

Build on a feature branch, verify locally (`npm run build` + visual screenshots), then push to `main` on the user's explicit request — this is a personal Vercel-deployed site, so a push to `main` goes live.
