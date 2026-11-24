/** Decorative, purely visual shapes (aria-hidden). */

export function Blob({ className = '', color = 'bg-mint', variant = 1 }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${variant === 1 ? 'blob' : 'blob-2'} ${color} ${className}`}
    />
  )
}

export function Sparkle({ className = '', color = '#E8A928' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`pointer-events-none absolute ${className}`} fill={color}>
      <path d="M12 0c.7 5.6 3.4 9 12 12-8.6 3-11.3 6.4-12 12-.7-5.6-3.4-9-12-12C8.6 9 11.3 5.6 12 0z" />
    </svg>
  )
}

export function Leaf({ className = '', color = '#087C68' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className={`pointer-events-none absolute ${className}`}>
      <path d="M10 110C10 50 50 10 110 10c0 60-40 100-100 100z" fill={color} />
      <path d="M14 106L104 16" stroke="#FFFDF7" strokeWidth="2" strokeLinecap="round" opacity=".6" />
    </svg>
  )
}

export function Ring({ className = '', color = '#E8A928' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={`pointer-events-none absolute ${className}`} fill="none">
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="2" strokeDasharray="4 7" strokeLinecap="round" />
    </svg>
  )
}

export function Squiggle({ className = '', color = '#E8A928' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 20" className={`pointer-events-none ${className}`} fill="none" preserveAspectRatio="none">
      <path d="M2 14C40 4 70 4 100 10s70 8 98-4" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function DotGrid({ className = '' }) {
  return <div aria-hidden="true" className={`dot-grid pointer-events-none absolute ${className}`} />
}
