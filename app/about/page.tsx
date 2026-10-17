import StructuredData from '@/components/StructuredData'
import { pageMetadata, personId, portraitPath, profileUrls, siteUrl, soldierFieldPost } from '@/lib/seo'

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
    primaryImageOfPage: {
      '@type': 'ImageObject', '@id': `${siteUrl}${portraitPath}#image`,
      contentUrl: `${siteUrl}${portraitPath}`, url: `${siteUrl}${portraitPath}`,
      name: 'Vaughn Robison at Soldier Field, Chicago',
      caption: 'Vaughn Robison at Soldier Field in Chicago for Ye’s show.',
      width: 1800, height: 2400, encodingFormat: 'image/jpeg',
      about: { '@id': personId }, mainEntityOfPage: `${siteUrl}/about`,
      isBasedOn: soldierFieldPost,
    },
    mainEntity: { '@id': personId, '@type': 'Person', name: 'Vaughn Robison', url: siteUrl,
      jobTitle: ['Producer', 'Creative Strategist'],
      sameAs: profileUrls,
      image: `${siteUrl}${portraitPath}`,
    },
    isPartOf: { '@id': `${siteUrl}/#website` },
  }} />
}
