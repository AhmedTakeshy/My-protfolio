import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://takeshy/works',
      lastModified: new Date().toISOString(),
    },
  ]
}