import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Clock,
  BarChart3,
  MonitorPlay,
  Award,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Phone,
  Download,
} from 'lucide-react'
import useSeo from '../components/useSeo'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import CourseCard from '../components/CourseCard'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import { Sparkle } from '../components/Decor'
import NotFound from './NotFound'
import { courses, getCourse } from '../data/courses'
import { site } from '../data/site'

function Block({ id, title, icon: I, children }) {
  return (
    <Reveal as="section" id={id} className="scroll-mt-32 rounded-[26px] border border-forest/[0.07] bg-white p-6 shadow-soft sm:p-8">
      <h2 className="flex items-center gap-3 text-2xl font-bold sm:text-[1.7rem]">
        {I && (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mint text-brand">
            <I className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  )
}

function Modules({ modules }) {
  const [open, setOpen] = useState(0)
  return (
    <ol className="space-y-3">
      {modules.map((m, i) => {
        const isOpen = open === i
        return (
          <li key={m.title} className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? 'border-brand/30 bg-mint/50' : 'border-forest/10'}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest font-serif font-bold text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                <span className="block text-xs font-bold tracking-widest text-brand uppercase">Module {i + 1}</span>
                <span className="font-semibold text-forest">{m.title}</span>
              </span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-forest transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-2 px-5 pb-5 pl-[4.75rem] sm:pl-[5rem]"
              >
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-ink/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default function CourseDetails() {
  const { slug } = useParams()
  const course = getCourse(slug)
  useSeo(course?.title || 'Course not found', course?.short, course?.image)

  if (!course) return <NotFound />

  const related = [
    ...courses.filter((c) => c.slug !== slug && c.category === course.category),
    ...courses.filter((c) => c.slug !== slug && c.category !== course.category),
  ].slice(0, 3)

  const facts = [
    { icon: Clock, label: 'Duration', value: course.duration },
    { icon: BarChart3, label: 'Level', value: course.level },
    { icon: MonitorPlay, label: 'Mode', value: course.mode },
    { icon: Award, label: 'Certificate', value: 'Yes' },
  ]

  const toc = [
    ['overview', 'Overview'],
    ['learn', 'What You’ll Learn'],
    ['curriculum', 'Curriculum'],
    ['labs', 'Lab Activities'],
    ['eligibility', 'Eligibility'],
    ['careers', 'Careers'],
    ['faqs', 'FAQs'],
  ]

  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-deep pt-8 pb-16 text-white sm:pb-20">
        <img src={course.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-deep/50" />
        <Sparkle className="top-16 right-[8%] h-8 w-8 animate-float" />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-1.5 text-[13.5px] text-white/65">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link to="/courses" className="hover:text-gold">Courses</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="font-semibold text-white" aria-current="page">{course.shortTitle}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold tracking-[0.18em] text-gold uppercase">
                <Icon name={course.icon} className="h-4 w-4" /> {course.category}
              </span>
              <h1 className="mt-5 text-[2.3rem] leading-[1.1] font-bold text-white! sm:text-5xl lg:text-[3.4rem]">{course.title}</h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/80">{course.short}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={`/enquiry?course=${course.slug}`} variant="gold" size="lg" arrow>
                  Enquire for This Course
                </Button>
                <Button href={site.contact.phoneHref} variant="outline-light" size="lg" icon={Phone}>
                  Call a Counsellor
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[30px] rounded-tr-[100px] border-4 border-white/10 shadow-lift">
                <img src={course.image} alt={course.imageAlt} className="aspect-[4/3] w-full object-cover" />
              </div>
            </motion.div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {facts.map(({ icon: I, label, value }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-deep">
                  <I className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wider text-white/60 uppercase">{label}</p>
                  <p className="truncate font-semibold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
          <div className="min-w-0 space-y-6">
            {/* mobile TOC */}
            <nav aria-label="Course sections" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:hidden">
              {toc.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="shrink-0 rounded-full bg-mint px-4 py-2 text-sm font-semibold whitespace-nowrap text-forest">
                  {label}
                </a>
              ))}
            </nav>

            <Block id="overview" title="Course Overview" icon={GraduationCap}>
              <p className="text-[17px] leading-[1.8] text-ink/90">{course.overview}</p>
            </Block>

            <Block id="learn" title="What You Will Learn" icon={CheckCircle2}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.learn.map((l) => (
                  <li key={l} className="flex items-start gap-3 rounded-2xl bg-mint/60 p-4 text-[15.5px] text-forest">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {l}
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="curriculum" title="Detailed Curriculum" icon={BarChart3}>
              <p className="mb-5 text-ink/80">
                {course.modules.length} modules · {course.modules.reduce((n, m) => n + m.topics.length, 0)} key topics
              </p>
              <Modules modules={course.modules} />
            </Block>

            <Block id="labs" title="Practical Laboratory Activities" icon={FlaskConical}>
              <div className="grid gap-4 sm:grid-cols-2">
                {course.labs.map((l, i) => (
                  <div key={l} className="flex gap-4 rounded-2xl border border-dashed border-brand/30 p-4">
                    <span className="font-serif text-2xl font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-[15.5px] text-forest">{l}</p>
                  </div>
                ))}
              </div>
              <h3 className="mt-8 text-lg font-bold">Skills You’ll Gain</h3>
              <ul className="mt-3 flex flex-wrap gap-2.5">
                {course.skills.map((s) => (
                  <li key={s} className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-white">
                    {s}
                  </li>
                ))}
              </ul>
            </Block>

            <div className="grid gap-6 md:grid-cols-2">
              <Block id="eligibility" title="Eligibility" icon={CheckCircle2}>
                <ul className="space-y-3">
                  {course.eligibility.map((e) => (
                    <li key={e} className="flex items-start gap-2.5 text-ink/90">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-center gap-2 border-t border-forest/10 pt-4 text-sm font-semibold text-forest">
                  <Clock className="h-4 w-4 text-brand" aria-hidden="true" /> Duration: {course.duration} · {course.mode}
                </p>
              </Block>
              <Block title="Certification" icon={Award}>
                <p className="leading-relaxed text-ink/90">{course.certification}</p>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gold-soft/50 p-4">
                  <Award className="h-8 w-8 shrink-0 text-[#a06a00]" aria-hidden="true" />
                  <p className="text-sm font-semibold text-forest">Certificate awarded on successful completion of assessments.</p>
                </div>
              </Block>
            </div>

            <Block id="careers" title="Career Opportunities" icon={Briefcase}>
              <div className="grid gap-3 sm:grid-cols-2">
                {course.careers.map((c) => (
                  <div key={c} className="flex items-center gap-3 rounded-2xl border border-forest/10 p-4 transition hover:border-brand/40 hover:bg-mint/50">
                    <Briefcase className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="font-semibold text-forest">{c}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/60">
                Roles are indicative and depend on individual performance, qualifications and market conditions.
              </p>
            </Block>

            <Block id="faqs" title="Frequently Asked Questions">
              <FAQ items={course.faqs} />
            </Block>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[26px] border border-forest/[0.07] bg-white shadow-card">
              <div className="bg-forest p-6 text-white">
                <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">Next batch</p>
                <p className="mt-1 font-serif text-2xl font-bold">Enrolling Soon</p>
                <p className="mt-1 text-sm text-white/70">Contact us for batch dates and fees.</p>
              </div>
              <ul className="divide-y divide-forest/10 px-6">
                {facts.map(({ icon: I, label, value }) => (
                  <li key={label} className="flex items-center justify-between gap-3 py-3.5 text-[15px]">
                    <span className="flex items-center gap-2.5 text-ink/75">
                      <I className="h-4 w-4 text-brand" aria-hidden="true" /> {label}
                    </span>
                    <span className="text-right font-semibold text-forest">{value}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 p-6 pt-2">
                <Button to={`/enquiry?course=${course.slug}`} arrow className="w-full">
                  Enquire Now
                </Button>
                <Button to="/contact" variant="outline" icon={Download} className="w-full">
                  Request Brochure
                </Button>
              </div>
            </div>
            <div className="mt-6 hidden rounded-[26px] bg-mint p-6 lg:block">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">On this page</p>
              <ul className="mt-3 space-y-1">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="block rounded-lg px-2 py-1.5 text-[15px] text-forest transition hover:bg-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-cream-2/70 py-16 sm:py-20" aria-label="Related courses">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Keep Exploring</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-[2.4rem]">
                Related <span className="hl">Courses</span>
              </h2>
            </div>
            <Button to="/courses" variant="outline" arrow size="sm">
              All Courses
            </Button>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c, i) => (
              <CourseCard key={c.slug} course={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Start Your <span className="hl">{course.shortTitle}</span> Journey
          </>
        }
        description="Speak with our counsellors about eligibility, batch timings and the best way to begin."
      />
    </>
  )
}
