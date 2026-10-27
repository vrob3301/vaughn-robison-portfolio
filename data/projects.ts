export interface Project {
  id: string
  title: string
  titleLine2?: string
  subtitle: string
  body: string[]
  role?: string
  context?: { text: string; sourceLabel: string; sourceUrl: string }
  vimeoId?: string    // Vimeo — enables silent hover video preview on homepage
  youtubeId?: string  // YouTube — detail page embed; also enables silent hover video preview on homepage when no vimeoId is set
  thumbnail: string
  cardImage?: string  // Optional separate image for the homepage card (defaults to thumbnail)
  link?: string
  linkLabel?: string
  galleryCaptions?: Record<string, string>
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
    title: 'IN WHOSE NAME?',
    subtitle: 'Feature-Length Documentary',
    body: [
      "A six-year portrait of Kanye West, In Whose Name? examines the tensions between creative ambition, belief, and public life.",
      "Connected the creative edit to the practical requirements of release. Coordinated story-development workflows, theatrical DCP delivery, and materials needed for legal review, alongside press and marketing production."
],
    role: "Producer",
    context: {"text":"No. 8 in Amy Nicholson’s best films of 2025.","sourceLabel":"Los Angeles Times","sourceUrl":"https://www.latimes.com/entertainment-arts/movies/story/2025-12-05/best-movies-2025-where-to-find-them-sinners-hedda-eddington-one-battle-naked-gun-sirat"},
    vimeoId: '1171401539',
    thumbnail: '/thumbnails/in-whose-name.png',
    galleryLabel: 'Film & Production',
    galleryColumns: 2,
    gallery: ['/in-whose-name/in-whose-name-theatrical-poster.jpg', '/in-whose-name/in-whose-name-production-photo.jpg'],
    galleryCaptions: {
      '/in-whose-name/in-whose-name-theatrical-poster.jpg': 'In Whose Name? theatrical poster — Vaughn Robison, producer.',
      '/in-whose-name/in-whose-name-production-photo.jpg': 'Behind the scenes of In Whose Name?',
    },
    detailAspect: '2.39 / 1',  // Theatrical scope — show the true ratio, letterbox-clip the 16:9 player
  },

  {
    id: 'pepsi-just-don',
    title: 'PEPSI × JUST DON',
    subtitle: 'Commercial Production',
    body: [
      "Pepsi and Just Don meet through Chicago's sports culture in a campaign film produced through XPOSURE.",
      "The film premiered at a Pepsi event at the DuSable Black History Museum and Education Center, placing the collaboration in the city that shaped it."
],
    role: "Producer",
    vimeoId: '1171401895',
    thumbnail: '/thumbnails/pepsi.jpg',
  },

  {
    id: 'chance-the-rapper',
    title: 'CHANCE THE RAPPER',
    titleLine2: 'ACID RAP 10 ARENA TOUR',
    subtitle: 'Acid Rap 10 Arena Tour Production',
    body: [
      "Ten years after Acid Rap, Chance the Rapper brought the mixtape back to audiences in Chicago, New York, and Los Angeles.",
      "Assembled and led the visual-production team documenting the anniversary shows. The work preserved the live performances and the audience response as a new chapter in the project's history."
],
    role: "Visual Documentation Producer",
    context: {"text":"Original mixtape · Acid Rap ranked No. 12 in Pitchfork’s albums of 2013.","sourceLabel":"Pitchfork","sourceUrl":"https://pitchfork.com/features/lists-and-guides/9293-the-top-50-albums-of-2013/?page=6"},
    vimeoId: '1171402172',
    thumbnail: '/thumbnails/chance.jpg',
  },

  {
    id: 'abel-paul-george',
    title: 'ABEL PAUL GEORGE',
    subtitle: 'Merchandise Commercial Campaign',
    body: [
      "A limited garment release unfolds across three films. For Abel Paul George and Enigma Curation, the campaign uses Serra Retreat's architecture and mountain setting to give the collection a contemplative visual language.",
      "Directed and produced the series, using place and pacing to introduce the work."
],
    role: "Director · Producer",
    vimeoId: '1171404959',
    thumbnail: '/thumbnails/apg.jpg',
  },

  {
    id: 'new-bible-belt',
    title: 'NEW BIBLE BELT',
    subtitle: 'NYFW Activation + Production',
    body: [
      "A fashion-week activation built around giving clothes away. New Bible Belt's first public gathering paired a free clothing giveaway with a meeting place for artists and designers in September 2024.",
      "Created with Realtree, the pop-up gave the group a physical space for creative exchange. Helped produce and document the gathering."
],
    role: "Production · Documentation",
    vimeoId: '1171405239',
    thumbnail: '/thumbnails/nbb.jpg',
    link: 'https://www.newbiblebelt.org',
  },

  // ── New Additions ─────────────────────────────────────────────────────────

  {
    id: 'stars-out',
    title: 'STARS OUT',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      "“Stars Out” extends one visual direction across moving image and cover art. Filmed in Atlanta and Chicago, the video brings nightlife and performance into Chance the Rapper's Star Line rollout.",
      "Shaped the camerawork, edit, and single artwork as connected parts of the release."
],
    role: "Camera · Editing · Cover Art",
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
      "A real landscape becomes the basis for a speculative world. At Vasquez Rocks, the terrain and open scale give “Just a Drop” its otherworldly setting.",
      "Developed through conversations with Chance the Rapper about Star Line, the concept made location a creative tool. Secured the site and carried the film through production and editing."
],
    role: "Producer · Editor",
    youtubeId: 'FqofHYrDqMU',
    thumbnail: '/thumbnails/just-a-drop.jpg',
  },

  {
    id: 'yah-know',
    title: 'YAH KNOW',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      "“YAH Know” brings painting into the music-video format through Chance the Rapper's collaboration with artist Mia Lee and Ghanaian singer King Promise.",
      "Camera and editing work connect material filmed in Accra, Chicago, and Los Angeles, giving the Star Line project a visual form across places and disciplines."
],
    role: "Camera Operator · Editor",
    youtubeId: 'bcZsfqcBiog',
    thumbnail: '/thumbnails/yah-know.png',
  },

  {
    id: 'together',
    title: 'TOGETHER',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      "“Together” uses archival footage alongside new performance to place a song inside a community's memory.",
      "The edit connects Chance the Rapper's family and neighborhood to the spaces the DJ Premier-produced track asks people to hold onto."
],
    role: "Lead Camera Operator · Editor",
    youtubeId: 'ZVwTX6WP-MM',
    thumbnail: '/thumbnails/together.jpg',
  },

  {
    id: 'bobby',
    title: 'BOBBY',
    subtitle: 'Bobby Beats · Album Trailer',
    body: [
      "Chicago's Lincoln Park provides the setting for this introduction to Bobby Beats' album.",
      "Produced through XPOSURE, the trailer places the music within the city's open spaces and everyday surroundings."
],
    role: "Producer",
    vimeoId: '1171417204',
    thumbnail: '/thumbnails/bobby.png',
  },

  {
    id: '3333',
    title: '3333',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      "A live performance became the music video. Shot at the Minnesota State Fair, “3333” uses close, handheld camerawork to keep Chance the Rapper and the crowd in the same exchange.",
      "The edit lets that real audience response carry the song's gratitude."
],
    role: "Lead Camera Operator · Editor",
    youtubeId: 'ifRwRfdKrOE',
    thumbnail: '/thumbnails/3333.webp',
  },

  {
    id: 'victor',
    title: 'VICTOR',
    subtitle: 'Roc Nation · Album Trailer',
    body: [
      "Vic Mensa and Omari Hardwick introduce the world of Victor in this album trailer filmed in New York.",
      "Produced through XPOSURE for the 2023 release, the film gives the album a cinematic introduction across Roc Nation's rollout."
],
    role: "Producer",
    vimeoId: '1171416679',
    thumbnail: '/thumbnails/victor.png',
  },

  {
    id: 'coloring-book-poster',
    title: 'COLORING BOOK',
    titleLine2: 'TEN YEAR ANNIVERSARY TOUR',
    subtitle: 'Concert Poster Design',
    body: [
      "Coloring Book's visual identity is reworked as a typographic tour poster. The design carries recognition of the original project into a composition built to read at concert scale, with North American dates integrated into the artwork."
],
    role: "Poster Design",
    context: {"text":"Album recognition · Coloring Book won Best Rap Album at the 2017 GRAMMYs.","sourceLabel":"Recording Academy","sourceUrl":"https://www.grammy.com/artists/chancelor-bennett/19614/"},
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
      "A merchandise campaign seen through childhood imagination and Chicago's neighborhood courts. The film connects the Bulls' identity to the places where fans first make basketball their own.",
      "Produced through XPOSURE for the Chicago Bulls, Mitchell & Ness, and Just Don's Fall 2024 collection."
],
    role: "Producer",
    vimeoId: '1171416564',
    thumbnail: '/thumbnails/chicago-bulls.png',
  },

  // ── STAR LINE Music Videos & Performances (YouTube) ─────────────────────────

  {
    id: 'buried-alive',
    title: 'BURIED ALIVE',
    subtitle: 'Chance the Rapper · Music Video',
    body: [
      "“Buried Alive” gives visual form to the pressure and perseverance running through Chance the Rapper's song.",
      "Led production from planning through final delivery, bringing the concept, crew, and finished film into alignment."
],
    role: "Lead Producer",
    youtubeId: '8BjfkpgbAEY',
    thumbnail: '/thumbnails/buried-alive-armor-v2.jpg',
  },

  {
    id: 'bad-boys-2',
    title: 'BAD BOYS 2',
    subtitle: 'Chance the Rapper ft. Joey Purp · Music Video',
    body: [
      "Chance the Rapper and Joey Purp bring their Chicago connection into “Bad Boys 2,” a music video and single-artwork project within the Star Line rollout.",
      "Production, location scouting, editing, and cover design carried the collaboration from the shoot to its release."
],
    role: "Lead Producer · Editor · Cover Art",
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
      "Chance the Rapper and Joey Bada$$ share the frame in “The Highs & The Lows.”",
      "The edit shapes the exchange between their performances, giving the song's changing rhythms a visual pace."
],
    role: "Editor",
    youtubeId: 'uCEv2NMr46E',
    thumbnail: '/thumbnails/highs-and-lows-mv.jpg',
  },

  {
    id: 'together-live',
    title: 'TOGETHER',
    titleLine2: 'LIVE PERFORMANCE',
    subtitle: 'Chance the Rapper · Live Performance',
    body: [
      "A live setting gives “Together” a direct, shared expression of its themes of family and community.",
      "Led production of the performance film from the shoot through final delivery."
],
    role: "Lead Producer",
    youtubeId: 'bSYYrydVXBs',
    thumbnail: '/thumbnails/together-live.jpg',
  },

  {
    id: 'hip-hop-nation',
    title: 'HIP HOP NATION',
    titleLine2: 'LIVE FROM NEW YORK',
    subtitle: 'Chance the Rapper · Virtual Concert (SiriusXM)',
    body: [
      "Filmed live in New York for SiriusXM's Hip Hop Nation, this concert brings Chance the Rapper's performance into an intimate screen format.",
      "Camera coverage and editing keep the focus on the live set for audiences watching beyond the room."
],
    role: "Camera Operator · Editor",
    youtubeId: 'zvVkUPhocEw',
    thumbnail: '/thumbnails/hip-hop-nation.jpg',
  },

  {
    id: 'black-star-line-festival',
    title: 'BLACK STAR LINE',
    titleLine2: 'FESTIVAL · ACCRA',
    subtitle: 'Festival Documentation',
    body: [
      "The first Black Star Line Festival called for a record of the whole gathering, beyond the concert alone.",
      "Assembled a crew of Ghanaian filmmakers and produced a week of on-site documentation in Accra, including Chance the Rapper's conversation with Dave Chappelle at the University of Ghana. The coverage holds the performances, conversations, and encounters within the same record."
],
    role: "On-site Documentation Producer",
    context: {"text":"Festival context · Free gathering in Accra, with 52,000 attendees reported by Pollstar.","sourceLabel":"Pollstar","sourceUrl":"https://news.pollstar.com/2023/03/01/miracle-man-how-chance-the-rapper-produced-a-free-festival-in-ghana-for-52k-fans/"},
    youtubeId: 'cXmS3nC1WVU',
    thumbnail: '/thumbnails/black-star-line-fest-boat.jpg',
  },

  {
    id: 'same-drugs-doc',
    title: 'SAME DRUGS',
    titleLine2: '10 YEAR DOCUMENTARY',
    subtitle: 'Chance the Rapper · Documentary',
    body: [
      "Concert documentation becomes part of a longer cultural record in this tenth-anniversary look at “Same Drugs.”",
      "Live footage Directed and produced at Chance the Rapper's earlier arena shows gives the documentary a way to revisit the song through its performance and audience."
],
    role: "Director · Producer, featured concert footage",
    youtubeId: '7JEDHWBd3WI',
    thumbnail: '/thumbnails/same-drugs-10yr.jpg',
  },

  {
    id: 'donda-sessions',
    title: 'THE DONDA SESSIONS',
    titleLine2: 'eTV · EPISODE 2',
    subtitle: 'Enigma · Episodic Series',
    body: [
      "The second episode of Enigma's eTV series documents the people and working process behind the Donda sessions.",
      "Camera and editing work helped carry that behind-the-scenes material into the finished episode."
],
    role: "Camera Operator · Editor",
    context: {"text":"Album context · Donda became Kanye West’s tenth No. 1 album on the Billboard 200.","sourceLabel":"Pitchfork","sourceUrl":"https://pitchfork.com/news/kanye-west-donda-debuts-at-no-1-in-biggest-week-for-any-album-in-2021/"},
    youtubeId: 'jVRz5KWyqcA',
    thumbnail: '/thumbnails/donda-sessions-card.png',
  },

  {
    id: 'writings-on-the-wall',
    title: 'WRITINGS ON THE WALL',
    titleLine2: 'A STAR LINE LISTENING EXPERIENCE',
    subtitle: 'Chance the Rapper · Listening Experience · Documentary',
    body: [
      "We turned unreleased music into a shared physical experience. Across more than 20 shows in 2024, Writings on the Wall paired sound, visuals, and beanbag seating in an immersive listening environment.",
      "New Bible Belt's creative community helped crew the tour city by city, connecting the music to local filmmakers and audiences. Helped develop the concept, documented the tour, and led its creative direction and branding."
],
    role: "Concept Development · Documentary Production · Creative Direction",
    youtubeId: 'wueSv3Kl8Mo',
    thumbnail: '/thumbnails/writings-on-the-wall.jpg',
    galleryLabel: 'Flyers',
    galleryColumns: 2,
    gallery: [
      '/thumbnails/writings-on-the-wall-miami.jpg',
      '/thumbnails/writings-on-the-wall-la.jpg',
      '/thumbnails/writings-on-the-wall-chicago.jpg',
      '/thumbnails/writings-on-the-wall-atlanta.jpg',
      '/thumbnails/writings-on-the-wall-nyc.jpg',
      '/thumbnails/writings-on-the-wall-minneapolis.jpg',
    ],
  },

  // ── Design & Art Direction ──────────────────────────────────────────────────

  {
    id: 'black-star-line-poster',
    title: 'BLACK STAR LINE',
    titleLine2: 'FESTIVAL · POSTER DESIGN',
    subtitle: 'Poster Design · Creative Direction · Art Direction',
    body: [
      "The Black Star becomes a shared visual anchor for the festival's lineup and diasporic purpose. Typography and art direction organize a wide range of performers into one identity for the inaugural free gathering in Accra."
],
    role: "Poster Design · Creative Direction · Art Direction",
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
      "Star Line's visual identity is adapted for the scale and reading distance of outdoor media. The For Your Consideration campaign carries the album's artwork and message onto billboards in Nashville, Chicago, New York, and Los Angeles."
],
    role: "Billboard Design · Creative Direction",
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
      "The Stem Player's interface became the starting point for a space people could enter. Its circular form, tactile controls, and illuminated surface informed the 2022 pop-up concept.",
      "Explored through 3D renders, sculptural booth studies, and a cruciform layout how the product's visual language could guide movement and hands-on interaction."
],
    role: "3D Design · Spatial Concept Development",
    context: {"text":"Device recognition · Stem Player received a Special Mention in TIME’s Best Inventions of 2022.","sourceLabel":"TIME","sourceUrl":"https://time.com/collections/best-inventions-2022/6230491/stem-player/"},
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
      "Bearing Witness: Cincinnati follows families who have lost a loved one to violence and the advocates who stay beside them afterward.",
      "Produced with the Cincinnati Police Department and co-producer Emma Mitsch, the documentary makes the daily work of victim assistance visible through the people receiving and providing that care.",
      "The film was presented during the department's session at Ohio's Two Days in May Conference on Victim Assistance, bringing those experiences before professionals who support survivors."
],
    role: "Director · Producer",
    thumbnail: '/thumbnails/bearing-witness-cincinnati.jpg',
    link: 'https://www.linkedin.com/posts/vaughn-robison-783ab61b0_my-most-recent-documentary-bearing-witness-activity-7464646679997231104-0aHw',
    linkLabel: 'Vaughn’s documentary announcement',
    posterAspect: '3840 / 1330',
    posterMaxWidth: 900,
    galleryLabel: 'Stills',
    galleryColumns: 1,
    gallery: ['/bearing-witness/water-tower.jpg'],
  },
]
