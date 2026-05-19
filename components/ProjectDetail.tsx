'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

/* Left column stagger */
const leftVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.28 } },
  exit:    { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

/* Right column stagger — starts slightly after left */
const rightVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.38 } },
  exit:    { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const lineVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' as const } },
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    /* Full-screen overlay — unchanged */
    <motion.div
      key={project.id}
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
      }}
    >
      {/* Back button — unchanged */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
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

      {/* ── Page content ── */}
      <div
        className="detail-page-wrap"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '80px 64px 100px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >

        {/* ══════════════════════════════════════
            VIDEO — full content-width, top anchor
            layoutId shared with homepage card
            ══════════════════════════════════════ */}
        <motion.div
          layoutId={`card-${project.id}`}
          className="detail-video"
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            aspectRatio: '16/10',
            position: 'relative',
            background: '#000',
            width: '100%',
            boxShadow: [
              '0 0 0 1px rgba(12,35,64,0.05)',
              '0 4px 24px rgba(12,35,64,0.10)',
              '0 20px 60px rgba(12,35,64,0.18)',
              '0 48px 120px rgba(12,35,64,0.13)',
            ].join(', '),
            willChange: 'transform',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 28 }}
        >
          {/*
            Cover technique: container + source iframe scaled to fill.
            Default scale(1.112) handles 16:9 source in 16:10 container.
            project.coverScale overrides for non-standard ratios
            (e.g. theatrical 2.39:1 needs scale(1.5) to fill 16:10 frame).
          */}
          {project.vimeoId ? (
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0&color=0C2340&autoplay=1&muted=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                border: 'none',
                transform: `scale(${project.coverScale ?? 1.112})`,
                transformOrigin: 'center center',
              }}
              title={project.title}
            />
          ) : project.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&color=white&autoplay=1&mute=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                border: 'none',
                transform: `scale(${project.coverScale ?? 1.112})`,
                transformOrigin: 'center center',
              }}
              title={project.title}
            />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              style={{ objectFit: 'contain' }}
              sizes="1200px"
              priority
            />
          )}
        </motion.div>

        {/* ══════════════════════════════════════
            TEXT ROW — two columns below video
            Left:  subtitle + title
            Right: body copy
            ══════════════════════════════════════ */}
        <div className="detail-text-row">

          {/* ── LEFT: category label + title ── */}
          <motion.div
            className="detail-text-left"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.p variants={lineVariant} style={styles.subtitleLabel}>
              {project.subtitle}
            </motion.p>

            <motion.h1 variants={lineVariant} style={styles.title}>
              {project.title}
            </motion.h1>

            {project.titleLine2 && (
              <motion.p variants={lineVariant} style={styles.titleLine2}>
                {project.titleLine2}
              </motion.p>
            )}

            {project.link && (
              <motion.div variants={lineVariant} style={{ marginTop: 32 }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.opacity = '1'
                    el.style.letterSpacing = '0.14em'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.opacity = '0.6'
                    el.style.letterSpacing = '0.10em'
                  }}
                >
                  Visit Site
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    style={{ marginLeft: 7, display: 'inline-block' }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </motion.div>
            )}
          </motion.div>

          {/* ── RIGHT: body copy ── */}
          <motion.div
            className="detail-text-right"
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {project.body.slice(0, 4).map((paragraph, i) => (
              <motion.p key={i} variants={lineVariant} style={styles.bodyText}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

        </div>
      </div>

      <style>{`
        /* ── Desktop: two-column text row ── */
        .detail-text-row {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 80px;
          padding-top: 52px;
          align-items: start;
        }

        /* ── Tablet: stack title above body ── */
        @media (max-width: 900px) {
          .detail-text-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .detail-page-wrap {
            padding: 72px 48px 80px !important;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .detail-page-wrap {
            padding: 64px 24px 64px !important;
          }
          .detail-text-row {
            gap: 24px !important;
            padding-top: 36px !important;
          }
        }
      `}</style>
    </motion.div>
  )
}

const styles = {
  subtitleLabel: {
    fontFamily: 'var(--font-inter)',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: 'rgba(12,35,64,0.65)',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'var(--font-cormorant)',
    fontSize: 'clamp(34px, 3.8vw, 58px)',
    fontWeight: 400,
    letterSpacing: '0.02em',
    color: '#0C2340',
    lineHeight: 1.05,
  },
  titleLine2: {
    fontFamily: 'var(--font-cormorant)',
    fontSize: 'clamp(16px, 2.2vw, 26px)',
    fontWeight: 300,
    letterSpacing: '0.04em',
    color: '#0C2340',
    marginTop: 6,
    lineHeight: 1.2,
  },
  bodyText: {
    fontFamily: 'var(--font-inter)',
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.88,
    color: '#0C2340',
    marginBottom: 18,
  },
  link: {
    fontFamily: 'var(--font-inter)',
    fontSize: 11,
    fontWeight: 400,
    letterSpacing: '0.10em',
    textTransform: 'uppercase' as const,
    color: '#0C2340',
    textDecoration: 'none',
    opacity: 0.6,
    transition: 'opacity 0.2s, letter-spacing 0.3s',
    display: 'inline-flex' as const,
    alignItems: 'center',
  },
}
