import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { portraitPath, projectImagePaths, siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/about`, images: [`${siteUrl}${portraitPath}`], lastModified: '2026-10-17' },
    { url: `${siteUrl}/publications` },
    ...projects.map(project => ({
      url: `${siteUrl}/work/${project.id}`,
      ...(['in-whose-name', 'bearing-witness-cincinnati'].includes(project.id) ? { lastModified: '2026-10-17' } : {}),
      images: projectImagePaths(project).map(image => `${siteUrl}${image}`),
    })),
  ]
}
