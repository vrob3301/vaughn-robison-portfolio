import StructuredData from '@/components/StructuredData'
import { pageMetadata, personId, siteUrl } from '@/lib/seo'

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
      sameAs: ['https://www.linkedin.com/in/vaughn-robison-783ab61b0', 'https://www.instagram.com/vaughn.robison', 'https://x.com/vrob330', 'https://www.youtube.com/@V_ROB'],
    },
    isPartOf: { '@id': `${siteUrl}/#website` },
  }} />
}
