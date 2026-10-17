import type { Metadata } from 'next'
import type { Project } from '@/data/projects'

export const siteUrl = 'https://vaughn-robison.com'
export const personId = `${siteUrl}/#person`

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const image = { url: '/og-image-brown.png', width: 2400, height: 1260, alt: 'Vaughn Robison monogram' }
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website', siteName: 'Vaughn Robison', locale: 'en_US', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

export function projectName(project: Project) {
  return [project.title, project.titleLine2].filter(Boolean).join(' — ')
}

export function projectDescription(project: Project) {
  const sentence = project.body[0].match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() || project.body[0]
  return `${project.subtitle}. ${sentence}`
}

export function projectImageAlt(project: Project) {
  return `${projectName(project)} — ${project.subtitle}`
}

export function galleryImageAlt(project: Project, src: string, index: number) {
  const detail = src.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/^\d+-/, '').replace(/-/g, ' ')
  return `${project.title} — ${detail || `gallery image ${index + 1}`}`
}
