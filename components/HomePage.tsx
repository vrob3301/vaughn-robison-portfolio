'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/data/projects'
import ProjectCard from './ProjectCard'

interface HomePageProps {
  projects: Project[]
  selectedId: string | null
  onSelect: (id: string) => void
  onAbout: () => void
  onPublications: () => void
}

const NAV_ITEMS = [
  { label: 'About', href: '#' },
  { label: 'Publications', href: '#' },
  { label: 'Inquiries', href: 'mailto:info@vaughn-robison.com' },
]

/* Stagger container */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function HomePage({ projects, selectedId, onSelect, onAbout, onPublications }: HomePageProps) {
  /* Extra STAR LINE videos stay hidden until the viewer expands the gallery */
  const [expanded, setExpanded] = useState(false)
  /* Map all 13 project ids */
  const inWhoseName  = projects.find((p) => p.id === 'in-whose-name')!
  const pepsi        = projects.find((p) => p.id === 'pepsi-just-don')!
  const chance       = projects.find((p) => p.id === 'chance-the-rapper')!
  const apg          = projects.find((p) => p.id === 'abel-paul-george')!
  const nbb          = projects.find((p) => p.id === 'new-bible-belt')!
  const starsOut     = projects.find((p) => p.id === 'stars-out')!
  const justADrop    = projects.find((p) => p.id === 'just-a-drop')!
  const yahKnow      = projects.find((p) => p.id === 'yah-know')!
  const together     = projects.find((p) => p.id === 'together')!
  const bobby        = projects.find((p) => p.id === 'bobby')!
  const p3333        = projects.find((p) => p.id === '3333')!
  const victor       = projects.find((p) => p.id === 'victor')!
  const chicagoBulls      = projects.find((p) => p.id === 'chicago-bulls-just-don')!
  const coloringBookPoster = projects.find((p) => p.id === 'coloring-book-poster')!
  /* STAR LINE YouTube additions */
  const buriedAlive    = projects.find((p) => p.id === 'buried-alive')!
  const badBoys2       = projects.find((p) => p.id === 'bad-boys-2')!
  const highsAndLows   = projects.find((p) => p.id === 'highs-and-lows')!
  const togetherLive   = projects.find((p) => p.id === 'together-live')!
  const hipHopNation   = projects.find((p) => p.id === 'hip-hop-nation')!
  const blackStarLine  = projects.find((p) => p.id === 'black-star-line-festival')!
  const sameDrugsDoc   = projects.find((p) => p.id === 'same-drugs-doc')!
  const dondaSessions  = projects.find((p) => p.id === 'donda-sessions')!
  /* Design & art direction works */
  const bslfPoster     = projects.find((p) => p.id === 'black-star-line-poster')!
  const grammysCampaign = projects.find((p) => p.id === 'grammys-fyc-campaign')!
  const yeezy          = projects.find((p) => p.id === 'yeezy-stem-player')!

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: '100vh',
        background: '#f8f8f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 0 80px',
      }}
    >
      {/* ── Top nav bar ── */}
      <motion.nav
        variants={itemVariants}
        className="site-nav"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 48px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vr-mark.svg"
          alt="Vaughn Robison"
          style={{
            height: 26,
            width: 'auto',
            display: 'block',
            flexShrink: 0,
          }}
        />
        <div className="nav-links" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {NAV_ITEMS.map((item) => {
            const sharedStyle: React.CSSProperties = {
              fontFamily: 'var(--font-inter)',
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: '#0C2340',
              textDecoration: 'none',
              opacity: 0.78,
              transition: 'opacity 0.2s',
              cursor: 'pointer',
            }
            if (item.label === 'About' || item.label === 'Publications') {
              return (
                <button
                  key={item.label}
                  onClick={item.label === 'About' ? onAbout : onPublications}
                  style={{ ...sharedStyle, background: 'none', border: 'none', padding: 0 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.78')}
                >
                  {item.label}
                </button>
              )
            }
            return (
              <a
                key={item.label}
                href={item.href}
                style={sharedStyle}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '1')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '0.78')}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </motion.nav>

      {/* ── Main gallery area ── */}
      <div
        className="gallery-wrap"
        style={{
          width: '100%',
          maxWidth: 1280,
          padding: '40px 48px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/*
          5-column salon grid: 1fr 1fr 290px 1fr 1fr
          Row 1: 3333 | NBB | IWN (featured 16:7) | APG | Chicago Bulls
          Row 2: Yeezy | Chance | identity-block | Pepsi | Stars Out
          Row 3: Coloring Book | Just a Drop | [empty] | Victor | Yah Know

          Center column width 290px → IWN height = 290 × 7/16 = 126.9px
          Side 1fr cols at max-width ~201px → card height = 201 × 10/16 = 125.6px
          Rows align naturally without padding offsets.
        */}
        <div
          className="home-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 290px 1fr 1fr',
            gap: 22,
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* ── Row 1 ── */}

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={p3333}
              isSelected={selectedId === p3333.id}
              onSelect={onSelect}
              priority
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={nbb}
              isSelected={selectedId === nbb.id}
              onSelect={onSelect}
              priority
            />
          </motion.div>

          {/* IWN — featured card, center col row 1 */}
          <motion.div variants={itemVariants} className="center-top">
            <ProjectCard
              project={inWhoseName}
              isSelected={selectedId === inWhoseName.id}
              onSelect={onSelect}
              variant="featured"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={apg}
              isSelected={selectedId === apg.id}
              onSelect={onSelect}
              priority
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={chicagoBulls}
              isSelected={selectedId === chicagoBulls.id}
              onSelect={onSelect}
              priority
            />
          </motion.div>

          {/* ── Row 2 ── */}

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={yeezy}
              isSelected={selectedId === yeezy.id}
              onSelect={onSelect}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={chance}
              isSelected={selectedId === chance.id}
              onSelect={onSelect}
            />
          </motion.div>

          {/* Identity block — center col row 2 */}
          <motion.div
            variants={itemVariants}
            className="center-bio"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              alignSelf: 'center',
            }}
          >
            {/* Social row */}
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <SocialIcon href="https://www.linkedin.com/in/vaughn-robison-783ab61b0" label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/vaughn.robison" label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://x.com/vrob330" label="X / Twitter">
                <XIcon />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@V_ROB" label="YouTube">
                <YoutubeIcon />
              </SocialIcon>
              <SocialIcon href="mailto:info@vaughn-robison.com" label="Email">
                <EmailIcon />
              </SocialIcon>
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(22px, 2vw, 30px)',
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: '#0C2340',
                lineHeight: 1.05,
              }}
            >
              Vaughn Robison
            </h1>

            {/* Titles */}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: '0.12em',
                color: 'rgba(12,35,64,0.78)',
                textTransform: 'uppercase' as const,
                marginTop: 10,
                lineHeight: 1.8,
              }}
            >
              Producer · Director · Creative Strategist
            </p>

            {/* Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                marginTop: 14,
                alignItems: 'center',
              }}
            >
              <a
                href="mailto:info@vaughn-robison.com"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 10,
                  fontWeight: 400,
                  color: 'rgba(12,35,64,0.75)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#0C2340')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'rgba(12,35,64,0.75)')
                }
              >
                info@vaughn-robison.com
              </a>
              <a
                href="https://newbiblebelt.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 10,
                  fontWeight: 400,
                  color: 'rgba(12,35,64,0.75)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#0C2340')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'rgba(12,35,64,0.75)')
                }
              >
                newbiblebelt.org
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={pepsi}
              isSelected={selectedId === pepsi.id}
              onSelect={onSelect}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={starsOut}
              isSelected={selectedId === starsOut.id}
              onSelect={onSelect}
            />
          </motion.div>

          {/* ── Row 3 ── */}

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={coloringBookPoster}
              isSelected={selectedId === coloringBookPoster.id}
              onSelect={onSelect}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={justADrop}
              isSelected={selectedId === justADrop.id}
              onSelect={onSelect}
            />
          </motion.div>

          {/* Center column kept clear below the identity block */}
          <div className="grid-spacer" aria-hidden />

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={victor}
              isSelected={selectedId === victor.id}
              onSelect={onSelect}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              project={yahKnow}
              isSelected={selectedId === yahKnow.id}
              onSelect={onSelect}
            />
          </motion.div>
        </div>

        {/* ── Expand control — reveals the additional STAR LINE videos ── */}
        <motion.div variants={itemVariants} className="expand-row">
          <button
            type="button"
            className="expand-toggle"
            onMouseEnter={() => setExpanded(true)}
            onFocus={() => setExpanded(true)}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            <span className="expand-sign">{expanded ? '–' : '+'}</span>
            {expanded ? 'Show less' : 'Expand'}
          </button>
        </motion.div>

        {/* ── Collapsible second grid (rows 4–5) ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="extra-grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden', width: '100%' }}
            >
              <div
                className="home-grid extra-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 290px 1fr 1fr',
                  gap: 22,
                  alignItems: 'center',
                  width: '100%',
                  paddingTop: 22,
                }}
              >
                {/* Row 4 — center column kept open as the identity spine */}
                <ProjectCard project={badBoys2} isSelected={selectedId === badBoys2.id} onSelect={onSelect} />
                <ProjectCard project={buriedAlive} isSelected={selectedId === buriedAlive.id} onSelect={onSelect} />
                <div className="grid-spacer" aria-hidden />
                <ProjectCard project={highsAndLows} isSelected={selectedId === highsAndLows.id} onSelect={onSelect} />
                <ProjectCard project={hipHopNation} isSelected={selectedId === hipHopNation.id} onSelect={onSelect} />

                {/* Row 5 */}
                <ProjectCard project={togetherLive} isSelected={selectedId === togetherLive.id} onSelect={onSelect} />
                <ProjectCard project={sameDrugsDoc} isSelected={selectedId === sameDrugsDoc.id} onSelect={onSelect} />
                <div className="grid-spacer" aria-hidden />
                <ProjectCard project={blackStarLine} isSelected={selectedId === blackStarLine.id} onSelect={onSelect} />
                <ProjectCard project={dondaSessions} isSelected={selectedId === dondaSessions.id} onSelect={onSelect} />

                {/* Row 6 — Together MV + Bobby on the left, design works on the right, center clear */}
                <ProjectCard project={together} isSelected={selectedId === together.id} onSelect={onSelect} />
                <ProjectCard project={bobby} isSelected={selectedId === bobby.id} onSelect={onSelect} />
                <div className="grid-spacer" aria-hidden />
                <ProjectCard project={bslfPoster} isSelected={selectedId === bslfPoster.id} onSelect={onSelect} />
                <ProjectCard project={grammysCampaign} isSelected={selectedId === grammysCampaign.id} onSelect={onSelect} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        /* ── Expand control ── */
        .expand-row {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .expand-toggle {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 4px;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0C2340;
          opacity: 0.6;
          transition: opacity 0.2s ease, letter-spacing 0.3s ease;
        }
        .expand-toggle:hover {
          opacity: 1;
          letter-spacing: 0.18em;
        }
        .expand-sign {
          font-size: 14px;
          line-height: 1;
          font-weight: 300;
          transform: translateY(-0.5px);
        }

        /* ── Responsive: tablet ── */
        @media (max-width: 960px) {
          .home-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          /* Center-column spacer only exists for the 5-col desktop layout */
          .grid-spacer {
            display: none !important;
          }
          .center-top {
            grid-column: 1 / -1;
            order: -2;
          }
          .center-bio {
            grid-column: 1 / -1;
            order: -1;
            align-self: auto !important;
          }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 600px) {
          .site-nav {
            padding: 20px 24px !important;
          }
          .nav-links {
            gap: 20px !important;
          }
          .nav-links a,
          .nav-links button {
            font-size: 10px !important;
            letter-spacing: 0.08em !important;
          }
          .home-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .center-top { grid-column: 1 !important; }
          .center-bio { grid-column: 1 !important; }
          .gallery-wrap {
            padding: 0 24px !important;
          }
        }

        /* ── Very small screens ── */
        @media (max-width: 400px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  )
}

/* ── Small reusable components ── */

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 26,
        height: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(12,35,64,0.68)',
        transition: 'color 0.2s, opacity 0.2s',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = '#0C2340')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = 'rgba(12,35,64,0.68)')
      }
    >
      {children}
    </a>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
