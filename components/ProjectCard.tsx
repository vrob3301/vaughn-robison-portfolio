'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  isSelected: boolean
  onSelect: (id: string) => void
  variant?: 'featured' | 'standard'
  priority?: boolean
}

export default function ProjectCard({
  project,
  isSelected,
  onSelect,
  variant = 'standard',
  priority = false,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const handleHoverStart = () => {
    setHovered(true)
    // Only lazy-load video preview for Vimeo projects
    if (!videoLoaded && project.vimeoId) setVideoLoaded(true)
  }

  const handleHoverEnd = () => {
    setHovered(false)
  }

  return (
    /* Outer wrapper: becomes invisible when this card is the selected one */
    <div
      className="w-full"
      style={{
        opacity: isSelected ? 0 : 1,
        transition: 'opacity 0.2s ease',
        pointerEvents: isSelected ? 'none' : 'auto',
      }}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative cursor-pointer overflow-hidden"
        style={{
          borderRadius: 16,
          aspectRatio: variant === 'featured' ? '16/7' : '16/10',
          background: '#000',
          willChange: 'transform',
        }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={() => onSelect(project.id)}
        animate={{
          scale: hovered ? 1.025 : 1,
          boxShadow: hovered
            ? '0 0 0 1px rgba(12,35,64,0.07), 0 20px 60px rgba(12,35,64,0.18), 0 0 80px rgba(12,35,64,0.08)'
            : '0 0 0 1px rgba(12,35,64,0.06), 0 8px 32px rgba(12,35,64,0.10), 0 0 40px rgba(12,35,64,0.04)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 280, damping: 28 },
          boxShadow: { duration: 0.35, ease: 'easeOut' },
        }}
      >
        {/* Thumbnail */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered && videoReady ? 0 : 1 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <Image
            src={project.cardImage ?? project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            style={{
              objectPosition: project.thumbnailPosition ?? 'center',
              transform: project.thumbnailScale ? `scale(${project.thumbnailScale})` : undefined,
              transformOrigin: 'top center',
            }}
            sizes={variant === 'featured' ? '600px' : '360px'}
            priority={priority || variant === 'featured'}
          />
        </motion.div>

        {/* Vimeo silent hover preview — Vimeo projects only.
            pointerEvents: 'none' on both wrapper and iframe ensures the card's
            onClick always fires regardless of media provider. Navigation is
            driven by the card layer, never by the embedded player. */}
        {videoLoaded && project.vimeoId && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered && videoReady ? 1 : 0 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            style={{ pointerEvents: 'none' }}
          >
            {/*
              Cover technique: scale pushes letterbox bars outside
              overflow:hidden clip. 16:10 → scale(10/9), 16:7 → scale(9/7)
            */}
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?background=1&autoplay=1&loop=1&muted=1&controls=0&byline=0&title=0&portrait=0`}
              allow="autoplay; fullscreen"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                transform: `scale(${variant === 'featured' ? 1.286 : 1.112})`,
                transformOrigin: 'center center',
                pointerEvents: 'none',
              }}
              onLoad={() => {
                setTimeout(() => setVideoReady(true), 600)
              }}
            />
          </motion.div>
        )}

      </motion.div>
    </div>
  )
}
