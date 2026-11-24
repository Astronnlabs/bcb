import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, BarChart3 } from 'lucide-react'
import Icon from './Icon'

const levelColor = {
  Beginner: 'bg-mint text-brand',
  Intermediate: 'bg-gold-soft/70 text-[#8a5a00]',
  Advanced: 'bg-forest/10 text-forest',
}

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 0.8, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-forest/[0.07] bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
    >
      <Link to={`/courses/${course.slug}`} className="img-zoom relative block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <img
          src={course.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/45 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-bold tracking-wide text-forest uppercase backdrop-blur">
          {course.category}
        </span>
      </Link>

      <div className="relative flex flex-1 flex-col px-6 pt-9 pb-6">
        <span className="absolute -top-7 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-deep shadow-[0_12px_24px_-10px_rgba(232,169,40,0.8)] transition-transform duration-500 group-hover:-rotate-6">
          <Icon name={course.icon} className="h-6 w-6" strokeWidth={2} />
        </span>

        <h3 className="text-[1.3rem] leading-snug font-bold">
          <Link to={`/courses/${course.slug}`} className="transition-colors hover:text-brand">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink/80">{course.short}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-dashed border-forest/15 pt-4 text-[13px] font-medium">
          <span className="inline-flex items-center gap-1.5 text-ink">
            <Clock className="h-4 w-4 text-brand" aria-hidden="true" /> {course.duration}
          </span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${levelColor[course.level]}`}>
            <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" /> {course.level}
          </span>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-white"
          aria-label={`Learn more about ${course.title}`}
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}
