import { User } from 'lucide-react'

/** Shows a photo when available, otherwise a neutral branded placeholder (no fake faces). */
export default function Avatar({ photo, name, size = 'h-12 w-12', ring = 'ring-white' }) {
  if (photo)
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className={`${size} rounded-full object-cover ring-2 ${ring}`}
      />
    )
  return (
    <span
      className={`${size} grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-forest text-white ring-2 ${ring}`}
      aria-hidden="true"
    >
      <User className="h-1/2 w-1/2" strokeWidth={1.8} />
    </span>
  )
}
