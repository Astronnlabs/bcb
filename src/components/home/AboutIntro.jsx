import { CheckCircle2 } from 'lucide-react'
import Reveal from '../Reveal'
import Button from '../Button'
import { Blob, Sparkle, DotGrid, Ring } from '../Decor'
import { site } from '../../data/site'

const points = [
  'Practical labs with EV batteries, motors, BMS and chargers',
  'Mentorship from experienced EV trainers',
  'Career guidance from enrolment to placement',
]

export function StatsPanel({ className = '' }) {
  return (
    <div className={`grid grid-cols-2 overflow-hidden rounded-[26px] bg-forest text-white shadow-lift ${className}`}>
      {site.stats.map((s, i) => (
        <div
          key={s.label}
          className={`p-5 sm:p-6 ${i % 2 === 0 ? 'border-r border-white/10' : ''} ${i < 2 ? 'border-b border-white/10' : ''}`}
        >
          <p className="font-serif text-[1.9rem] leading-none font-bold text-gold sm:text-[2.2rem]">{s.value}</p>
          <p className="mt-2 text-[13.5px] font-medium text-white/80">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" aria-labelledby="about-intro-title">
      <Blob className="top-20 -right-48 h-[460px] w-[460px] opacity-80" variant={2} />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <Reveal>
          <span className="eyebrow">About Us</span>
          <h2 id="about-intro-title" className="mt-4 text-[2.2rem] leading-[1.12] font-bold sm:text-[2.8rem] lg:text-[3.1rem]">
            Education Today. <span className="hl">Opportunities Tomorrow.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            {site.name} develops job-ready talent for the electric vehicle industry. We combine structured classroom
            learning with hands-on practice on real EV components — batteries, battery management systems, motors,
            controllers and charging equipment — so every learner understands not just the theory, but how the
            technology works in the field.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/85">
            With modern training equipment, professional mentorship and dedicated career guidance, we help students,
            graduates and working professionals bridge the gap between learning and a rewarding career in electric
            mobility.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 font-medium text-forest">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Button to="/about" arrow className="mt-9">
            Know Our Story
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-[600px] pb-28 sm:pb-20">
          <DotGrid className="-top-6 -left-6 h-32 w-32" />
          <Ring className="-right-4 -bottom-2 h-24 w-24 animate-spin-slow" color="#087C68" />
          <Sparkle className="-top-4 right-[38%] h-8 w-8 animate-float" />

          <div className="img-zoom relative overflow-hidden rounded-[36px] rounded-tl-[120px] shadow-lift">
            <img
              src="/images/ev-lab-training.webp"
              alt="Engineer working with EV training equipment in a modern laboratory"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-2 -left-2 w-[44%] overflow-hidden rounded-[28px] border-[6px] border-cream shadow-card sm:-left-8 sm:w-[40%]">
            <img
              src="/images/students-collab.webp"
              alt="Students collaborating on a technical project"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>

          <StatsPanel className="absolute right-0 bottom-0 w-[54%] sm:-right-6 sm:w-[52%]" />
        </Reveal>
      </div>
    </section>
  )
}
