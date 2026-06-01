'use client'

import { motion } from 'framer-motion'
import { publications } from '@/data/publications'

interface PublicationsPageProps {
  onClose: () => void
}

/* Stagger the article list */
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function PublicationsPage({ onClose }: PublicationsPageProps) {
  return (
    <motion.div
      key="publications"
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
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      {/* ── Back button ── matches ProjectDetail / AboutPage exactly */}
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
          padding: 'clamp(72px, calc(50vh - 210px), 160px) 64px 100px',
        }}
      >
        <div className="pub-wrap">

          {/* Header: identity label + title */}
          <div className="pub-header">
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(12,35,64,0.55)',
              margin: '0 0 18px',
            }}>
              Press &amp; Features
            </p>
            <h1 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(46px, 8vw, 76px)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: '#0C2340',
              margin: 0,
            }}>
              PUBLICATIONS
            </h1>
          </div>

          {/* Article list */}
          <motion.div
            className="pub-right"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {publications.map((pub) => (
              <motion.a
                key={pub.url}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariant}
                className="pub-item"
              >
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(12,35,64,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  {pub.outlet}
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(12,35,64,0.35)' }} />
                  {pub.date}
                </span>

                <h2 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(24px, 2.6vw, 34px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '0.01em',
                  color: '#0C2340',
                  margin: '12px 0 0',
                  display: 'inline-flex',
                  alignItems: 'flex-start',
                  gap: 10,
                }}>
                  {pub.title}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    style={{ flexShrink: 0, marginTop: 8, opacity: 0.55 }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </h2>

                {pub.excerpt && (
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: 'rgba(12,35,64,0.78)',
                    margin: '14px 0 0',
                  }}>
                    {pub.excerpt}
                  </p>
                )}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── Responsive styles ── */}
      <style>{`
        .pub-wrap {
          display: flex;
          flex-direction: column;
        }
        .pub-header {
          margin-bottom: 72px;
        }
        .pub-right {
          max-width: 760px;
          display: flex;
          flex-direction: column;
          gap: 44px;
        }
        .pub-item {
          display: block;
          text-decoration: none;
          padding-bottom: 44px;
          border-bottom: 1px solid rgba(12,35,64,0.12);
          transition: opacity 0.2s ease;
        }
        .pub-right .pub-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .pub-item:hover {
          opacity: 0.62;
        }
        @media (max-width: 900px) {
          .pub-header {
            margin-bottom: 48px !important;
          }
          .pub-right {
            max-width: 100% !important;
          }
        }
      `}</style>
    </motion.div>
  )
}
