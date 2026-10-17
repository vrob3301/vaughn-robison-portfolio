'use client'

import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
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

  if (pathname !== '/' && !selectedProject && !aboutOpen && !publicationsOpen) return null

  return (
    <LayoutGroup>
      <HomePage
        projects={projects}
        selectedId={selectedId}
        onSelect={id => router.push(`/work/${id}`, { scroll: false })}
        onAbout={() => router.push('/about', { scroll: false })}
        onPublications={() => router.push('/publications', { scroll: false })}
      />

      {/* Project detail overlay */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onClose={close}
          />
        )}
      </AnimatePresence>

      {/* About page overlay */}
      <AnimatePresence mode="wait">
        {aboutOpen && (
          <AboutPage
            key="about"
            onClose={close}
          />
        )}
      </AnimatePresence>

      {/* Publications page overlay */}
      <AnimatePresence mode="wait">
        {publicationsOpen && (
          <PublicationsPage
            key="publications"
            onClose={close}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}
