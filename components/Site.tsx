'use client'

import { useState } from 'react'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { projects } from '@/data/projects'
import HomePage from './HomePage'
import ProjectDetail from './ProjectDetail'
import AboutPage from './AboutPage'

export default function Site() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [aboutOpen, setAboutOpen] = useState(false)

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null

  return (
    <LayoutGroup>
      <HomePage
        projects={projects}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onAbout={() => setAboutOpen(true)}
      />

      {/* Project detail overlay */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      {/* About page overlay */}
      <AnimatePresence mode="wait">
        {aboutOpen && (
          <AboutPage
            key="about"
            onClose={() => setAboutOpen(false)}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}
