import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div
            key={f.q}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? 'border-brand/30 bg-white shadow-soft' : 'border-forest/10 bg-white/60'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-forest sm:px-6"
            >
              <span>{f.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-gold text-deep' : 'bg-mint text-brand'
                }`}
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="px-5 pb-5 leading-relaxed text-ink/85 sm:px-6">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
