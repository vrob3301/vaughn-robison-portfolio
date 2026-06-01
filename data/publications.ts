export interface Publication {
  outlet: string       // Publication / outlet name
  title: string        // Article headline
  date: string         // Display date
  url: string          // External article link
  excerpt?: string     // Short description / why it matters
}

export const publications: Publication[] = [
  {
    outlet: 'REVOLT',
    title: 'Kanye West’s life and struggles shown in new doc teaser',
    date: 'August 2025',
    url: 'https://www.revolt.tv/article/kanye-west-life-and-struggles-shown-in-new-doc-teaser',
    excerpt:
      'Revolt covers the teaser for In Whose Name — the six-year documentary on Kanye West that Vaughn produced — ahead of its September 2025 theatrical debut.',
  },
]
