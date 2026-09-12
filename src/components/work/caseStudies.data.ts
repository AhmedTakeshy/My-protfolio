import { StaticImageData } from "next/image";
import elonkyHome from "@/../public/img/case-studies/elonky-home.png";
import elonkyCategory from "@/../public/img/case-studies/elonky-category.png";
import shifarefImg from "@/../public/img/shifaref.webp";
import doreyazilim from "@/../public/img/doreyazilim.webp";

export type CaseStudy = {
  slug: string;
  name: string;
  role: string;
  liveUrl?: string;
  images: { src: StaticImageData; alt: string }[];
  problem: string;
  architecture: string;
  impact: string[];
  tech: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "elonky",
    name: "Elonky",
    role: "Frontend Engineer — architected and led the migration, within a team",
    liveUrl: "https://elonky.com",
    images: [
      { src: elonkyHome, alt: "Elonky homepage — global handmade goods and home decor marketplace" },
      { src: elonkyCategory, alt: "Elonky category page with faceted browsing across 10,000+ listings" },
    ],
    problem:
      "Elonky is a live global marketplace (10,000+ listings in a single category alone). The frontend was a single monolithic application — every team's changes shipped through the same pipeline, so unrelated feature work blocked each other and a single build regression could stall the whole site.",
    architecture:
      "Architected and led the decomposition into 6 autonomous micro-frontend modules using Webpack Module Federation, so each team could build, test, and deploy independently. Backed it with a shared component library (50+ components on shadcn/ui and Tailwind) so the 4 consuming micro-frontends stayed visually consistent, and a Playwright E2E suite as the shared quality gate across the whole system.",
    impact: [
      "CI/CD pipeline time cut 90% (16 min → 1.5 min)",
      "Code duplication cut 40% across 4 micro-frontends",
      "Playwright E2E coverage: 85%",
      "Production bugs cut 60%",
    ],
    tech: ["React", "Next.js", "TypeScript", "Module Federation", "Tailwind CSS", "shadcn/ui", "Playwright"],
  },
  {
    slug: "shifaref",
    name: "Shifaref",
    role: "Sole builder — independent project",
    liveUrl: "https://shifaref.com",
    images: [
      { src: shifarefImg, alt: "Shifaref wellness and health e-commerce platform" },
    ],
    problem:
      "Wellness professionals needed a platform to sell natural supplements and run a small medical blog to share expert guidance — with real content management and secure admin access, not just a storefront bolted onto a template.",
    architecture:
      "Built on Next.js for server-rendered pages, so product and blog content is actually reachable through organic search rather than locked behind client-side rendering. Prisma and Supabase (Postgres) back an admin dashboard where the admin uploads products and drafts blog posts directly — a tagged/categorized CMS with read-time estimation, role-based access for admins and content managers, and a customer messaging portal with read/unread tracking.",
    impact: [
      "Server-rendered storefront and blog on Next.js, built for organic search reach",
      "Admin dashboard (Prisma + Postgres) for product uploads and medical blog content",
      "Multi-level role-based authentication",
      "Customer messaging with search and status tracking",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Supabase", "NextAuth"],
  },
  {
    slug: "doreyazilim",
    name: "Doreyazilim",
    role: "Sole builder — independent project",
    liveUrl: "https://doreyazilim.com",
    images: [
      { src: doreyazilim, alt: "Doreyazilim multi-language e-commerce and web development agency site" },
    ],
    problem:
      "Doreyazilim is a digital solutions company — websites, web apps, mobile apps, and integrations for other businesses — that was still running its own site on WordPress. Its e-commerce clients (Urban Jungle, Organic Store, DNK Store among them) had the opposite problem: they were paying ongoing platform commission fees on storefronts they didn't fully own.",
    architecture:
      "Rebuilt Doreyazilim's own site on Next.js with next-intl for multi-language routing, replacing WordPress with something that actually reflected the caliber of work they sell. For clients, built custom WooCommerce-integrated storefronts with tailored themes per client and a client-facing analytics dashboard, so each business owned its store outright instead of paying per-sale platform fees.",
    impact: [
      "Doreyazilim's own site moved off WordPress onto a custom Next.js build",
      "Multiple client storefronts shipped, commission-fee-free",
      "Multi-language support across markets",
      "Client-facing analytics dashboard",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "React Hook Form", "WooCommerce"],
  },
];
