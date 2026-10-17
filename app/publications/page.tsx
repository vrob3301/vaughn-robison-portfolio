import StructuredData from '@/components/StructuredData'
import { publications } from '@/data/publications'
import { pageMetadata, siteUrl } from '@/lib/seo'

export const metadata = pageMetadata(
  'Publications & Press | Vaughn Robison',
  'Selected press coverage of projects in Vaughn Robison’s portfolio, including reporting from Rolling Stone, the Los Angeles Times, Variety, and Billboard.',
  '/publications',
)

export default function Publications() {
  return <StructuredData data={{
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    '@id': `${siteUrl}/publications#webpage`, url: `${siteUrl}/publications`,
    name: 'Publications & Press | Vaughn Robison',
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: { '@type': 'ItemList', itemListElement: publications.map((publication, index) => ({
      '@type': 'ListItem', position: index + 1, item: {
        '@type': 'Article', headline: publication.title, url: publication.url,
        publisher: { '@type': 'Organization', name: publication.outlet },
      },
    })) },
  }} />
}
