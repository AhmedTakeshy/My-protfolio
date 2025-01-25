import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

  return {
    sitemap: ['https://takeshy.vercel.app/sitemap.xml', 'https://www.takeshy.vercel.app/sitemap.xml'],
    host: 'https://takeshy.vercel.app',
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/nogooglebot/",
      },
    ],
  }
}