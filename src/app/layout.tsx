import "./globals.css";
import type { Metadata } from "next";
import { Orbitron, Rajdhani, Aldrich } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/sonner";
import Cookies from "@/components/cookies";
import { GoogleAnalytics } from "@next/third-parties/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"], display: "swap", variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", variable: "--font-rajdhani" });
const aldrich = Aldrich({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-aldrich" });


export const metadata: Metadata = {
  title: "Ahmed Takeshy | Frontend Developer",
  description: "Frontend developer based in Turkey. I create responsive websites that are displayed on all devices desktops and smartphones. I am familiar with HTML5, CSS3, JavaScript, React, NextJS, and more.",
  keywords: "Web Developer, Frontend Developer, React Developer, NextJS Developer, JavaScript Developer, HTML Developer, CSS Developer, Ahmed Takeshy, Ahmed, Takeshy, Ahmed Takeshy Portfolio, Ahmed Takeshy Website, Ahmed Takeshy Frontend Developer, Ahmed Takeshy Web Developer, Ahmed Takeshy Frontend, Ahmed Takeshy Web, Ahmed Takeshy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takeshy.vercel.app",
    title: "Takeshy",
    description: "Frontend developer based in Turkey. I create responsive websites that are displayed on all devices desktops and smartphones. I am familiar with HTML5, CSS3, JavaScript, React, NextJS, and more.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Takeshy",
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
  applicationName: "Ahmed Takeshy",
  generator: "Ahmed Takeshy",
  referrer: 'origin-when-cross-origin',
  authors: { name: "Ahmed Takeshy", url: "https://takeshy.vercel.app" },
  creator: "Ahmed Takeshy",
  publisher: "Ahmed Takeshy",
  metadataBase: new URL('https://takeshy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  twitter: {
    site: "https://takeshy.vercel.app",
    card: "summary_large_image",
    siteId: "https://takeshy.vercel.app",
    creatorId: "Ahmed Takeshy",
    creator: "https://takeshy.vercel.app",
    title: "Takeshy",
    description: "Frontend developer based in Turkey. I create responsive websites that are displayed on all devices desktops and smartphones. I am familiar with HTML5, CSS3, JavaScript, React, NextJS, and more.",
    images: "/images/naviro.png",
  },
  robots: "index, follow",
  classification: `
    web development and design, web development, web design, web developer, web designer, web development company, web design company, web development agency, web design agency, web development services, web design services, web development firm, web design firm, web development studio, web design studio, web development company near me, web design company near me, web development agency near me, web design agency near me, web development services near me, web design services near me, web development firm near me, web design firm near me, web development studio near me, web design studio near me, web development company in turkey, web design company in turkey, web development agency in turkey, web design agency in turkey, web development services in turkey, web design services in turkey, web development firm in turkey, web design firm in turkey, web development studio in turkey, web design studio in turkey
` ,
  category: "web development and design, web development, web design, web developer, web designer, web development company, web design company, web development agency, web design agency, web development services, web design services, web development firm, web design firm, web development studio, web design studio, web development company near me, web design company near me, web development agency near me, web design agency near me, web development services near me, web design services near me, web development firm near me, web design firm near me, web development studio near me, web design studio near me, web development company in turkey, web design company in turkey, web development agency in turkey, web design agency in turkey, web development services in turkey, web design services in turkey, web development firm in turkey, web design firm in turkey, web development studio in turkey, web design studio in turkey",
  other: {
    copyRight: "© 2023 Ahmed Takeshy. All rights reserved.",
    "google-site-verification": "ZB0K9bkPQd5lC9UQMPuGeRTAt6Z1o8HEIkdRkoLAwn0",
    rating: "general",
    Distribution: "global",
    Revisit: "1 day",
    language: "English",
    resourceType: "document",
    referrer: "origin",
    abstract: "Frontend developer based in Turkey. I create responsive websites that are displayed on all devices desktops and smartphones. I am familiar with HTML5, CSS3, JavaScript, React, NextJS, and more.",
    ogType: "website",
    ogLocale: "en_US",
    ogUrl: "https://takeshy.vercel.app",
    ogTitle: "Takeshy",
    ogDescription: "Frontend developer based in Turkey. I create responsive websites that are displayed on all devices desktops and smartphones. I am familiar with HTML5, CSS3, JavaScript, React, NextJS, and more.",
  },
  appLinks: {
    web: { url: "https://takeshy.vercel.app" },
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <GoogleAnalytics gaId={`${process.env.GA_ID}`} />
      <body className={`${orbitron.variable} ${rajdhani.variable} ${aldrich.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
        <Toaster richColors />
        <Cookies />
      </body>
    </html>
  )
}
