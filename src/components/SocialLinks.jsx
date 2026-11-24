import { site } from '../data/site'

// Simple brand-neutral glyphs (lucide-react no longer ships brand icons).
const paths = {
  facebook: 'M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z',
  instagram:
    'M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.9-7.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zM12 4.6c2.4 0 2.7 0 3.6.1 2.4.1 3.6 1.3 3.7 3.7.1 1 .1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.4-1.3 3.6-3.7 3.7-1 .1-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.4-.1-3.6-1.3-3.7-3.7-.1-1-.1-1.2-.1-3.6s0-2.7.1-3.6C4.8 6 6 4.8 8.4 4.7c.9-.1 1.2-.1 3.6-.1zM12 3c-2.4 0-2.8 0-3.7.1C5 3.2 3.2 5 3.1 8.3 3 9.2 3 9.6 3 12s0 2.8.1 3.7c.1 3.3 1.9 5.1 5.2 5.2.9.1 1.3.1 3.7.1s2.8 0 3.7-.1c3.3-.1 5.1-1.9 5.2-5.2.1-.9.1-1.3.1-3.7s0-2.8-.1-3.7C20.8 5 19 3.2 15.7 3.1 14.8 3 14.4 3 12 3z',
  linkedin:
    'M6.9 8.8H3.6V20h3.3V8.8zM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.6c0-3-.7-5.1-4.1-5.1-1.7 0-2.8.9-3.2 1.8V8.8H9.9V20h3.3v-5.5c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h3.3v-6.4z',
  youtube:
    'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z',
}

export default function SocialLinks({ className = '', dark = true }) {
  return (
    <ul className={`flex gap-2.5 ${className}`}>
      {Object.entries(site.social).map(([k, href]) => (
        <li key={k}>
          <a
            href={href}
            target={href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={k[0].toUpperCase() + k.slice(1)}
            className={`grid h-10 w-10 place-items-center rounded-full transition-all duration-300 hover:-translate-y-1 ${
              dark ? 'bg-white/10 text-white hover:bg-gold hover:text-deep' : 'bg-mint text-forest hover:bg-forest hover:text-gold'
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
              <path d={paths[k]} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
