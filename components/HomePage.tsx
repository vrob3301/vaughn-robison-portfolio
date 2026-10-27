'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Project } from '@/data/projects'
import { projectImageAlt } from '@/lib/seo'
import order from '@/data/project-order.json'
import BrandCarousel from './BrandCarousel'

interface Props {
  projects: Project[]
  selectedId: string | null
  onSelect: (id: string) => void
  onAbout: () => void
  onPublications: () => void
}

export default function HomePage({ projects }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const identity = useRef<HTMLHeadingElement>(null)
  const [nameWidth, setNameWidth] = useState<number>()
  useEffect(() => {
    const name = identity.current
    if (!name) return
    const measure = () => setNameWidth(name.getBoundingClientRect().width)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(name)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!menuOpen) return
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); trigger.current?.focus() }
    }
    const outside = (event: PointerEvent) => {
      if (!menu.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', key)
    document.addEventListener('pointerdown', outside)
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', outside) }
  }, [menuOpen])
  const hero = projects.find(project => project.id === 'in-whose-name')!
  const sorted = [...projects].sort((a,b) => order.indexOf(a.id)-order.indexOf(b.id))
  function card(project: Project, featured = false) {
    return <Link href={`/work/${project.id}`} scroll={false} className={`focus-card${featured ? ' focus-hero' : ''}`} aria-label={projectImageAlt(project)}>
      <Image src={project.cardImage || project.thumbnail} alt={projectImageAlt(project)} fill sizes={featured ? '(max-width: 700px) calc(100vw - 48px), 650px' : '(max-width: 600px) calc(100vw - 48px), 202px'} priority={featured} style={{objectFit:'cover',objectPosition:project.thumbnailPosition || 'center',transform:project.thumbnailScale ? `scale(${project.thumbnailScale})` : undefined}} />
    </Link>
  }
  return <>
    <a className="skip-link" href="#portfolio">Skip to projects</a>
    <header className="focus-header">
      <Link href="/" aria-label="Vaughn Robison, home" className="monogram"><Image src="/vr-monogram-vector.svg" alt="" width={25} height={28}/></Link>
      <div className="focus-menu-wrap" ref={menu} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false) }}>
        <button ref={trigger} className="menu-trigger" aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        {menuOpen && <nav id="site-menu" className="glass-menu" aria-label="Main navigation">
          <Link href="/about" scroll={false} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/publications" scroll={false} onClick={() => setMenuOpen(false)}>Publications</Link>
          <a href="mailto:info@vaughn-robison.com">Inquiries</a>
          <a href="https://filmtools.org/" target="_blank" rel="noopener noreferrer" aria-label="Film Tools, opens in a new tab">Film Tools</a>
          <a href="https://americanchristianfuturists.com/" target="_blank" rel="noopener noreferrer" aria-label="American Christian Futurists, opens in a new tab">ACF</a>
        </nav>}
      </div>
    </header>
    <main id="portfolio" className="focus-home" tabIndex={-1}>
      {card(hero,true)}
      <div className="focus-identity"><h1 ref={identity}>Vaughn Robison</h1><p>Producer · Director · Strategist</p></div>
      <BrandCarousel width={nameWidth}/>
      <section className="focus-grid" aria-label="Selected projects">{sorted.filter(project => project.id !== hero.id).map(project => <div key={project.id}>{card(project)}</div>)}</section>
    </main>
    <footer className="focus-footer"><span>Vaughn Robison</span><a href="mailto:info@vaughn-robison.com">Inquiries</a></footer>
  </>
}
