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
      "Wellness professionals needed a platform to sell natural supplements and share expert guidance, with proper content management and secure multi-role access — not just a storefront.",
    architecture:
      "Built end to end on Next.js and Prisma with Supabase auth: a tagged/categorized CMS for wellness content, role-based access control for admins and content managers, a customer messaging portal with read/unread tracking, and a responsive admin dashboard with light/dark mode.",
    impact: [
      "Full CMS with tagging, categorization, and read-time estimation",
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
      "Small e-commerce clients (Urban Jungle, Organic Store, DNK Store among them) needed custom storefronts without paying ongoing platform commission fees, plus multi-language support to reach more markets.",
    architecture:
      "Built custom WooCommerce-integrated storefronts with tailored themes per client, an analytics dashboard for site performance, and multi-language routing with next-intl for localization.",
    impact: [
      "Multiple client storefronts shipped, commission-fee-free",
      "Multi-language support across markets",
      "Client-facing analytics dashboard",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "React Hook Form"],
  },
];
