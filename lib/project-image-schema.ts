import type { Project } from '@/data/projects'
import dimensions from './image-dimensions.json'
import { galleryImageAlt, projectImageAlt, projectImagePaths, siteUrl } from './seo'

// Describes existing portfolio imagery without claiming photography or licensing credits.
export function projectImageSchema(project: Project) {
  const pageUrl = `${siteUrl}/work/${project.id}`
  return projectImagePaths(project).map((path, index) => {
    const caption = project.gallery?.includes(path)
      ? galleryImageAlt(project, path, project.gallery.indexOf(path))
      : projectImageAlt(project)
    const size = dimensions[path as keyof typeof dimensions]
    return {
      '@type': 'ImageObject',
      '@id': `${siteUrl}${path}#image`,
      contentUrl: `${siteUrl}${path}`,
      url: `${siteUrl}${path}`,
      name: caption,
      caption,
      description: `${caption}. Project imagery from Vaughn Robison’s portfolio.`,
      width: size.width,
      height: size.height,
      encodingFormat: size.encodingFormat,
      representativeOfPage: index === 0,
      mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      about: { '@id': `${pageUrl}#work` },
    }
  })
}
