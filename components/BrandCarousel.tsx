'use client'

import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import brands from '@/data/brands.json'

export default function BrandCarousel({width}: {width?: number}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const [selected, setSelected] = useState<(typeof brands)[number] | null>(null)
  const close = () => { dialog.current?.close(); opener.current?.focus() }
  const mark = (brand: (typeof brands)[number]) => brand.asset ? ('direct' in brand && brand.direct ? <img aria-hidden="true" alt="" draggable="false" className="brand-image" src={brand.asset} width="64" height={brand.height} style={{height:brand.height}}/> : <span aria-hidden="true" className="brand-mark" style={{height:brand.height,maskImage:`url("${brand.asset}")`,WebkitMaskImage:`url("${brand.asset}")`}}/>) : <span aria-hidden="true" className="brand-name">{brand.name}</span>
  return <>
    <div className="brand-window" style={{width:width || '14em'}} aria-label="Selected work and project contexts">
      <div className="brand-track" style={{'--loop-time': `${brands.length * 78 / 13.2}s`} as CSSProperties}>
        <div className="brand-run">{brands.map(brand => <button key={brand.slug} className="brand-item" aria-label={`${brand.name}: ${brand.context}`} onClick={event => {opener.current=event.currentTarget;setSelected(brand);dialog.current?.showModal()}}>{mark(brand)}</button>)}</div>
        <div className="brand-run brand-clone" aria-hidden="true">{brands.map(brand => <span key={brand.slug} className="brand-item">{mark(brand)}</span>)}</div>
      </div>
    </div>
    <dialog ref={dialog} className="brand-dialog" aria-labelledby="brand-title" onClick={event => {if(event.target===event.currentTarget)close()}} onCancel={close}>
      <button onClick={close} className="brand-close" aria-label="Close brand details">Close</button>
      {selected && <><h2 id="brand-title">{selected.name}</h2><p>{selected.context}</p>{selected.href && <a href={selected.href}>View project</a>}</>}
    </dialog>
  </>
}
