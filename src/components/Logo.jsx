import { Link } from 'react-router-dom'
import { site } from '../data/site'

/**
 * Uses the institute's ORIGINAL logo file (public/logo/logo.jpeg, copied from /logo.jpeg).
 * The logo is square — width is left auto so the aspect ratio is always preserved.
 * `blend` removes the white JPEG background visually on light (cream) surfaces.
 */
export default function Logo({ className = 'h-16', blend = true, linked = true }) {
  // The source file has generous white padding; a uniform scale inside a square
  // clipping box trims it visually without altering the logo or its aspect ratio.
  const img = (
    <span className={`${className} block aspect-square overflow-hidden ${blend ? 'mix-blend-multiply' : ''}`}>
      <img
        src="/logo/logo.jpeg"
        alt={`${site.name} – ${site.tagline}`}
        width="1254"
        height="1254"
        className="h-full w-full scale-[1.22] object-contain"
        decoding="async"
      />
    </span>
  )
  if (!linked) return img
  return (
    <Link to="/" aria-label={`${site.name} home`} className="inline-flex shrink-0 items-center">
      {img}
    </Link>
  )
}
