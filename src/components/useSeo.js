import { useEffect } from 'react'
import { site } from '../data/site'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets page-specific <title>, meta description and Open Graph tags. */
export default function useSeo(title, description, image) {
  useEffect(() => {
    const full = title ? `${title} | ${site.name}` : `${site.name} | EV Skills, Training & Careers`
    document.title = full
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    setMeta('property', 'og:title', full)
    if (image) setMeta('property', 'og:image', image)
  }, [title, description, image])
}
