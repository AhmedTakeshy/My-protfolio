import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/sonner";
import Cookies from "@/components/cookies";
import { cookies } from 'next/headers';
import { getCookie } from "cookies-next/server";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-plex-sans" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "Ahmed Abdelsamie | Frontend Engineer",
  description: "Frontend Engineer specializing in micro-frontend architecture and design systems. 6+ years shipping production React/Next.js applications, including leading the migration of Elonky (a live global marketplace) to a micro-frontend architecture.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takeshy.vercel.app",
    title: "Ahmed Abdelsamie — Frontend Engineer",
    description: "Frontend Engineer specializing in micro-frontend architecture and design systems. 6+ years shipping production React/Next.js applications.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Abdelsamie",
      }
    ],

  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/icons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      type: "application/manifest+json",
      url: "/manifest.json",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/icons/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/icons/android-chrome-512x512.png",
    },
  ],
  applicationName: "Ahmed Abdelsamie",
  generator: "Next.js",
  referrer: 'origin-when-cross-origin',
  authors: { name: "Ahmed Abdelsamie", url: "https://takeshy.vercel.app" },
  creator: "Ahmed Abdelsamie",
  publisher: "Ahmed Abdelsamie",
  metadataBase: new URL('https://takeshy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Abdelsamie — Frontend Engineer",
    description: "Frontend Engineer specializing in micro-frontend architecture and design systems.",
    images: "/logo1.png",
  },
  robots: "index, follow",
  other: {
    "google-site-verification": "ZB0K9bkPQd5lC9UQMPuGeRTAt6Z1o8HEIkdRkoLAwn0",
  },
  appLinks: {
    web: { url: "https://takeshy.vercel.app" },
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookie = await getCookie('cookie-consent-state', { cookies })
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plexSans.variable} ${plexMono.variable} font-sans bg-bg text-ink`}>
        {children}
        <SpeedInsights />
        <Analytics />
        <Toaster richColors />
        <Cookies cookie={cookie as string} />
      </body>
    </html>
  )
}
