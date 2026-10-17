import Site from '@/components/Site'

const identity = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://vaughn-robison.com/#person',
      name: 'Vaughn Robison',
      url: 'https://vaughn-robison.com/',
      jobTitle: ['Producer', 'Director', 'Creative Strategist'],
      email: 'info@vaughn-robison.com',
      sameAs: [
        'https://www.linkedin.com/in/vaughn-robison-783ab61b0',
        'https://www.instagram.com/vaughn.robison',
        'https://x.com/vrob330',
        'https://www.youtube.com/@V_ROB',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vaughn-robison.com/#website',
      url: 'https://vaughn-robison.com/',
      name: 'Vaughn Robison',
      publisher: { '@id': 'https://vaughn-robison.com/#person' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://vaughn-robison.com/#webpage',
      url: 'https://vaughn-robison.com/',
      name: 'Vaughn Robison — Producer, Director, Creative Strategist',
      about: { '@id': 'https://vaughn-robison.com/#person' },
      isPartOf: { '@id': 'https://vaughn-robison.com/#website' },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identity).replace(/</g, '\\u003c') }} />
      <Site />
    </>
  )
}
