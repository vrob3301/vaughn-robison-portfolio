export interface Project {
  id: string
  title: string
  titleLine2?: string
  subtitle: string
  body: string[]
  vimeoId?: string    // Vimeo — enables silent hover video preview on homepage
  youtubeId?: string  // YouTube — detail page embed only (no hover preview)
  thumbnail: string
  cardImage?: string  // Optional separate image for the homepage card (defaults to thumbnail)
  link?: string
  coverScale?: number        // Override iframe scale on detail page (default 1.112 for 16:9→16:10)
  detailAspect?: string      // Detail hero aspect for video projects (e.g. '2.39 / 1' theatrical); letterbox-clips the 16:9 player
  thumbnailPosition?: string // CSS object-position for the thumbnail (default 'center')
  thumbnailScale?: number    // Zoom the homepage thumbnail (anchored top) to crop edges (default 1)
  posterAspect?: string      // Image-only detail frame aspect (default '2049 / 2561' portrait)
  posterMaxWidth?: number    // Image-only detail frame max width in px (default 500)
  gallery?: string[]         // Image-only detail page: stacked stills shown below the text
  galleryColumns?: number    // Gallery column count (default 1 = full-width stack; 2 = side-by-side)
  galleryLabel?: string      // Small uppercase heading shown above the gallery
  galleryMaxWidth?: number   // Constrain + center the gallery (e.g. a single cover art shown like a record)
}

export const projects: Project[] = [
  // ── Original Five ─────────────────────────────────────────────────────────

  {
    id: 'in-whose-name',
    title: 'IN WHOSE NAME',
    subtitle: 'Feature-Length Documentary',
    body: [
      'In Whose Name is a six-year documentary about the cultural and spiritual influence surrounding Kanye West. Vaughn worked in post-production, coordinating story development and the delivery workflows that kept the narrative consistent across the theatrical and streaming versions.',
      'Worked with NB Studios, AMSI Entertainment, and Pace Pictures to streamline the final asset pipeline and the distribution rollout. The film opened nationwide on over 1,000 screens, made more than $1 million at the box office, and landed on the Los Angeles Times Top 10 list for the year.',
      'Organized, managed, and produced all of the press and marketing assets and strategy, as well as distribution, after the film rolled out.',
    ],
    vimeoId: '1171401539',
    thumbnail: '/thumbnails/in-whose-name.png',
    detailAspect: '2.39 / 1',  // Theatrical scope — show the true ratio, letterbox-clip the 16:9 player
  },

  {
    id: 'pepsi-just-don',
    title: 'PEPSI × JUST DON',
    subtitle: 'Commercial Production',
    body: [
      'Produced this campaign film with Pepsi and Chicago designer Just Don through his production company XPOSURE. It marked the start of football season and the connection between sports and the city of Chicago.',
      'Shot at the end of 2024 as a kickoff to the season. The goal was to put Pepsi and Just Don together on something that felt true to Chicago and its sports culture.',
      'The campaign premiered at a Pepsi event at the DuSable Black History Museum and Education Center in Chicago.',
    ],
    vimeoId: '1171401895',
    thumbnail: '/thumbnails/pepsi.jpg',
  },

  {
    id: 'chance-the-rapper',
    title: 'CHANCE THE RAPPER',
    titleLine2: 'ACID RAP 10 ARENA TOUR',
    subtitle: 'Acid Rap 10 Arena Tour Production',
    body: [
      'In 2023 Vaughn produced the visual documentation of Chance the Rapper\'s Acid Rap 10 Year Anniversary Tour. Acid Rap came out in 2013 and became one of the defining mixtapes of the decade, and the tour brought it back ten years later.',
      'The anniversary run played sold-out arenas in Chicago, New York, and Los Angeles.',
      'Led production for the tour\'s visual coverage, put the creative team together, and oversaw how the live shows were documented.',
    ],
    vimeoId: '1171402172',
    thumbnail: '/thumbnails/chance.jpg',
  },

  {
    id: 'abel-paul-george',
    title: 'ABEL PAUL GEORGE',
    subtitle: 'Merchandise Commercial Campaign',
    body: [
      'Directed and produced a three-part commercial campaign for designer Abel Paul George, made with Enigma Curation to introduce a limited hoodie release.',
      'Filmed at Serra Retreat, a Franciscan monastery in Malibu. The architecture and the quiet mountain setting shaped the tone of the films and gave the campaign a contemplative feel that matched the work.',
      'The three episodes were the main commercial rollout for the collaboration, and the series got a strong response online.',
    ],
    vimeoId: '1171404959',
    thumbnail: '/thumbnails/apg.jpg',
  },

  {
    id: 'new-bible-belt',
    title: 'NEW BIBLE BELT',
    subtitle: 'NYFW Activation + Production',
    body: [
      'During New York Fashion Week in September 2024, Vaughn helped produce and document the first public activation for New Bible Belt. It was the group\'s debut event.',
      'The activation partnered with Realtree on a pop-up gathering built around community and creative exchange. It brought together artists and designers during one of the biggest weeks in fashion.',
      'More than 150 pounds of clothing was given away for free to the people who came through, and the event drew over 300 attendees. It was New Bible Belt\'s first real presence at New York Fashion Week.',
    ],
    vimeoId: '1171405239',
    thumbnail: '/thumbnails/nbb.jpg',
    link: 'https://newbiblebelt.org',
  },

  // ── New Additions ─────────────────────────────────────────────────────────

  {
    id: 'stars-out',
    title: 'STARS OUT',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      'Shot and edited Chance the Rapper\'s music video for "Stars Out," a 2024 single from his Star Line era. It\'s a confident, celebratory record, and the video plays to that.',
      'Filmed in Atlanta and Chicago. The idea was a cinematic portrait of Chance stepping back into the spotlight, with nightlife energy running underneath it.',
      'Between the camera work and the edit, the goal was something bold and immediate that matched the momentum around his return.',
      'Vaughn also designed the cover art for the single.',
    ],
    youtubeId: 'ywSYgBVkocM',
    thumbnail: '/thumbnails/stars-out.png',
    galleryLabel: 'Cover Art',
    galleryMaxWidth: 460,
    gallery: ['/thumbnails/stars-out-cover.jpg'],
  },

  {
    id: 'just-a-drop',
    title: 'JUST A DROP',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      'Produced and edited Chance the Rapper\'s music video for "Just a Drop," one of the key visuals from his album Star Line.',
      'Filmed at Vasquez Rocks outside Los Angeles, using the desert to build a futuristic, almost sci-fi world. That came out of an early conversation between Chance and Vaughn about building a larger visual universe for the Star Line era.',
      'Vaughn also found and secured the location, which ended up shaping a lot of the look. The terrain and the scale of the place carried the song\'s themes of reflection and resilience.',
    ],
    youtubeId: 'FqofHYrDqMU',
    thumbnail: '/thumbnails/just-a-drop.jpg',
  },

  {
    id: 'yah-know',
    title: 'YAH KNOW',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      'Edited and operated camera on Chance the Rapper\'s "YAH Know," an art project made with visual artist Mia Lee and featuring Ghanaian singer King Promise. It\'s part of his Star Line rollout, which pulls music, film, and art into one body of work.',
      'Filmed in Accra, Chicago, and Los Angeles, which speaks to the project\'s connection to the African diaspora. The piece sits somewhere between a music video and a gallery installation.',
      '"YAH Know" was also part of how Chance announced his cultural work connected to Ghana, and it pointed toward what became the Black Star Line Festival in Accra.',
    ],
    youtubeId: 'bcZsfqcBiog',
    thumbnail: '/thumbnails/yah-know.png',
  },

  {
    id: 'together',
    title: 'TOGETHER',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      'Edited and ran lead camera on Chance the Rapper\'s music video for "Together," a single produced by DJ Premier for the Star Line project.',
      'The video mixes performance with archival footage to get at what the song is about: family, the neighborhood, and holding onto community spaces. The edit was built to carry the emotional weight of the track and tie Chance\'s own story back to Chicago.',
    ],
    youtubeId: 'ZVwTX6WP-MM',
    thumbnail: '/thumbnails/together.jpg',
  },

  {
    id: 'bobby',
    title: 'BOBBY',
    subtitle: 'Bobby Beats · Album Trailer',
    body: [
      'Through his production company XPOSURE, Vaughn produced an album trailer for Chicago producer Bobby Beats. He\'s worked with a lot of artists and collectives around the city, including projects tied to Joey Purp and the Forever Band collective.',
      'Filmed in Lincoln Park, using the open space and the city around it to set the tone. The trailer works as a short cinematic intro to the album and to where his sound is headed.',
    ],
    vimeoId: '1171417204',
    thumbnail: '/thumbnails/bobby.png',
  },

  {
    id: '3333',
    title: '3333',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      'Vaughn was the main camera operator and editor on Chance the Rapper\'s music video for "3333," filmed during his set at the Minnesota State Fair Grandstand. It captures a real moment between Chance and his fans that matches the gratitude in the song.',
      'Shot while he was traveling the country hosting his "Writings on the Wall" listening experiences, an important stretch in the Star Line rollout.',
      'The camera stayed handheld and close to the performance so the crowd\'s energy carried the video. It documents a point where Chance reconnected with his fanbase.',
    ],
    youtubeId: 'ifRwRfdKrOE',
    thumbnail: '/thumbnails/3333.webp',
  },

  {
    id: 'victor',
    title: 'VICTOR',
    subtitle: 'Roc Nation · Album Trailer',
    body: [
      'Through his production company XPOSURE, Vaughn produced the official album trailer for Vic Mensa\'s 2023 album Victor. It was the main visual for Roc Nation\'s rollout around the release.',
      'Filmed in New York City with Vic Mensa and actor Omari Hardwick. The trailer works as a cinematic intro to the album and sets up its emotional direction.',
      'It ran across Roc Nation\'s social and marketing channels as the central promo video for the campaign.',
    ],
    vimeoId: '1171416679',
    thumbnail: '/thumbnails/victor.png',
  },

  {
    id: 'coloring-book-poster',
    title: 'COLORING BOOK',
    titleLine2: 'TEN YEAR ANNIVERSARY TOUR',
    subtitle: 'Concert Poster Design',
    body: [
      'Designed the official concert poster for Chance the Rapper\'s Coloring Book Ten Year Anniversary Tour, ten years after one of the most acclaimed projects in independent hip-hop.',
      'Coloring Book came out in 2016 and was the first streaming-only album to win a Grammy. The poster draws on the look of the original project with a bold, typographic treatment that could hold up at arena scale.',
      'The design covers the full North American run, with dates in Chicago, New York, Los Angeles, and beyond.',
    ],
    thumbnail: '/thumbnails/chance-tour-poster.jpg',
    cardImage: '/thumbnails/chance-tour-card.jpg',  // Pre-cropped (above white divider) so the full title stays readable
    thumbnailPosition: 'top',
  },

  {
    id: 'chicago-bulls-just-don',
    title: 'CHICAGO BULLS',
    titleLine2: 'JUST DON',
    subtitle: 'Commercial Production',
    body: [
      'Through his production company XPOSURE, Vaughn produced a commercial campaign for the Chicago Bulls, Mitchell & Ness, and Just Don around the cultural legacy of basketball in Chicago. The film supported the brands\' Fall 2024 collection of hats and merch.',
      'Shot in Chicago and built around the childlike imagination that basketball brings out across the city, and the way the Bulls have shaped generations of fans here. The point was to show basketball as more than a sport in Chicago. It\'s part of the city\'s identity.',
      'It\'s a storytelling-driven commercial about how far the Bulls\' influence reaches, all the way down to the city\'s playgrounds and neighborhood courts.',
    ],
    vimeoId: '1171416564',
    thumbnail: '/thumbnails/chicago-bulls.png',
  },

  // ── STAR LINE Music Videos & Performances (YouTube) ─────────────────────────

  {
    id: 'buried-alive',
    title: 'BURIED ALIVE',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      '"Buried Alive" is an official music video from Chance the Rapper\'s 2024 Star Line project. It leans into the pressure and perseverance that run through the record.',
      'Vaughn was the lead producer on the video and ran it from planning through final delivery.',
    ],
    youtubeId: '8BjfkpgbAEY',
    thumbnail: '/thumbnails/buried-alive-armor-v2.jpg',
  },

  {
    id: 'bad-boys-2',
    title: 'BAD BOYS 2',
    subtitle: 'Chance the Rapper ft. Joey Purp · Music Video',
    body: [
      '"Bad Boys 2," featuring fellow Chicago artist Joey Purp, is an official music video from Chance the Rapper\'s 2024 Star Line project. The collaboration speaks to the Chicago roots at the heart of the album.',
      'Vaughn was the lead producer on the video, handling crew coordination and location scouting and editing the final cut.',
      'Vaughn also designed the cover art for the "Bad Boys 2" single.',
    ],
    youtubeId: '_uFMbBVPPWg',
    thumbnail: '/thumbnails/bad-boys-2.jpg',
    galleryLabel: 'Cover Art',
    galleryMaxWidth: 460,
    gallery: ['/thumbnails/bad-boys-2-cover.jpg'],
  },

  {
    id: 'highs-and-lows',
    title: 'THE HIGHS & THE LOWS',
    subtitle: 'Chance the Rapper ft. Joey Bada$$ · Music Video',
    body: [
      '"The Highs & The Lows," featuring Joey Bada$$, is an official music video from the Star Line project. It puts together two of the most distinctive voices in independent hip-hop.',
      'Edited the video and shaped the final cut and its rhythm.',
    ],
    youtubeId: 'uCEv2NMr46E',
    thumbnail: '/thumbnails/highs-and-lows-mv.jpg',
  },

  {
    id: 'together-live',
    title: 'TOGETHER',
    titleLine2: 'LIVE PERFORMANCE',
    subtitle: 'Chance the Rapper · Live Performance',
    body: [
      'A live performance of "Together," the single produced by DJ Premier for Chance the Rapper\'s Star Line project. It brings the song\'s themes of family and community into a live setting.',
      'Vaughn was the lead producer on the performance video and oversaw the shoot through final delivery.',
    ],
    youtubeId: 'bSYYrydVXBs',
    thumbnail: '/thumbnails/together-live.jpg',
  },

  {
    id: 'hip-hop-nation',
    title: 'HIP HOP NATION',
    titleLine2: 'LIVE FROM NEW YORK',
    subtitle: 'Chance the Rapper · Virtual Concert (SiriusXM)',
    body: [
      'A virtual concert for SiriusXM\'s Hip Hop Nation, filmed live from New York. The set brought Chance the Rapper\'s music to a broadcast and streaming audience in an intimate, performance-focused format.',
      'Worked as a camera operator and editor, capturing the live set and assembling the final edit.',
    ],
    youtubeId: 'zvVkUPhocEw',
    thumbnail: '/thumbnails/hip-hop-nation.jpg',
  },

  {
    id: 'black-star-line-festival',
    title: 'BLACK STAR LINE',
    titleLine2: 'FESTIVAL · ACCRA',
    subtitle: 'Festival Documentation',
    body: [
      'Footage from the first Black Star Line Festival, the free concert in Accra, Ghana that brought together music, art, and the African diaspora on an international stage. It grew out of Chance the Rapper\'s work connecting his creative life to Ghana.',
      'Vaughn was the on-site producer in Accra and brought on a full crew of Ghanaian filmmakers to document it. The coverage ran the whole week, including a conversation between Chance and Dave Chappelle at the University of Ghana.',
    ],
    youtubeId: 'cXmS3nC1WVU',
    thumbnail: '/thumbnails/black-star-line-fest-boat.jpg',
  },

  {
    id: 'same-drugs-doc',
    title: 'SAME DRUGS',
    titleLine2: '10 YEAR DOCUMENTARY',
    subtitle: 'Chance the Rapper · Documentary',
    body: [
      'A documentary marking ten years of "Same Drugs," one of the most loved songs in Chance the Rapper\'s catalog. The film looks back on the decade since the song came out and what it has meant to him and to the people who grew up with it.',
      'The documentary uses live concert footage that Vaughn directed and produced at Chance\'s earlier arena shows.',
    ],
    youtubeId: '7JEDHWBd3WI',
    thumbnail: '/thumbnails/same-drugs-10yr.jpg',
  },

  {
    id: 'donda-sessions',
    title: 'THE DONDA SESSIONS',
    titleLine2: 'eTV · EPISODE 2',
    subtitle: 'Enigma · Episodic Series',
    body: [
      '"The Donda Sessions" is the second episode of eTV, an episodic series produced through Enigma that goes behind the scenes on a defining creative moment. The episode documents the people in the room and how the sessions came together.',
      'Worked as a camera operator and editor on the episode, helping capture the sessions and assemble the final cut.',
    ],
    youtubeId: 'jVRz5KWyqcA',
    thumbnail: '/thumbnails/donda-sessions-card.png',
  },

  // ── Design & Art Direction ──────────────────────────────────────────────────

  {
    id: 'black-star-line-poster',
    title: 'BLACK STAR LINE',
    titleLine2: 'FESTIVAL · POSTER DESIGN',
    subtitle: 'Poster Design · Creative Direction · Art Direction',
    body: [
      'Designed the official poster for the first Black Star Line Festival, the landmark free concert held in Accra, Ghana, headlined by Chance the Rapper and Vic Mensa alongside Erykah Badu, T-Pain, Jeremih, Sarkodie, Tobe Nwigwe, M.anifest, the Asakaa Boys, and more.',
      'Led the creative direction and art direction for the poster, building a bold typographic identity around the festival\'s Black Star symbolism and its mission of connecting the African diaspora.',
    ],
    thumbnail: '/thumbnails/bslf-poster-full.jpg',
    cardImage: '/thumbnails/bslf-poster-card.jpg',  // Full poster centered on its yellow ground so no text is cropped
    posterAspect: '1200 / 1500',
    posterMaxWidth: 520,
  },

  {
    id: 'grammys-fyc-campaign',
    title: 'STAR LINE',
    titleLine2: 'GRAMMYs · FOR YOUR CONSIDERATION',
    subtitle: 'Billboard Design · Creative Direction',
    body: [
      'Created the billboard campaign for Chance the Rapper\'s "For Your Consideration" GRAMMYs push behind his 2025 album Star Line, designing the out-of-home creative that carried the album into awards season.',
      'The For Your Consideration campaign put billboards up across Nashville, Chicago, New York, and Los Angeles, bringing the Star Line visual world and its Album of the Year case to each city.',
    ],
    thumbnail: '/thumbnails/grammys-fyc.jpg',  // Detail-page poster — stays the billboard image
    cardImage: '/thumbnails/grammys-fyc-card.jpg',  // Homepage card — Star Line FYC artwork only
    posterAspect: '2200 / 1229',
    posterMaxWidth: 900,
    galleryLabel: 'Out-of-Home',
    galleryColumns: 2,
    gallery: ['/grammys/ooh-01-la.jpg', '/grammys/ooh-02-chicago.jpg'],
  },

  {
    id: 'yeezy-stem-player',
    title: 'YEEZY STEM PLAYER',
    titleLine2: 'POP-UP ACTIVATION · 3D DESIGN + CONCEPT',
    subtitle: '3D Design · Concept Development · Activation Design',
    body: [
      'Vaughn was one of the lead developers on the design and concept work for the Yeezy Stem Player pop-up activations in 2022, the retail experiences built around Kanye West\'s Stem Player music device.',
      'The work covered the 3D product renders, the spatial concept, and the design of the activation environments, taking the Stem Player\'s circular, tactile form and turning it into a physical and visual language for the pop-up spaces.',
      'The concept centered on a cruciform layout, with sculptural booth structures and a controlled lighting program that echoed the device\'s glowing interface. The renders and concept studies guided how visitors would move through the space and use the Stem Player in person.',
    ],
    thumbnail: '/yeezy/01-product.jpg',
    posterAspect: '16 / 9',
    posterMaxWidth: 900,
    galleryColumns: 2,
    gallery: [
      '/yeezy/stem-spatial-concept.jpg',
      '/yeezy/03-concept-sketch.jpg',
      '/yeezy/04-booth-render.jpg',
      '/yeezy/05-booth-interior.jpg',
      '/yeezy/06-activation.jpg',
      '/yeezy/07-event.jpg',
      '/yeezy/08-spatial-concept.jpg',
    ],
  },

  {
    id: 'bearing-witness-cincinnati',
    title: 'BEARING WITNESS',
    titleLine2: 'CINCINNATI',
    subtitle: 'City of Cincinnati · Documentary',
    body: [
      'Bearing Witness: Cincinnati is a documentary Vaughn directed and produced for the City of Cincinnati over four months. The film follows families who have lost a loved one to gun violence, and the victim advocates who walk with them through what comes after.',
      'The work makes visible the labor of accompaniment, the people who refuse to let a victim be reduced to a case number, and the slow work of carrying a grief that does not resolve. It also shows how victim protection and assistance programs provide ongoing services to the families left behind.',
      'The film premiered at the Ohio Attorney General\'s Two Days in May Conference on Victim Assistance, the state\'s thirty-fourth annual gathering of victim advocates. It was shown during the session led by the City of Cincinnati Police Department Victims Assistance Liaison Unit, before an audience of advocates, prosecutors, law enforcement, and state officials.',
      'Directed and produced by Vaughn Robison, with co-producer Emma Mitsch and the Cincinnati Police Department.',
    ],
    thumbnail: '/thumbnails/bearing-witness-cincinnati.jpg',
    posterAspect: '3840 / 1330',
    posterMaxWidth: 900,
    galleryLabel: 'Stills',
    galleryColumns: 1,
    gallery: ['/bearing-witness/water-tower.jpg'],
  },
]
