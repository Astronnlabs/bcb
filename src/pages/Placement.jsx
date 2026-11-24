import {
  ClipboardList,
  FileText,
  MessagesSquare,
  Wrench,
  Factory,
  Rocket,
  CheckCircle2,
  BatteryCharging,
  Cpu,
  Cog,
  PlugZap,
  Car,
  ShieldCheck,
  Presentation,
  Building2,
  Users,
  Info,
} from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import { Blob, Sparkle, DotGrid } from '../components/Decor'
import { testimonials } from '../data/testimonials'

const process = [
  { icon: ClipboardList, title: 'Skill Assessment', text: 'Understand your strengths, interests and the roles that suit you.' },
  { icon: Wrench, title: 'Technical Training', text: 'Build practical EV skills through labs and projects.' },
  { icon: FileText, title: 'Resume Building', text: 'Create a focused, EV-ready resume and project portfolio.' },
  { icon: MessagesSquare, title: 'Interview Prep', text: 'Mock technical and HR interviews with feedback.' },
  { icon: Factory, title: 'Industry Exposure', text: 'Learn how EV organisations work and what they expect.' },
  { icon: Rocket, title: 'Placement Assistance', text: 'Guidance on applications, opportunities and next steps.' },
]

const roles = [
  { icon: Wrench, title: 'EV Service Technician' },
  { icon: BatteryCharging, title: 'Battery Pack Technician' },
  { icon: Cpu, title: 'BMS Test Engineer' },
  { icon: Cog, title: 'Motor & Drive Technician' },
  { icon: PlugZap, title: 'Charger Installation Technician' },
  { icon: ShieldCheck, title: 'Quality Inspector – EV' },
  { icon: Car, title: 'EV Product Specialist' },
  { icon: Building2, title: 'Charging Station Operator' },
]

const training = [
  { icon: BatteryCharging, title: 'Battery & BMS', text: 'Assembly, testing, balancing and diagnostics.' },
  { icon: Cog, title: 'Motors & Controllers', text: 'Motor testing, controller setup and waveform analysis.' },
  { icon: PlugZap, title: 'Charging Systems', text: 'Charger wiring, earthing and commissioning.' },
  { icon: Wrench, title: 'Service & Diagnostics', text: 'Fault-finding and preventive maintenance.' },
]

function Split({ image, alt, eyebrow, title, text, points, reverse }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={`relative mx-auto w-full max-w-[560px] ${reverse ? 'lg:order-2' : ''}`}>
        <DotGrid className={`-bottom-6 hidden h-28 w-28 sm:block${reverse ? '-right-6' : '-left-6'}`} />
        <div className={`img-zoom relative overflow-hidden rounded-[32px] shadow-lift ${reverse ? 'rounded-tl-[110px]' : 'rounded-tr-[110px]'}`}>
          <img src={image} alt={alt} loading="lazy" className="aspect-[5/4] w-full object-cover" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-[2.1rem] leading-[1.15] font-bold sm:text-[2.6rem]">{title}</h2>
        <p className="mt-5 text-[17px] leading-relaxed text-ink/85">{text}</p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 font-medium text-forest">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" /> {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}

export default function Placement() {
  useSeo(
    'Placement Assistance',
    'EV placement assistance — resume preparation, interview training, technical skill development, industry exposure and career guidance for electric vehicle careers.',
  )
  return (
    <>
      <PageHero
        eyebrow="Placement Assistance"
        title={
          <>
            Turning EV Skills into <span className="hl">Career Opportunities</span>
          </>
        }
        description="Structured career support that prepares you to step confidently into the electric vehicle industry."
        image="/images/students-collab.webp"
        imageAlt="Students collaborating during a career preparation session"
        crumbs={[{ label: 'Placement' }]}
      >
        <Button to="/enquiry" arrow>
          Talk to a Career Counsellor
        </Button>
      </PageHero>

      {/* Process */}
      <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-24" aria-label="Career development process">
        <div className="container-x">
          <SectionHeading
            eyebrow="Career Development Process"
            title={
              <>
                Six Steps to <span className="hl">Career Readiness</span>
              </>
            }
            description="Every learner follows a clear, guided path from skill-building to placement assistance."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(({ icon: I, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={(i % 3) * 0.08}
                className="group relative overflow-hidden rounded-[24px] border border-forest/[0.07] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              >
                <span className="absolute -top-3 right-4 font-serif text-[5.5rem] leading-none font-bold text-mint transition-colors duration-500 group-hover:text-gold-soft">
                  {i + 1}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-forest text-gold">
                  <I className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-xl font-bold">{title}</h3>
                <p className="relative mt-2 leading-relaxed text-ink/80">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Resume + Interview */}
      <section className="space-y-24 py-20 sm:py-28" aria-label="Resume and interview preparation">
        <div className="container-x">
          <Split
            image="/images/student-laptop.webp"
            alt="Student working on a laptop preparing a resume"
            eyebrow="Resume Preparation"
            title={
              <>
                A Resume That <span className="hl">Speaks EV</span>
              </>
            }
            text="We help you present your training, lab work and projects in a clear, professional format that highlights the technical skills EV employers look for."
            points={['One-to-one resume reviews', 'Project and lab portfolio guidance', 'Professional online profile tips', 'Cover letter and application support']}
          />
        </div>
        <div className="container-x">
          <Split
            reverse
            image="/images/engineers-team.webp"
            alt="Mentor guiding a student during technical discussion"
            eyebrow="Interview Preparation"
            title={
              <>
                Walk into Interviews <span className="hl">Prepared</span>
              </>
            }
            text="Practise answering technical and behavioural questions with mentors who give honest, constructive feedback — so you can communicate your EV knowledge with confidence."
            points={['Mock technical interviews', 'HR and communication practice', 'Group discussion sessions', 'Personalised feedback and improvement plans']}
          />
        </div>
      </section>

      {/* Technical training */}
      <section className="grain relative overflow-hidden bg-deep py-20 text-white sm:py-24" aria-label="EV technical training">
        <Blob className="-right-40 -bottom-40 h-[460px] w-[460px] bg-brand/25!" />
        <Sparkle className="top-14 left-[10%] h-7 w-7 animate-float" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow text-gold!">EV Technical Training</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.15] font-bold text-white! sm:text-[2.6rem]">
              Skills Employers <span className="hl">Actually Need</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/75">
              Placement readiness starts with technical competence. Our lab-based training builds practical skills
              across the core systems of electric vehicles.
            </p>
            <Button to="/courses" variant="gold" arrow className="mt-8">
              View EV Courses
            </Button>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {training.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="rounded-[22px] border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.09]">
                <I className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-white!">{title}</h3>
                <p className="mt-1.5 text-white/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry exposure */}
      <section className="py-20 sm:py-24" aria-label="Industry exposure">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Industry Exposure</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.15] font-bold sm:text-[2.6rem]">
              Learn How the <span className="hl">EV Industry</span> Works
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85">
              Understanding the workplace is as important as technical skill. We bring industry perspectives into the
              classroom so you know what to expect.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              { icon: Presentation, title: 'Expert Sessions', text: 'Talks and workshops on current EV technology.' },
              { icon: Building2, title: 'Industry Visits', text: 'Visits to EV facilities where arranged.' },
              { icon: Users, title: 'Case Studies', text: 'Real-world EV problems solved in teams.' },
            ].map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="rounded-[22px] bg-mint p-6">
                <I className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-[15px] text-ink/80">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career opportunities */}
      <section className="bg-cream-2/70 py-20 sm:py-24" aria-label="EV career opportunities">
        <div className="container-x">
          <SectionHeading
            eyebrow="EV Career Opportunities"
            title={
              <>
                Roles in a <span className="hl">Growing Industry</span>
              </>
            }
            description="Electric mobility is creating new roles across service, manufacturing and infrastructure."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-4">
            {roles.map(({ icon: I, title }, i) => (
              <Reveal
                key={title}
                delay={(i % 4) * 0.06}
                className="group flex items-center gap-4 rounded-[20px] border border-forest/[0.07] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-mint text-brand transition group-hover:bg-forest group-hover:text-gold">
                  <I className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-semibold text-forest">{title}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24" aria-label="Student testimonials">
        <div className="container-x">
          <SectionHeading
            eyebrow="Student Voices"
            title={
              <>
                What Our <span className="hl">Learners Say</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(1, 4).map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} variant={i === 1 ? 'dark' : 'light'} />
            ))}
          </div>
          <p className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-ink/60">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Placement assistance includes training, preparation and guidance. Placement outcomes depend on individual
            performance and industry requirements; we do not guarantee employment.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
