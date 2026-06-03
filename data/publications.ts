export interface Publication {
  outlet: string       // Publication / outlet name
  title: string        // Article headline
  date: string         // Display date
  url: string          // External article link
  image?: string       // Left-side thumbnail (project artwork)
  excerpt?: string     // Short description / why it matters
}

export const publications: Publication[] = [
  {
    outlet: 'Rolling Stone',
    title: 'Kanye West Doc ‘In Whose Name?’ Pulls in Solid Box-Office Numbers on Opening Weekend',
    date: 'September 2025',
    url: 'https://www.rollingstone.com/music/music-features/kanye-west-documentary-box-office-numbers-opening-weekend-1235433638/',
    image: '/thumbnails/in-whose-name.png',
    excerpt:
      'Rolling Stone reports the six-year Kanye West documentary opened to a strong $776K across nearly 500 theaters, a standout result for a self-released film.',
  },
  {
    outlet: 'Los Angeles Times',
    title: 'The 10 Best Movies of 2025',
    date: 'December 2025',
    url: 'https://www.latimes.com/entertainment-arts/movies/story/2025-12-05/best-movies-2025-where-to-find-them-sinners-hedda-eddington-one-battle-naked-gun-sirat',
    image: '/thumbnails/in-whose-name-sun.jpg',
    excerpt:
      'Critic Amy Nicholson names In Whose Name? one of the ten best films of the year, ranking it among 2025’s most essential cinema.',
  },
  {
    outlet: 'Variety',
    title: '‘In Whose Name?’ Review: An Intimate Yet Frustrating Look Inside the Wild World of Kanye West',
    date: 'September 2025',
    url: 'https://variety.com/2025/film/reviews/in-whose-name-review-kanye-west-1236523453/',
    image: '/thumbnails/in-whose-name-night.jpg',
    excerpt:
      'Variety reviews the documentary cut from more than 3,000 hours of footage, calling it a rare unguarded portrait of one of music’s most scrutinized figures.',
  },
  {
    outlet: 'Deadline',
    title: 'Kanye West Doc ‘In Whose Name?’ To Make Streaming Debut',
    date: 'December 2025',
    url: 'https://deadline.com/2025/12/kanye-west-doc-in-whose-name-global-streaming-debut-1236647983/',
    image: '/thumbnails/in-whose-name-service.jpg',
    excerpt:
      'Deadline notes the film opened on roughly 1,000 screens and held the No. 1 documentary spot for two weeks before its global streaming release.',
  },
  {
    outlet: 'Billboard',
    title: 'Chance the Rapper and Vic Mensa’s Black Star Line Festival in Ghana Draws 52,000 Fans',
    date: 'January 2023',
    url: 'https://www.billboard.com/music/rb-hip-hop/chance-the-rapper-vic-mensas-black-star-line-festival-ghana-recap-1235195561/',
    image: '/thumbnails/black-star-line-fest-boat.jpg',
    excerpt:
      'Billboard recaps the inaugural Accra festival that drew 52,000 fans to Black Star Square, with a lineup spanning Erykah Badu, Dave Chappelle and T-Pain.',
  },
  {
    outlet: 'Rolling Stone',
    title: 'Chance the Rapper Pulls Off a Remarkable Return to Form on ‘Star Line’',
    date: 'August 2025',
    url: 'https://www.rollingstone.com/music/music-album-reviews/chance-the-rapper-star-line-review-1235411038/',
    image: '/thumbnails/grammys-fyc-card.jpg',
    excerpt:
      'Rolling Stone praises Star Line as a remarkable return to form, the album rooted in Chance the Rapper’s Ghana journey and the Black Star Line vision.',
  },
  {
    outlet: 'Rolling Stone',
    title: 'Chance the Rapper Brings Enthusiastic ‘Yah Know’ Performance to ‘Fallon’',
    date: 'March 2023',
    url: 'https://www.rollingstone.com/music/music-news/chance-the-rapper-performs-yah-know-the-tonight-show-1234691825/',
    image: '/thumbnails/yah-know.png',
    excerpt:
      'Rolling Stone covers the Tonight Show debut of “Yah Know,” tying the single to the Black Star Line Festival billed as the largest concert event ever held in Ghana.',
  },
  {
    outlet: 'Rolling Stone',
    title: 'Chance the Rapper Taps Joey Bada$$ for New Single ‘The Highs & The Lows’',
    date: 'June 2022',
    url: 'https://www.rollingstone.com/music/music-news/chance-the-rapper-the-highs-the-lows-1369989/',
    image: '/thumbnails/highs-and-lows-press.jpg',
    excerpt:
      'Rolling Stone premieres “The Highs & The Lows,” the Joey Bada$$ collaboration and visual that first debuted during Art Basel.',
  },
  {
    outlet: 'Uproxx',
    title: 'Vic Mensa Finally Finds Himself On The Autobiographical ‘Victor’',
    date: 'September 2023',
    url: 'https://uproxx.com/music/vic-mensa-victor-review/',
    image: '/thumbnails/victor.png',
    excerpt:
      'Uproxx awards its highest album honor to Victor, calling Vic Mensa’s sophomore record his most cohesive and revealing work to date.',
  },
  {
    outlet: 'Hypebeast',
    title: 'Chance the Rapper x Joey Purp Reconnect on ‘Bad Boys 2’',
    date: 'August 2024',
    url: 'https://hypebeast.com/2024/8/chance-the-rapper-x-joey-purp-bad-boys-2-single-stream-music-video',
    image: '/thumbnails/bad-boys-2.jpg',
    excerpt:
      'Hypebeast spotlights the Chicago-shot single and music video, a glossy reunion between Chance the Rapper and Joey Purp.',
  },
]
