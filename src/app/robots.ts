import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'http://takeshy.works/sitemap.xml',
    host: 'http://takeshy.works',
  }
}