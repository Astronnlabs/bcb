import { BookOpenCheck, Users, Briefcase, Wrench, Award, CalendarClock } from 'lucide-react'
import Reveal from '../Reveal'

const features = [
  { icon: BookOpenCheck, title: 'Industry-Relevant EV Courses', gold: false },
  { icon: Users, title: 'Expert Faculty & Mentorship', gold: true },
  { icon: Briefcase, title: 'Placement Assistance', gold: false },
  { icon: Wrench, title: 'Hands-on EV Projects', gold: true },
  { icon: Award, title: 'Industry Certifications', gold: false },
  { icon: CalendarClock, title: 'Flexible Learning', gold: true },
]

export default function FeaturesStrip() {
  return (
    <section aria-label="Why learn with us" className="relative z-10 pb-6">
      <div className="container-x">
        <Reveal className="rounded-[28px] border border-forest/[0.06] bg-white px-4 py-7 shadow-card sm:px-6 lg:px-4 lg:py-8">
          <ul className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
            {features.map(({ icon: I, title, gold }, i) => (
              <li
                key={title}
                className={`group flex flex-col items-center gap-3 px-2 text-center sm:px-4 lg:flex-row lg:gap-3 lg:text-left ${
                  i > 0 ? 'lg:border-l lg:border-forest/10' : ''
                }`}
              >
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full bg-mint transition-all duration-500 group-hover:scale-110 group-hover:bg-forest ${
                    gold ? 'text-gold' : 'text-brand'
                  } group-hover:text-gold`}
                >
                  <I className="h-6 w-6" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="text-[14.5px] leading-snug font-semibold text-forest">{title}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
