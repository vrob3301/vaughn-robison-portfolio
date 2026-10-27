'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profileUrls } from '@/lib/seo'

type Section = 'overview' | 'education' | 'faith'

const SECTIONS: { id: Section; label: string }[] = [
  { id: 'overview',  label: 'Overview & Career' },
  { id: 'education', label: 'Early Life & Education' },
  { id: 'faith',     label: 'Personal Faith & Foundation' },
]

/* ── Section body components ──────────────────────────────── */

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  fontSize: 15,
  lineHeight: 1.8,
  color: '#4A3226',
  margin: 0,
}

function OverviewContent() {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
    <p style={bodyStyle}>Film, design, and live experiences that give people something to gather around, think through, and carry forward.</p>
    <p style={bodyStyle}>Producer and creative director working with artists, brands, and public institutions. Projects range from Chance the Rapper’s music and live experiences to In Whose Name? and Bearing Witness: Cincinnati, a documentary about families affected by violence and the advocates who stand beside them.</p>
    <p style={bodyStyle}>Build teams around a creative idea, shape the work, and carry it through to an audience.</p>
    <nav className="profile-links" aria-label="Vaughn’s profiles">{profileUrls.map((url,index) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${['LinkedIn','Instagram','X','YouTube','IMDb'][index]}, opens in a new tab`}><span aria-hidden="true">{[<LinkedInIcon key="li"/>,<InstagramIcon key="ig"/>,<XIcon key="x"/>,<YoutubeIcon key="yt"/>,<span key="imdb" className="imdb-icon"/>][index]}</span></a>)}</nav>
  </div>
}

function EducationContent() {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
    <p style={bodyStyle}>Explored culture, sports, film, and faith through the VRob YouTube channel. Studied Digital Innovation, Film, and Television at Xavier University and joined the Community Engaged Fellowship.</p>
    <p style={bodyStyle}>Learn through direct experience: work alongside people, take responsibility, and stay open to what each project can teach.</p>
  </div>
}

function FaithContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <p style={bodyStyle}>Catholic faith grounds the work in a responsibility to listen carefully, serve generously, and treat people with dignity.</p>
      <p style={bodyStyle}>The Prayer of Saint Francis guides life and work.</p>

      {/* Prayer stanzas */}
      <div style={{
        paddingLeft: 24,
        borderLeft: '1.5px solid rgba(74,50,38,0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 4,
      }}>
        <p style={{ ...bodyStyle, fontStyle: 'italic', lineHeight: 2 }}>
          Lord, make me an instrument of your peace.<br />
          Where there is hatred, let me sow love;<br />
          where there is injury, pardon;<br />
          where there is doubt, faith;<br />
          where there is despair, hope;<br />
          where there is darkness, light;<br />
          and where there is sadness, joy.
        </p>
        <p style={{ ...bodyStyle, fontStyle: 'italic', lineHeight: 2 }}>
          O Divine Master,<br />
          grant that I may not so much seek<br />
          to be consoled as to console,<br />
          to be understood as to understand,<br />
          to be loved as to love.
        </p>
        <p style={{ ...bodyStyle, fontStyle: 'italic', lineHeight: 2 }}>
          For it is in giving that we receive,<br />
          it is in pardoning that we are pardoned,<br />
          and it is in dying that we are born to eternal life.
        </p>
      </div>
    </div>
  )
}

const CONTENT: Record<Section, React.ReactNode> = {
  overview:  <OverviewContent />,
  education: <EducationContent />,
  faith:     <FaithContent />,
}

/* ── Component ──────────────────────────────────────────────── */

interface AboutPageProps {
  onClose: () => void
}

export default function AboutPage({ onClose }: AboutPageProps) {
  const [activeSection, setActiveSection] = useState<Section>('overview')

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#f8f8f6',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',   // anchors top — content grows down, never shifts up
        justifyContent: 'center',
      }}
    >
      {/* ── Monogram ── top-left, returns to portfolio */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        onClick={onClose}
        aria-label="Back to portfolio"
        style={{
          position: 'fixed',
          top: 26,
          left: 40,
          zIndex: 200,
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          lineHeight: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/vr-monogram-vector.svg" alt="Vaughn Robison" style={{ height: 26, width: 'auto', display: 'block' }} />
      </motion.button>

      {/* ── Back button ── matches ProjectDetail style exactly */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        onClick={onClose}
        aria-label="Back to portfolio"
        style={{
          position: 'fixed',
          top: 28,
          right: 40,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '6px 0',
          color: '#4A3226',
          opacity: 0.6,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.6')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        <span style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
        }}>
          Back
        </span>
      </motion.button>

      {/* ── Page body ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 1280,
          width: '100%',
          // clamp: min 72px → centers Overview at ~480px viewport → caps at 160px on tall screens
          padding: 'clamp(72px, calc(50vh - 210px), 160px) clamp(24px, 8vw, 64px) 100px',
        }}
      >
        {/* ── Section tab pills ── */}
        <div
          className="about-tabs"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 14,
            marginBottom: 88,
            flexWrap: 'wrap',
          }}
        >
          {SECTIONS.map((s) => {
            const isActive = activeSection === s.id
            return (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: '#4A3226',
                  border: `1px solid ${isActive ? '#4A3226' : 'rgba(74,50,38,0.28)'}`,
                  borderRadius: 999,
                  padding: '10px 24px',
                  minHeight: 44,
                  background: isActive ? 'rgba(74,50,38,0.07)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background 0.18s ease, border-color 0.18s ease, opacity 0.18s ease',
                  opacity: isActive ? 1 : 0.65,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.opacity = '0.65'
                }}
              >
                {s.label}
              </button>
            )
          })}
        </div>

        {/* ── Two-column editorial layout ── */}
        <div className="about-content-grid">

          {/* Left: identity label + title */}
          <div className="about-left">
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(74,50,38,0.55)',
              margin: '0 0 18px',
            }}>
              Vaughn Robison / V-Rob
            </p>
            <h1 className="about-title" style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 76,
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: '#4A3226',
              margin: 0,
            }}>
              ABOUT <img className="tau-icon" src="/brands/direct/tau.svg" width="24" height="28" alt="" aria-hidden="true" draggable="false"/>
            </h1>
          </div>

          {/* Right: animated body copy */}
          <div className="about-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                {CONTENT[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </motion.div>

      {/* ── Responsive styles ── */}
      <style>{`
        .about-content-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0 80px;
          align-items: start;
        }
        .about-right {
          max-width: 620px;
        }
        @media (max-width: 900px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 40px 0 !important;
          }
          .about-right {
            max-width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          .about-tabs {
            gap: 10px !important;
          }
        }
      `}</style>
    </motion.div>
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
