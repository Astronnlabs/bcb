import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X, GraduationCap, Newspaper } from 'lucide-react'
import { courses } from '../data/courses'
import { blogs } from '../data/blogs'

export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    setQ('')
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    const match = (txt) => txt.toLowerCase().includes(s)
    const c = courses
      .filter((x) => !s || match(x.title) || match(x.short) || match(x.category))
      .map((x) => ({ type: 'Course', title: x.title, to: `/courses/${x.slug}`, sub: x.category }))
    const b = blogs
      .filter((x) => !s || match(x.title) || match(x.excerpt) || match(x.category))
      .map((x) => ({ type: 'Article', title: x.title, to: `/blog/${x.slug}`, sub: x.category }))
    return s ? [...c, ...b] : c.slice(0, 4)
  }, [q])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-deep/60 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Search the website"
        >
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-hidden rounded-3xl bg-cream shadow-lift"
          >
            <div className="flex items-center gap-3 border-b border-forest/10 px-5 py-4">
              <Search className="h-5 w-5 text-brand" aria-hidden="true" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search EV courses & articles…"
                aria-label="Search query"
                className="flex-1 bg-transparent py-1 text-lg text-forest outline-none placeholder:text-ink/45"
              />
              <button onClick={onClose} aria-label="Close search" className="grid h-9 w-9 place-items-center rounded-full hover:bg-mint">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="max-h-[55vh] overflow-y-auto p-3">
              {!q && <li className="px-3 pt-1 pb-2 text-xs font-bold tracking-widest text-ink/50 uppercase">Popular courses</li>}
              {results.length === 0 && <li className="px-3 py-8 text-center text-ink/60">No results for “{q}”.</li>}
              {results.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    onClick={onClose}
                    className="flex items-center gap-3.5 rounded-2xl px-3 py-3 transition hover:bg-mint"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-soft">
                      {r.type === 'Course' ? <GraduationCap className="h-5 w-5" /> : <Newspaper className="h-5 w-5" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-forest">{r.title}</span>
                      <span className="text-[13px] text-ink/60">
                        {r.type} · {r.sub}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
