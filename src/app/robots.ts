import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://takeshy.vercel.app/sitemap.xml',
    host: 'https://takeshy.vercel.app',
  }
}