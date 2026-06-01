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
  thumbnailPosition?: string // CSS object-position for the thumbnail (default 'center')
  thumbnailScale?: number    // Zoom the homepage thumbnail (anchored top) to crop edges (default 1)
  posterAspect?: string      // Image-only detail frame aspect (default '2049 / 2561' portrait)
  posterMaxWidth?: number    // Image-only detail frame max width in px (default 500)
  gallery?: string[]         // Image-only detail page: stacked stills shown below the text
}

export const projects: Project[] = [
  // ── Original Five ─────────────────────────────────────────────────────────

  {
    id: 'in-whose-name',
    title: 'IN WHOSE NAME',
    subtitle: 'Feature-Length Documentary',
    body: [
      'In Whose Name is a six-year documentary examining the cultural and spiritual influence surrounding Kanye West. During post-production, I coordinated story development and delivery workflows, ensuring narrative continuity across both theatrical and streaming formats.',
      'Working alongside partners including NB Studios, Silver, Pace, and Deluxe, I helped streamline the final asset pipeline and distribution rollout. The film achieved a nationwide theatrical release on over 1,000 screens, generated more than $1 million at the box office, and was recognized as a Los Angeles Times Top 10 film.',
      'I also supported festival submissions, press strategy, and distribution coordination, helping position the film for wider cultural visibility and critical reception.',
    ],
    vimeoId: '1171401539',
    thumbnail: '/thumbnails/in-whose-name.png',
    coverScale: 1.35,  // Theatrical 2.39:1 ratio — needs extra scale to fill 16:9 frame
  },

  {
    id: 'pepsi-just-don',
    title: 'PEPSI × JUST DON',
    subtitle: 'Commercial Production',
    body: [
      'In partnership with Pepsi and celebrated Chicago designer Just Don, I produced a campaign film through my Chicago-based production company XPOSURE to mark the renewal of football season and celebrate the deep connection between sports and the city of Chicago.',
      'Produced at the end of 2024, the campaign served as a kickoff to the football season, highlighting the energy, fashion, and community that surround Chicago sports culture. The project brought together Pepsi\'s global brand presence with Just Don\'s influential design voice to create a piece that reflected the spirit of the city.',
      'The campaign premiered at a major Pepsi cultural event held at the DuSable Black History Museum and Education Center in Chicago, bringing together leaders from sports, fashion, and culture.',
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
      'In 2023, produced the visual documentation of Chance the Rapper\'s Acid Rap 10 Year Anniversary Tour, celebrating one of the most influential independent hip-hop projects of the 2010s. Originally released in 2013, Acid Rap became a defining mixtape of its era, earning widespread critical acclaim and helping establish Chance as one of the most important voices in independent music.',
      'A decade later, the anniversary tour brought the project back to the stage with sold-out arena performances in Chicago, New York, and Los Angeles, bringing together fans to celebrate the cultural legacy of the mixtape.',
      'Led production for the tour\'s visual coverage, assembling the creative team and overseeing documentation of the live performances. The project captured the scale and energy of the anniversary shows while preserving the historical significance of Acid Rap and its lasting impact on music culture.',
    ],
    vimeoId: '1171402172',
    thumbnail: '/thumbnails/chance.jpg',
  },

  {
    id: 'abel-paul-george',
    title: 'ABEL PAUL GEORGE',
    subtitle: 'Merchandise Commercial Campaign',
    body: [
      'Directed and produced a three-episode episodic commercial campaign for designer Abel Paul George, created in collaboration with Enigma Curation to introduce a limited hoodie release that blended fashion, symbolism, and spiritual visual language.',
      'The campaign was filmed at Serra Retreat, a historic Franciscan monastery in Malibu, whose architecture and quiet mountain setting helped shape the film\'s contemplative visual tone. The location provided a striking backdrop for a narrative-driven fashion campaign that explored themes of faith, identity, and contemporary design.',
      'Structured as a three-part episodic release, the campaign served as the primary commercial rollout for the collaboration. The series gained strong attention online across fashion, creative, and cultural spaces, positioning the project as both a fashion launch and a visual storytelling piece.',
    ],
    vimeoId: '1171404959',
    thumbnail: '/thumbnails/apg.jpg',
  },

  {
    id: 'new-bible-belt',
    title: 'NEW BIBLE BELT',
    subtitle: 'NYFW Activation + Production',
    body: [
      'During New York Fashion Week in September 2024, I helped produce and document the first public activation for New Bible Belt, marking the cohort\'s debut cultural event.',
      'In partnership with Realtree, the activation took the form of a pop-up gathering centered around community, design, and creative exchange. The event brought together artists, designers, and members of the broader cultural community during one of the most influential weeks in fashion.',
      'As part of the activation, the team distributed more than 150 pounds of clothing for free to attendees, reinforcing the project\'s emphasis on generosity, accessibility, and shared culture. The event drew over 300 attendees, establishing New Bible Belt\'s first major presence during New York Fashion Week.',
    ],
    vimeoId: '1171405239',
    thumbnail: '/thumbnails/nbb.jpg',
    link: 'https://newbiblebelt.org',
  },

  // ── New Additions ─────────────────────────────────────────────────────────

  {
    id: 'stars-out',
    title: 'STARS OUT',
    subtitle: 'Chance the Rapper — Music Video',
    body: [
      'Served as cinematographer and editor for Chance the Rapper\'s music video "Stars Out," a single released in 2024 as part of the rollout for his Star Line era. The track presents a confident and celebratory moment for Chance, highlighting his signature lyrical style and larger-than-life presence.',
      'The video was filmed across Atlanta and Chicago, blending nightlife energy with a cinematic portrait of Chance stepping back into the spotlight during a new chapter of his career. The visual emphasizes movement, atmosphere, and performance, pairing dynamic camera work with a polished editorial style to match the celebratory tone of the song.',
      'Through cinematography and editing, the goal was to create a visual language that felt bold and immediate while capturing the personality and momentum surrounding Chance\'s return with new music.',
    ],
    youtubeId: 'ywSYgBVkocM',
    thumbnail: '/thumbnails/stars-out.png',
  },

  {
    id: 'just-a-drop',
    title: 'JUST A DROP',
    subtitle: 'Chance the Rapper — Music Video',
    body: [
      'Served as producer and editor for Chance the Rapper\'s music video "Just a Drop," a key visual release from his album Star Line. The project was part of the album\'s broader visual rollout, which explored themes of resilience, faith, and reflection throughout the record.',
      'Filmed at Vasquez Rocks Natural Area Park outside Los Angeles, the video uses the dramatic desert landscape to establish a futuristic and symbolic visual world. The environment helped create a sci-fi inspired atmosphere, reflecting an idea Chance and I discussed early in development: building a larger visual universe for the Star Line album era.',
      'In addition to producing the video, I played a key role in identifying and securing the location, helping shape the film\'s visual identity through the natural terrain and scale of the setting. The project blends performance, narrative symbolism, and expansive landscapes to support the song\'s themes of social reflection and spiritual resilience.',
    ],
    youtubeId: 'FqofHYrDqMU',
    thumbnail: '/thumbnails/just-a-drop.jpg',
  },

  {
    id: 'yah-know',
    title: 'YAH KNOW',
    subtitle: 'Chance the Rapper — Music Video',
    body: [
      'Served as editor and camera operator on Chance the Rapper\'s "YAH Know," an interdisciplinary art project created in collaboration with visual artist Mia Lee and featuring Ghanaian singer King Promise. The work forms part of Chance\'s broader Star Line artistic rollout, which merges music, film, and visual art into a unified creative body.',
      'The video was filmed across Accra, Chicago, and Los Angeles, reflecting the global themes of the Star Line project and its connection to the African diaspora. The piece blends performance, documentary-style imagery, and fine-art collaboration to create a visual language that sits between music video and gallery installation.',
      '"YAH Know" also served as part of the creative announcement surrounding Chance\'s cultural initiatives connected to Ghana and the diaspora, helping introduce the vision that would culminate in events such as the Black Star Line Festival in Accra, bringing together music, art, and cultural exchange on an international scale.',
    ],
    youtubeId: 'bcZsfqcBiog',
    thumbnail: '/thumbnails/yah-know.png',
  },

  {
    id: 'together',
    title: 'TOGETHER',
    subtitle: 'Chance the Rapper — Music Video',
    body: [
      'Served as editor and lead camera operator for Chance the Rapper\'s music video "Together," a single produced by legendary hip-hop producer DJ Premier as part of the rollout for Chance\'s Star Line project.',
      'The visual blends performance with archival footage and nostalgic imagery, reinforcing the song\'s themes of family, neighborhood unity, and the preservation of community spaces. Through camera work and editorial structure, the project emphasizes the emotional weight of the track while connecting Chance\'s personal story to broader social themes rooted in Chicago.',
    ],
    youtubeId: 'ZVwTX6WP-MM',
    thumbnail: '/thumbnails/together.jpg',
  },

  {
    id: 'bobby',
    title: 'BOBBY',
    subtitle: 'Bobby Beats — Album Trailer',
    body: [
      'Through my Chicago-based production company XPOSURE, I produced an album trailer for Chicago producer Bobby Beats, a rising creative within the city\'s independent hip-hop scene. Bobby Beats has collaborated with artists and collectives across Chicago, including projects connected to Joey Purp and the Forever Band collective.',
      'The trailer was filmed in Lincoln Park, Chicago, using the neighborhood\'s open landscapes and city textures to frame the visual tone of the release. The project served as a short cinematic introduction to the album and Bobby Beats\' evolving sound within Chicago\'s broader music community.',
    ],
    vimeoId: '1171417204',
    thumbnail: '/thumbnails/bobby.png',
  },

  {
    id: '3333',
    title: '3333',
    subtitle: 'Chance the Rapper — Music Video',
    body: [
      'Served as the main camera operator and editor for Chance the Rapper\'s music video "3333," filmed during his performance at the Minnesota State Fair Grandstand. The visual captures a powerful live moment between Chance and his fans, reflecting the resilience and gratitude expressed throughout the song.',
      'The shoot took place while Chance was traveling across the country hosting "Writings on the Wall" listening experiences, marking an important period in the rollout of his Star Line era.',
      'Through handheld camera work and live-performance coverage, the video emphasizes the energy of the crowd and the authenticity of the moment, capturing a key point where Chance re-embraced his fanbase and the community that has supported his music throughout his career.',
    ],
    youtubeId: 'ifRwRfdKrOE',
    thumbnail: '/thumbnails/3333.webp',
  },

  {
    id: 'victor',
    title: 'VICTOR',
    subtitle: 'Roc Nation — Album Trailer',
    body: [
      'Through my Chicago-based production company XPOSURE, I produced the official album trailer for Vic Mensa\'s 2023 album Victor. The project served as the primary visual asset for Roc Nation\'s marketing and promotional rollout surrounding the release.',
      'Filmed in New York City, the trailer features Vic Mensa alongside actor Omari Hardwick, presenting a cinematic introduction to the themes and emotional landscape of the album. The piece was designed to build anticipation for the project while visually framing the narrative direction of Victor.',
      'The trailer was distributed across Roc Nation\'s social platforms and marketing channels, functioning as the central promotional video for the album\'s campaign and helping introduce the record to audiences worldwide.',
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
      'Designed the official concert poster for Chance the Rapper\'s Coloring Book Ten Year Anniversary Tour, celebrating a decade since the release of one of the most critically acclaimed and culturally significant projects in independent hip-hop history.',
      'Originally released in 2016, Coloring Book became the first streaming-only album to win a Grammy Award, and its anniversary tour marked a landmark moment in Chance\'s career. The poster design captures the energy and nostalgia of the tour, drawing on the visual language of the original project while bringing a bold, typographic presence suited for arena-scale promotion.',
      'The design spans the full North American tour dates, from Chicago through coast-to-coast dates including New York, Los Angeles, and beyond.',
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
      'Through my production company XPOSURE, our team produced a commercial campaign for the Chicago Bulls, Mitchell & Ness, and Just Don, celebrating the cultural legacy of basketball in Chicago. The film supported the Fall 2024 collection of collaborative hats and merchandise released by the brands.',
      'Shot in Chicago, the campaign centered around the childlike spirit and imagination that basketball inspires throughout the city — capturing the way the Chicago Bulls have shaped generations of fans, athletes, and dreamers. The visual narrative highlighted the emotional connection between the team and the community, portraying basketball not only as a sport but as a cultural force embedded in the identity of Chicago.',
      'The project served as a storytelling-driven commercial piece that brought together sport, fashion, and community, reflecting the enduring influence of the Bulls across the city\'s streets, playgrounds, and neighborhoods.',
    ],
    vimeoId: '1171416564',
    thumbnail: '/thumbnails/chicago-bulls.png',
  },

  // ── STAR LINE Music Videos & Performances (YouTube) ─────────────────────────

  {
    id: 'buried-alive',
    title: 'BURIED ALIVE',
    subtitle: 'Chance the Rapper — Music Video',
    body: [
      '"Buried Alive" is an official music video from Chance the Rapper\'s 2024 Star Line project, leaning into themes of pressure, perseverance, and renewal that run throughout the record.',
      'I served as lead producer on the video, overseeing the production from planning through final delivery.',
    ],
    youtubeId: '8BjfkpgbAEY',
    thumbnail: '/thumbnails/buried-alive-armor.jpg',
  },

  {
    id: 'bad-boys-2',
    title: 'BAD BOYS 2',
    subtitle: 'Chance the Rapper ft. Joey Purp — Music Video',
    body: [
      '"Bad Boys 2," featuring fellow Chicago artist Joey Purp, is an official music video released as part of Chance the Rapper\'s 2024 Star Line project. The collaboration reflects the Chicago roots and creative community at the heart of the album.',
      'I served as lead producer on the video, leading crew coordination and location scouting, and also handling editing on the final cut.',
    ],
    youtubeId: '_uFMbBVPPWg',
    thumbnail: '/thumbnails/bad-boys-2.jpg',
  },

  {
    id: 'highs-and-lows',
    title: 'THE HIGHS & THE LOWS',
    subtitle: 'Chance the Rapper ft. Joey Bada$$ — Music Video',
    body: [
      '"The Highs & The Lows," featuring Joey Bada$$, is an official music video from the Star Line project, pairing two of independent hip-hop\'s most distinctive voices. The track explores resilience and reflection through the highs and lows of the artistic journey.',
      'I served as editor on the video, shaping the final cut and its visual rhythm.',
    ],
    youtubeId: 'uCEv2NMr46E',
    thumbnail: '/thumbnails/highs-and-lows-mv.jpg',
  },

  {
    id: 'together-live',
    title: 'TOGETHER',
    titleLine2: 'LIVE PERFORMANCE',
    subtitle: 'Chance the Rapper — Live Performance',
    body: [
      'A live performance of "Together," the DJ Premier–produced single from Chance the Rapper\'s Star Line project. The performance captures the song\'s themes of family, unity, and community in a live setting.',
      'I served as lead producer on the performance video, overseeing the production of the shoot through its final delivery.',
    ],
    youtubeId: 'bSYYrydVXBs',
    thumbnail: '/thumbnails/together-live.jpg',
  },

  {
    id: 'hip-hop-nation',
    title: 'HIP HOP NATION',
    titleLine2: 'LIVE FROM NEW YORK',
    subtitle: 'Chance the Rapper — Virtual Concert (SiriusXM)',
    body: [
      'A virtual concert performance for SiriusXM\'s Hip Hop Nation, filmed live from New York. The set brought Chance the Rapper\'s music to a broadcast and streaming audience through an intimate, performance-focused presentation.',
      'I worked as a camera operator and editor on the performance, helping capture the live set and assemble the final edit.',
    ],
    youtubeId: 'zvVkUPhocEw',
    thumbnail: '/thumbnails/hip-hop-nation.jpg',
  },

  {
    id: 'black-star-line-festival',
    title: 'BLACK STAR LINE',
    titleLine2: 'FESTIVAL — ACCRA',
    subtitle: 'Festival Documentation',
    body: [
      'Exclusive footage from the first Black Star Line Festival, the landmark cultural event in Accra, Ghana that brought together music, art, and the African diaspora on an international stage. The festival grew out of the broader vision connecting Chance the Rapper\'s creative work to Ghana and the diaspora.',
      'I served as the on-site producer in Accra, bringing on an entire crew of Ghanaian filmmakers to document the festival. We covered the full week of events, including a discussion between Chance the Rapper and Dave Chappelle at the University of Ghana.',
    ],
    youtubeId: 'cXmS3nC1WVU',
    thumbnail: '/thumbnails/black-star-line-fest-boat.jpg',
  },

  {
    id: 'same-drugs-doc',
    title: 'SAME DRUGS',
    titleLine2: '10 YEAR DOCUMENTARY',
    subtitle: 'Chance the Rapper — Documentary',
    body: [
      'A documentary marking ten years of "Same Drugs," one of the most beloved songs from Chance the Rapper\'s catalog. The film reflects on the decade since the track\'s release and its lasting place in his body of work and in the lives of listeners.',
      'The documentary features live concert footage that I directed and produced from Chance\'s previous arena shows, woven into the retrospective.',
    ],
    youtubeId: '7JEDHWBd3WI',
    thumbnail: '/thumbnails/same-drugs-10yr.jpg',
  },

  {
    id: 'donda-sessions',
    title: 'THE DONDA SESSIONS',
    titleLine2: 'eTV — EPISODE 2',
    subtitle: 'Enigma — Episodic Series',
    body: [
      '"The Donda Sessions" is the second episode of eTV, an episodic series produced through Enigma offering a behind-the-scenes look at a defining creative moment. The episode documents the people, process, and atmosphere surrounding the sessions.',
      'I worked as a camera operator and editor on the episode, helping capture the sessions and assemble the final cut.',
    ],
    youtubeId: 'jVRz5KWyqcA',
    thumbnail: '/thumbnails/donda-sessions.jpg',
  },

  // ── Design & Art Direction ──────────────────────────────────────────────────

  {
    id: 'black-star-line-poster',
    title: 'BLACK STAR LINE',
    titleLine2: 'FESTIVAL — POSTER DESIGN',
    subtitle: 'Poster Design · Creative Direction · Art Direction',
    body: [
      'Designed the official poster for the first Black Star Line Festival, the landmark free concert held in Accra, Ghana, headlined by Chance the Rapper and Vic Mensa alongside Erykah Badu, T-Pain, Jeremih, Sarkodie, Tobe Nwigwe, M.anifest, the Asakaa Boys, and more.',
      'I led the creative direction and art direction for the poster, building a bold, typographic identity around the festival\'s Black Star symbolism and its mission of connecting the African diaspora through music, art, and culture.',
    ],
    thumbnail: '/thumbnails/bslf-poster-full.jpg',
    cardImage: '/thumbnails/bslf-poster-card.jpg',  // Full poster centered on its yellow ground so no text is cropped
    posterAspect: '1200 / 1500',
    posterMaxWidth: 520,
  },

  {
    id: 'grammys-fyc-campaign',
    title: 'STAR LINE',
    titleLine2: 'GRAMMYs — FOR YOUR CONSIDERATION',
    subtitle: 'Billboard Design · Creative Direction',
    body: [
      'Created the billboard campaign for Chance the Rapper\'s "For Your Consideration" GRAMMYs push behind his 2025 album Star Line, designing the out-of-home creative that carried the album into awards season.',
      'The four-year consideration campaign placed billboards across Nashville, Chicago, New York, and Los Angeles, bringing the Star Line visual world — and its Album of the Year case — to audiences in each city.',
    ],
    thumbnail: '/thumbnails/grammys-fyc.jpg',
    posterAspect: '2200 / 1229',
    posterMaxWidth: 900,
  },

  {
    id: 'yeezy-stem-player',
    title: 'YEEZY STEM PLAYER',
    titleLine2: 'POP-UP ACTIVATION — 3D DESIGN + CONCEPT',
    subtitle: '3D Design · Concept Development · Activation Design',
    body: [
      'Served as one of the lead developers on the design and concept development for the Yeezy Stem Player pop-up activations in 2022, the immersive retail experiences built around Kanye West\'s Stem Player music device.',
      'My work spanned 3D product renders, spatial concept development, and the design of the activation environments — translating the Stem Player\'s circular, tactile form into a cohesive physical and visual language for the pop-up spaces.',
      'The concept centered on a cruciform spatial layout, with sculptural booth structures and a controlled lighting program that echoed the device\'s glowing interface. The renders and concept studies guided how visitors would move through, interact with, and experience the Stem Player in person.',
    ],
    thumbnail: '/yeezy/stem-spatial-concept.jpg',
    posterAspect: '16 / 9',
    posterMaxWidth: 900,
    gallery: [
      '/yeezy/01-product.jpg',
      '/yeezy/02-in-hand.jpg',
      '/yeezy/03-concept-sketch.jpg',
      '/yeezy/04-booth-render.jpg',
      '/yeezy/05-booth-interior.jpg',
      '/yeezy/06-activation.jpg',
      '/yeezy/07-event.jpg',
      '/yeezy/08-spatial-concept.jpg',
    ],
  },
]
