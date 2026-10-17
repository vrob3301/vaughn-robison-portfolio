import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/about` },
    { url: `${siteUrl}/publications` },
    ...projects.map(project => ({
      url: `${siteUrl}/work/${project.id}`,
      images: [...new Set([project.thumbnail, project.cardImage, ...(project.gallery || [])].filter((image): image is string => !!image))].map(image => `${siteUrl}${image}`),
    })),
  ]
}
