import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import StructuredData from '@/components/StructuredData'
import { pageMetadata, personId, projectDescription, projectName, siteUrl } from '@/lib/seo'

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
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: projectName(project),
    description: projectDescription(project),
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'CreativeWork',
      name: projectName(project),
      description: project.body.join('\n\n'),
      url,
      image: [project.thumbnail, ...(project.gallery || [])].map(image => `${siteUrl}${image}`),
      contributor: { '@id': personId, '@type': 'Person', name: 'Vaughn Robison', url: siteUrl },
    },
  }} />
}
