import StructuredData from '@/components/StructuredData'
import { pageMetadata, personId, profileUrls, siteUrl } from '@/lib/seo'

export const metadata = pageMetadata(
  'About Vaughn Robison | Producer & Creative Strategist',
  'Vaughn Robison is a film producer and creative director whose work spans film, live events, and music. Read about his career, education, and personal foundation.',
  '/about',
)

export default function About() {
  return <StructuredData data={{
    '@context': 'https://schema.org', '@type': 'AboutPage',
    '@id': `${siteUrl}/about#webpage`, url: `${siteUrl}/about`,
    name: 'About Vaughn Robison',
    mainEntity: { '@id': personId, '@type': 'Person', name: 'Vaughn Robison', url: siteUrl,
      jobTitle: ['Producer', 'Creative Strategist'],
      sameAs: profileUrls,
    },
    isPartOf: { '@id': `${siteUrl}/#website` },
  }} />
}
