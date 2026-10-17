import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { projectImagePaths, siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/about` },
    { url: `${siteUrl}/publications` },
    ...projects.map(project => ({
      url: `${siteUrl}/work/${project.id}`,
      images: projectImagePaths(project).map(image => `${siteUrl}${image}`),
    })),
  ]
}
