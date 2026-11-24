import { useState } from 'react'
import { Quote, Sprout, FlaskConical, Trophy, Briefcase, Camera } from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import Avatar from '../components/Avatar'
import { Sparkle, Blob } from '../components/Decor'
import { testimonials } from '../data/testimonials'

const journey = [
  { icon: Sprout, title: 'The Beginning', text: 'Learners join with curiosity — from ITI, diploma, engineering or workshop backgrounds.' },
  { icon: FlaskConical, title: 'Hands-on Growth', text: 'Labs and projects turn theory into practical, confident skills.' },
  { icon: Trophy, title: 'Milestones', text: 'Assessments, projects and certification mark real progress.' },
  { icon: Briefcase, title: 'Career Steps', text: 'Interview preparation and guidance support the move into EV roles.' },
]

const gallery = [
  ['/images/classroom.webp', 'Classroom session'],
  ['/images/ev-lab-training.webp', 'EV lab practice'],
  ['/images/students-collab.webp', 'Team project work'],
  ['/images/engineers-team.webp', 'Mentor guidance'],
  ['/images/hero-ev-students.webp', 'Interactive learning'],
]

export default function SuccessStories() {
  useSeo(
    'Success Stories',
    'Read student experiences, training journeys and career development stories from learners in our EV training programmes.',
  )
  const [active, setActive] = useState(0)
  const featured = testimonials[active]

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title={
          <>
            Real Journeys. <span className="hl">Electric Futures.</span>
          </>
        }
        description="Every learner’s path into electric mobility is unique. These stories celebrate the effort, curiosity and growth behind each one."
        image="/images/hero-ev-students.webp"
        imageAlt="Students in an EV training classroom"
        crumbs={[{ label: 'Success Stories' }]}
      />

      {/* Featured story */}
      <section className="relative overflow-hidden py-16 sm:py-20" aria-label="Featured student story">
        <Blob className="top-10 -right-40 h-[420px] w-[420px]" variant={2} />
        <div className="container-x relative">
          <Reveal className="grain relative grid overflow-hidden rounded-[32px] bg-forest text-white shadow-lift lg:grid-cols-[1fr_1.3fr]">
            <div className="relative min-h-[280px]">
              <img src="/images/ev-lab-training.webp" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-forest/20 lg:to-forest" />
            </div>
            <div className="relative p-7 sm:p-10 lg:p-14">
              <Sparkle className="top-8 right-8 h-7 w-7 animate-float" />
              <Quote className="h-12 w-12 fill-gold text-gold" aria-hidden="true" />
              <blockquote className="mt-5 font-serif text-[1.45rem] leading-relaxed italic sm:text-[1.75rem]">“{featured.quote}”</blockquote>
              <p className="mt-5 leading-relaxed text-white/70">{featured.story}</p>
              <div className="mt-8 flex items-center gap-4">
                <Avatar photo={featured.photo} name={featured.name} size="h-14 w-14" ring="ring-gold" />
                <div>
                  <p className="text-lg font-semibold">{featured.name}</p>
                  <p className="text-sm text-gold">
                    {featured.course} · {featured.batch}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Choose a story">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={active === i}
                    aria-label={`Story ${i + 1}: ${t.course}`}
                    onClick={() => setActive(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? 'w-10 bg-gold' : 'w-2.5 bg-white/30 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="bg-cream-2/70 py-20 sm:py-24" aria-label="Student testimonials">
        <div className="container-x">
          <SectionHeading
            eyebrow="Student Experiences"
            title={
              <>
                In Their <span className="hl">Own Words</span>
              </>
            }
            description="Experiences shared by learners across our EV programmes."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} showStory variant={i === 4 ? 'dark' : 'light'} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/55">
            Entries marked “Sample” are layout placeholders and will be replaced with real, consented student stories.
          </p>
        </div>
      </section>

      {/* Training journey */}
      <section className="py-20 sm:py-24" aria-label="Training journey">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Training Journey</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.15] font-bold sm:text-[2.6rem]">
              Growth You Can <span className="hl">See & Measure</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85">
              Career development stories are built step by step — through practice, persistence and mentorship.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {journey.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className={`rounded-[24px] border border-forest/[0.07] bg-white p-7 shadow-soft ${i % 2 ? 'sm:translate-y-8' : ''}`}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-deep">
                  <I className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink/80">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="pt-8 pb-12" aria-label="Student photographs">
        <div className="container-x">
          <div className="mb-8 flex items-center gap-3">
            <Camera className="h-6 w-6 text-brand" aria-hidden="true" />
            <h2 className="text-2xl font-bold sm:text-3xl">Moments from Training</h2>
          </div>
          <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] lg:grid-cols-4">
            {gallery.map(([src, alt], i) => (
              <Reveal
                key={src}
                delay={i * 0.05}
                className={`img-zoom relative overflow-hidden rounded-[22px] shadow-soft ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">{alt}</span>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink/55">Representative images — replace with photographs of your own students and labs.</p>
        </div>
      </section>

      <CTASection
        title={
          <>
            Write Your Own <span className="hl">Success Story</span>
          </>
        }
      />
    </>
  )
}
