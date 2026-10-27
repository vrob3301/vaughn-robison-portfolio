'use client'

import { usePathname, useRouter } from 'next/navigation'
import { LayoutGroup, MotionConfig } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { projects } from '@/data/projects'
import HomePage from './HomePage'
import ProjectDetail from './ProjectDetail'
import AboutPage from './AboutPage'
import PublicationsPage from './PublicationsPage'

export default function Site() {
  const pathname = usePathname()
  const router = useRouter()
  const selectedProject = projects.find(project => pathname === `/work/${project.id}`) ?? null
  const selectedId = selectedProject?.id ?? null
  const aboutOpen = pathname === '/about'
  const publicationsOpen = pathname === '/publications'
  const close = () => router.push('/', { scroll: false })
  const overlayOpen = !!selectedProject || aboutOpen || publicationsOpen
  const overlay = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!overlayOpen) return
    const previous = document.activeElement as HTMLElement | null
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(() => overlay.current?.querySelector<HTMLElement>('button, a[href]')?.focus())
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); router.push('/', {scroll:false}) }
      if (event.key !== 'Tab') return
      const items = Array.from(overlay.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], iframe, [tabindex="0"]') || []).filter(item => item.getClientRects().length)
      const first=items[0],last=items[items.length-1]
      if (event.shiftKey && document.activeElement===first) {event.preventDefault();last?.focus()}
      if (!event.shiftKey && document.activeElement===last) {event.preventDefault();first?.focus()}
    }
    document.addEventListener('keydown',keyboard)
    return () => {cancelAnimationFrame(frame);document.removeEventListener('keydown',keyboard);document.body.style.overflow=oldOverflow;requestAnimationFrame(() => { if(previous?.isConnected && !previous.closest("[inert]")) previous.focus(); else document.querySelector<HTMLButtonElement>(".menu-trigger")?.focus() })}
  },[overlayOpen,pathname,router])

  if (pathname !== '/' && !selectedProject && !aboutOpen && !publicationsOpen) return null

  return (
    <MotionConfig reducedMotion="user"><LayoutGroup>
      <div inert={overlayOpen || undefined}>
      <HomePage
        projects={projects}
        selectedId={selectedId}
        onSelect={id => router.push(`/work/${id}`, { scroll: false })}
        onAbout={() => router.push('/about', { scroll: false })}
        onPublications={() => router.push('/publications', { scroll: false })}
      />
      </div>
      <div ref={overlay} role={overlayOpen ? 'dialog' : undefined} aria-modal={overlayOpen || undefined} aria-label={overlayOpen ? (selectedProject?.title || (aboutOpen ? 'About Vaughn Robison' : 'Publications')) : undefined}>

      {/* Project detail overlay */}
        {selectedProject && (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onClose={close}
          />
        )}

      {/* About page overlay */}
        {aboutOpen && (
          <AboutPage
            key="about"
            onClose={close}
          />
        )}

      {/* Publications page overlay */}
        {publicationsOpen && (
          <PublicationsPage
            key="publications"
            onClose={close}
          />
        )}
      </div>
    </LayoutGroup></MotionConfig>
  )
}
