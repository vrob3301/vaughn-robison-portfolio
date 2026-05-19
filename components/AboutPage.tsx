'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  color: '#0C2340',
  margin: 0,
}

function OverviewContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <p style={bodyStyle}>
        Vaughn Robison is a film producer and creative director whose work spans film, live events,
        and music. His projects explore the intersection of culture, storytelling, and community,
        bringing together artists, audiences, and institutions through shared creative experiences.
      </p>
      <p style={bodyStyle}>
        In recent years, Vaughn has worked closely with Chance the Rapper, producing music videos
        and contributing creatively to tours and cultural events. His work includes contributions to
        projects such as the Black Star Line Festival in Ghana and the Acid Rap 10-Year Anniversary
        Tour, as well as producing In Whose Name, a theatrical documentary exploring the cultural
        and spiritual influence surrounding Kanye West.
      </p>
      <p style={bodyStyle}>
        Across film, music, and live production, Vaughn&rsquo;s work seeks to create moments that
        resonate beyond the screen. His approach emphasizes collaboration, cultural storytelling,
        and the belief that creative work can serve as a force that brings people together.
      </p>
    </div>
  )
}

function EducationContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <p style={bodyStyle}>
        Vaughn Robison was born in Akron, Ohio and raised in Cincinnati, at the heart of Midwestern
        culture. From an early age he showed a curiosity for entrepreneurship, innovation, and
        storytelling, interests that gradually developed into a passion for filmmaking and the
        creative arts.
      </p>
      <p style={bodyStyle}>
        In 2017, Vaughn launched his YouTube channel VRob, where he began speaking about subjects
        that interested him, including culture, sports, filmmaking, education, and religion.
      </p>
      <p style={bodyStyle}>
        In 2020 he enrolled at Xavier University through the Digital Innovation, Film, and
        Television (DIFT) program. During his time there he was selected for Xavier&rsquo;s
        Community Engaged Fellowship, a program focused on connecting creative work with service
        and civic impact.
      </p>
      <p style={bodyStyle}>
        At the end of 2021, after a year and a half of study, Vaughn chose to leave the university
        to pursue his creative career in Chicago. The decision marked a turning point in his path,
        prioritizing real-world experience and collaboration as his primary education &mdash; a
        philosophy he describes simply as pursuing exposure as the highest form of learning.
      </p>
    </div>
  )
}

function FaithContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <p style={bodyStyle}>
        Vaughn&rsquo;s Catholic faith is the foundation of his life and work. For him, faith
        provides the root from which creative work grows, shaping both the purpose behind his
        projects and the way he approaches collaboration, service, and culture.
      </p>
      <p style={bodyStyle}>
        He often describes the relationship simply: faith is the root, and the work is the branch
        that grows from it.
      </p>
      <p style={bodyStyle}>
        A prayer that has guided his life and work is the Prayer of Saint Francis of Assisi:
      </p>

      {/* Prayer stanzas */}
      <div style={{
        paddingLeft: 24,
        borderLeft: '1.5px solid rgba(12,35,64,0.2)',
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
          color: '#0C2340',
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
          padding: 'clamp(72px, calc(50vh - 210px), 160px) 64px 100px',
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
                  color: '#0C2340',
                  border: `1px solid ${isActive ? '#0C2340' : 'rgba(12,35,64,0.28)'}`,
                  borderRadius: 999,
                  padding: '10px 24px',
                  background: isActive ? 'rgba(12,35,64,0.07)' : 'transparent',
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
              color: 'rgba(12,35,64,0.55)',
              margin: '0 0 18px',
            }}>
              Vaughn Robison / V-Rob
            </p>
            <h1 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 76,
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: '#0C2340',
              margin: 0,
            }}>
              ABOUT
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
