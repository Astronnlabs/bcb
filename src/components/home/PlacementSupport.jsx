import { FlaskConical, Compass, Factory, HeartHandshake, Check } from 'lucide-react'
import Reveal from '../Reveal'
import Button from '../Button'
import TestimonialCard from '../TestimonialCard'
import { Blob, Sparkle } from '../Decor'
import { testimonials } from '../../data/testimonials'

const cards = [
  { icon: FlaskConical, title: 'Practical EV Training', text: 'Hands-on lab sessions with real EV components build job-ready confidence.' },
  { icon: Compass, title: 'Career Guidance', text: 'One-to-one counselling to choose the right EV specialisation and role.' },
  { icon: Factory, title: 'Industry Exposure', text: 'Guest sessions, case studies and visits that connect learning to industry.' },
  { icon: HeartHandshake, title: 'Dedicated Mentorship', text: 'Mentors guide your projects, progress and preparation at every step.' },
]

const support = [
  'Placement preparation',
  'Resume building',
  'Interview training',
  'Technical skill development',
  'Career guidance',
  'Industry exposure',
]

export default function PlacementSupport() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" aria-labelledby="placement-title">
      <Blob className="top-1/3 -left-60 h-[520px] w-[520px]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="eyebrow">Placement Support</span>
          <h2 id="placement-title" className="mt-4 text-[2.2rem] leading-[1.12] font-bold sm:text-[2.8rem] lg:text-[3.1rem]">
            Your Success Is <span className="hl">Our Priority</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
            Learning is only half the journey. Our placement assistance prepares you to present your skills with
            confidence — from building a strong resume and practising technical interviews, to strengthening the EV skills
            employers value and understanding the industry you are entering.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {support.map((s) => (
              <li key={s} className="flex items-center gap-2.5 font-medium text-forest">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-deep">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {s}
              </li>
            ))}
          </ul>
          <Button to="/placement" arrow className="mt-9">
            Explore Placement Support
          </Button>
        </Reveal>

        <div className="relative">
          <Sparkle className="-top-6 right-10 h-8 w-8 animate-float" />
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map(({ icon: I, title, text }, i) => (
              <Reveal
                key={title}
                delay={i * 0.08}
                className={`group rounded-[24px] border border-forest/[0.07] bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card sm:p-7 ${
                  i % 2 === 1 ? 'sm:translate-y-8 sm:hover:translate-y-6' : ''
                }`}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint text-brand transition-colors duration-500 group-hover:bg-forest group-hover:text-gold">
                  <I className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 sm:mt-14">
            <TestimonialCard t={testimonials[0]} variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
