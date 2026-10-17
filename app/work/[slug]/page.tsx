import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import StructuredData from '@/components/StructuredData'
import { pageMetadata, personId, profileUrls, projectDescription, projectName, siteUrl } from '@/lib/seo'
import { projectImageSchema } from '@/lib/project-image-schema'

export const dynamicParams = false
export function generateStaticParams() { return projects.map(project => ({ slug: project.id })) }

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find(item => item.id === slug)
  if (!project) notFound()
  return pageMetadata(`${projectName(project)} | Vaughn Robison`, projectDescription(project), `/work/${project.id}`)
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(item => item.id === slug)
  if (!project) notFound()
  const url = `${siteUrl}/work/${project.id}`
  const images = projectImageSchema(project)
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: projectName(project),
    description: projectDescription(project),
    primaryImageOfPage: images[0],
    author: { '@id': personId, '@type': 'Person', name: 'Vaughn Robison', url: siteUrl, sameAs: profileUrls },
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'CreativeWork',
      '@id': `${url}#work`,
      name: projectName(project),
      description: project.body.join('\n\n'),
      url,
      image: images,
      contributor: { '@id': personId, '@type': 'Person', name: 'Vaughn Robison', url: siteUrl },
      ...(project.linkLabel && project.link ? { subjectOf: {
        '@type': 'SocialMediaPosting', url: project.link,
        headline: project.linkLabel,
        author: { '@id': personId, '@type': 'Person', name: 'Vaughn Robison' },
        about: { '@id': `${url}#work` },
      } } : {}),
    },
  }} />
}
