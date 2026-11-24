import { Quote } from 'lucide-react'
import Avatar from './Avatar'
import Reveal from './Reveal'

export default function TestimonialCard({ t, index = 0, variant = 'light', showStory = false }) {
  const dark = variant === 'dark'
  return (
    <Reveal
      delay={(index % 3) * 0.1}
      className={`relative flex h-full flex-col rounded-[22px] p-7 transition-all duration-500 hover:-translate-y-1.5 ${
        dark ? 'bg-forest text-white shadow-card' : 'border border-forest/[0.07] bg-white shadow-soft hover:shadow-card'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-full ${dark ? 'bg-gold text-deep' : 'bg-mint text-brand'}`}>
          <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
        </span>
        {t.placeholder && (
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10.5px] font-bold tracking-wider uppercase ${
              dark ? 'border-white/25 text-white/60' : 'border-forest/15 text-ink/50'
            }`}
            title="Sample testimonial – replace with a real one in src/data/testimonials.js"
          >
            Sample
          </span>
        )}
      </div>
      <blockquote className={`mt-5 flex-1 font-serif text-[17.5px] leading-relaxed italic ${dark ? 'text-white/90' : 'text-forest'}`}>
        “{t.quote}”
      </blockquote>
      {showStory && t.story && (
        <p className={`mt-4 text-sm leading-relaxed ${dark ? 'text-white/65' : 'text-ink/70'}`}>{t.story}</p>
      )}
      <div className={`mt-6 flex items-center gap-3.5 border-t pt-5 ${dark ? 'border-white/15' : 'border-forest/10'}`}>
        <Avatar photo={t.photo} name={t.name} ring={dark ? 'ring-gold' : 'ring-mint'} />
        <div>
          <p className={`font-semibold ${dark ? 'text-white' : 'text-forest'}`}>{t.name}</p>
          <p className={`text-[13px] ${dark ? 'text-gold' : 'text-brand'}`}>
            {t.course} · {t.batch}
          </p>
        </div>
      </div>
    </Reveal>
  )
}
