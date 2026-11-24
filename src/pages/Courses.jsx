import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, SlidersHorizontal, X, Clock, FlaskConical, Award } from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import CourseCard from '../components/CourseCard'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { courses, courseCategories, courseLevels } from '../data/courses'

const highlights = [
  { icon: FlaskConical, title: 'Lab-based learning', text: 'Every course includes supervised practical sessions.' },
  { icon: Clock, title: 'Flexible batches', text: 'Weekday and weekend batch options (subject to availability).' },
  { icon: Award, title: 'Certification', text: 'Course completion certificate on successful assessment.' },
]

export default function Courses() {
  useSeo(
    'EV Courses',
    'Explore industry-focused Electric Vehicle courses — EV fundamentals, battery technology, BMS, motor & controller technology, charging infrastructure and EV maintenance & diagnostics.',
  )
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [level, setLevel] = useState('All Levels')

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return courses.filter(
      (c) =>
        (cat === 'All' || c.category === cat) &&
        (level === 'All Levels' || c.level === level) &&
        (!s || [c.title, c.short, c.category, ...c.skills].join(' ').toLowerCase().includes(s)),
    )
  }, [q, cat, level])

  const reset = () => {
    setQ('')
    setCat('All')
    setLevel('All Levels')
  }
  const dirty = q || cat !== 'All' || level !== 'All Levels'

  return (
    <>
      <PageHero
        eyebrow="EV Courses"
        title={
          <>
            Specialised Programmes for <span className="hl">Electric Mobility</span>
          </>
        }
        description="From first principles to advanced battery management — choose a career-focused EV course built around practical lab experience."
        image="/images/ev-charging-plug.webp"
        imageAlt="Charging connector plugged into an electric vehicle"
        crumbs={[{ label: 'Courses' }]}
      >
        <div className="grid max-w-xl gap-3 sm:grid-cols-3">
          {highlights.map(({ icon: I, title }) => (
            <div key={title} className="flex items-center gap-2.5 rounded-2xl bg-white/80 px-3.5 py-3 text-sm font-semibold text-forest shadow-soft">
              <I className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" /> {title}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="pb-6" aria-label="Course introduction">
        <div className="container-x">
          <Reveal className="grid gap-6 rounded-[28px] bg-forest p-7 text-white sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <p className="font-serif text-2xl leading-snug sm:text-[1.9rem]">
              Every course is designed with one goal — <span className="text-gold italic">making you job-ready</span> in the
              EV industry.
            </p>
            <p className="leading-relaxed text-white/75">
              Courses combine concept sessions, guided demonstrations and hands-on lab work. Beginners can start with EV
              Fundamentals, while learners with an electrical or electronics background can move directly into
              specialisations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16" aria-label="Course catalogue">
        <div className="container-x">
          {/* Filters */}
          <div className="sticky top-[76px] z-30 -mx-5 mb-10 bg-cream/90 px-5 py-4 backdrop-blur-md sm:mx-0 sm:rounded-[24px] sm:border sm:border-forest/[0.07] sm:bg-white/90 sm:px-5 sm:shadow-soft">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <label className="relative flex-1">
                <span className="sr-only">Search courses</span>
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-brand" aria-hidden="true" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search courses, skills or topics…"
                  className="field rounded-full! pl-12"
                />
              </label>
              <label className="relative md:w-52">
                <span className="sr-only">Filter by level</span>
                <SlidersHorizontal className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-brand" aria-hidden="true" />
                <select value={level} onChange={(e) => setLevel(e.target.value)} className="field cursor-pointer appearance-none rounded-full! pl-11">
                  {courseLevels.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Filter by category">
              {courseCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    cat === c ? 'bg-forest text-white shadow-soft' : 'bg-mint text-forest hover:bg-forest/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-ink/70" aria-live="polite">
              Showing <strong className="text-forest">{filtered.length}</strong> of {courses.length} EV courses
            </p>
            {dirty && (
              <button onClick={reset} className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-forest">
                <X className="h-4 w-4" /> Clear filters
              </button>
            )}
          </div>

          <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => (
                <motion.div key={c.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}>
                  <CourseCard course={c} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="rounded-[28px] border border-dashed border-forest/20 bg-white/60 px-6 py-16 text-center">
              <p className="font-serif text-2xl font-bold text-forest">No courses match your filters.</p>
              <p className="mt-2 text-ink/70">Try a different keyword or reset the filters.</p>
              <button onClick={reset} className="mt-6 rounded-full bg-forest px-6 py-3 font-semibold text-white">
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title={
          <>
            Not Sure Which <span className="hl">Course</span> Fits You?
          </>
        }
        description="Tell us about your background and goals — our counsellors will recommend the right EV programme."
      />
    </>
  )
}
