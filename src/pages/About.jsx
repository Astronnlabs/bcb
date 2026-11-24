import {
  Eye,
  Target,
  FlaskConical,
  Users,
  Briefcase,
  Award,
  Layers,
  ShieldCheck,
  Lightbulb,
  Hammer,
  Rocket,
  TrendingUp,
  BatteryCharging,
  Cpu,
  Cog,
  PlugZap,
  Wrench,
  GraduationCap,
  ClipboardCheck,
  UserPlus,
  BookOpen,
} from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import Avatar from '../components/Avatar'
import { Blob, Sparkle, DotGrid, Leaf } from '../components/Decor'
import { StatsPanel } from '../components/home/AboutIntro'
import { site } from '../data/site'

const why = [
  { icon: Layers, title: 'EV-Only Specialisation', text: 'Every programme is focused exclusively on electric mobility — nothing generic.' },
  { icon: FlaskConical, title: 'Lab-First Learning', text: 'Concepts are reinforced through hands-on work on real EV components.' },
  { icon: Users, title: 'Mentor-Led Batches', text: 'Mentors track your progress and guide your projects personally.' },
  { icon: ShieldCheck, title: 'Safety Built-In', text: 'High-voltage safety practices are part of every course from day one.' },
  { icon: Briefcase, title: 'Career Support', text: 'Resume, interview and career guidance for every learner.' },
  { icon: Award, title: 'Certification', text: 'Course completion certificates that document your practical skills.' },
]

const philosophy = [
  { icon: Lightbulb, title: 'Understand', text: 'Build strong fundamentals with clear, visual explanations.' },
  { icon: Hammer, title: 'Practise', text: 'Apply every concept in the lab with real instruments.' },
  { icon: Rocket, title: 'Build', text: 'Complete projects that prove what you can do.' },
  { icon: TrendingUp, title: 'Grow', text: 'Step into the industry with confidence and guidance.' },
]

const method = [
  { n: '01', title: 'Concept Sessions', text: 'Interactive classroom sessions introduce the theory behind each EV system.' },
  { n: '02', title: 'Guided Demonstrations', text: 'Trainers demonstrate procedures on training rigs before you try them.' },
  { n: '03', title: 'Supervised Lab Practice', text: 'You perform measurements, assembly and testing under supervision.' },
  { n: '04', title: 'Projects & Assessments', text: 'Mini-projects and practical assessments confirm your competence.' },
  { n: '05', title: 'Career Readiness', text: 'Mock interviews and resume reviews prepare you for the next step.' },
]

const labs = [
  { icon: BatteryCharging, title: 'Battery Lab', text: 'Cell testing, module assembly and capacity analysis.' },
  { icon: Cpu, title: 'BMS & Electronics Bench', text: 'BMS boards, cell simulators and CAN tools.' },
  { icon: Cog, title: 'Motor & Drives Bench', text: 'Motors, controllers and oscilloscope-based testing.' },
  { icon: PlugZap, title: 'Charging Training Bay', text: 'AC charger wiring, earthing and commissioning practice.' },
  { icon: Wrench, title: 'Diagnostics Workshop', text: 'Servicing and fault-finding on training vehicles.' },
]

// PLACEHOLDER faculty — replace with real faculty names, photos and profiles.
const faculty = [
  { name: 'Faculty Name', role: 'Battery & BMS Specialist', photo: '' },
  { name: 'Faculty Name', role: 'Motor & Power Electronics Trainer', photo: '' },
  { name: 'Faculty Name', role: 'Charging Infrastructure Mentor', photo: '' },
]

const journey = [
  { icon: UserPlus, title: 'Enquire & Counsel', text: 'Discuss goals with a counsellor and choose the right course.' },
  { icon: BookOpen, title: 'Learn Fundamentals', text: 'Build EV system knowledge and safety habits.' },
  { icon: FlaskConical, title: 'Hands-on Labs', text: 'Practise on batteries, motors, BMS and chargers.' },
  { icon: ClipboardCheck, title: 'Projects & Certification', text: 'Complete assessments and earn your certificate.' },
  { icon: GraduationCap, title: 'Career Launch', text: 'Get placement assistance and career guidance.' },
]

export default function About() {
  useSeo(
    'About Us',
    `Learn about ${site.name} — an EV skills and training institute focused on practical, industry-relevant electric vehicle education, mentorship and career support.`,
  )

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Shaping Careers for an <span className="hl">Electric Future.</span>
          </>
        }
        description={`${site.name} is dedicated to one mission: preparing skilled, confident professionals for the fast-growing electric vehicle industry.`}
        image="/images/classroom.webp"
        imageAlt="Students attending an EV technology classroom session"
        crumbs={[{ label: 'About Us' }]}
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button to="/courses" arrow>
            Explore Courses
          </Button>
          <Button to="/contact" variant="outline">
            Visit Our Campus
          </Button>
        </div>
      </PageHero>

      {/* Introduction */}
      <section id="story" className="relative scroll-mt-28 py-20 sm:py-24" aria-labelledby="intro-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 mx-auto w-full max-w-[560px] pb-24 lg:order-1">
            <DotGrid className="-top-6 -right-6 hidden h-28 w-28 sm:block" />
            <div className="img-zoom overflow-hidden rounded-[36px] rounded-br-[120px] shadow-lift">
              <img
                src="/images/campus.webp"
                alt="Institute campus building"
                loading="lazy"
                className="aspect-[4/3.4] w-full object-cover"
              />
            </div>
            <StatsPanel className="absolute -bottom-2 left-4 w-[78%] sm:left-8 sm:w-[62%]" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="eyebrow">Our Story</span>
            <h2 id="intro-title" className="mt-4 text-[2.1rem] leading-[1.15] font-bold sm:text-[2.6rem]">
              Connecting Talent to <span className="hl">Tomorrow.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink/85">
              Electric mobility is transforming how India moves — and it needs people who understand batteries, power
              electronics, charging and diagnostics. {site.name} was created to bridge that skills gap with focused,
              practical training.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/85">
              Like the iconic bridge in our logo, we see ourselves as a connection — between ambitious learners and the
              careers that electric mobility is creating. Our programmes are designed around what the industry needs:
              strong fundamentals, safe working practices and real hands-on experience.
            </p>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-mint px-6 py-5 font-serif text-xl leading-relaxed text-forest italic">
              “We don’t just teach EV technology — we help learners build careers with it.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-24" aria-label="Vision and mission">
        <Leaf className="-top-4 right-10 h-24 w-24 opacity-20" />
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[30px] bg-forest p-8 text-white shadow-lift sm:p-11">
            <Blob className="-right-20 -bottom-24 h-64 w-64 bg-brand/40!" />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gold text-deep">
              <Eye className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="relative mt-6 text-3xl font-bold text-white! sm:text-[2.2rem]">Our Vision</h2>
            <p className="relative mt-4 text-[17px] leading-relaxed text-white/85">
              To become a trusted bridge between learners and the electric mobility industry — building a skilled, safe
              and future-ready EV workforce from West Bengal for India.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden rounded-[30px] border border-forest/[0.07] bg-white p-8 shadow-card sm:p-11">
            <Blob className="-right-20 -bottom-24 h-64 w-64 bg-gold-soft/50!" variant={2} />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-mint text-brand">
              <Target className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="relative mt-6 text-3xl font-bold sm:text-[2.2rem]">Our Mission</h2>
            <ul className="relative mt-4 space-y-3 text-[16.5px] leading-relaxed text-ink/85">
              <li>• Deliver practical, industry-relevant EV training accessible to every motivated learner.</li>
              <li>• Combine classroom learning with hands-on lab experience and safety discipline.</li>
              <li>• Support every learner with mentorship, career guidance and placement assistance.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-24" aria-label="Why choose us">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                A Focused Path into <span className="hl">Electric Mobility</span>
              </>
            }
            description="Everything about our programmes is designed to make you confident, capable and career-ready in EV technology."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(({ icon: I, title, text }, i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 0.08}
                className="group rounded-[24px] border border-forest/[0.07] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-mint text-brand transition-colors duration-500 group-hover:bg-forest group-hover:text-gold">
                  <I className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="grain relative overflow-hidden bg-deep py-20 text-white sm:py-24" aria-label="Learning philosophy">
        <Blob className="-top-40 -left-40 h-[420px] w-[420px] bg-brand/25!" />
        <Sparkle className="top-16 right-[12%] h-8 w-8 animate-float" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Our EV Learning Philosophy"
            title={
              <>
                Learn by Doing. <span className="hl">Grow by Building.</span>
              </>
            }
            description="We believe EV skills are built at the workbench, not just in the notebook. Every concept is followed by practice."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-white/10">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-deep">
                  <I className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white!">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 sm:py-24" aria-label="Practical training methodology">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow">Training Methodology</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.15] font-bold sm:text-[2.6rem]">
              A Practical, <span className="hl">Step-by-Step</span> Approach
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85">
              Our methodology moves every learner from understanding to confident, independent practice.
            </p>
            <div className="img-zoom mt-8 overflow-hidden rounded-[28px] shadow-card">
              <img src="/images/engineers-team.webp" alt="Engineers examining a component together" loading="lazy" className="aspect-[16/10] w-full object-cover" />
            </div>
          </Reveal>
          <ol className="relative space-y-5 before:absolute before:top-4 before:bottom-4 before:left-[27px] before:w-[2px] before:bg-gradient-to-b before:from-gold before:to-brand/20">
            {method.map((m, i) => (
              <Reveal as="li" key={m.n} delay={i * 0.06} className="relative flex gap-5">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-cream bg-forest font-serif text-lg font-bold text-gold shadow-soft">
                  {m.n}
                </span>
                <div className="flex-1 rounded-[22px] border border-forest/[0.07] bg-white p-6 shadow-soft">
                  <h3 className="text-xl font-bold">{m.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink/80">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Labs */}
      <section className="relative overflow-hidden bg-mint/60 py-20 sm:py-24" aria-label="Laboratory and workshop">
        <div className="container-x">
          <SectionHeading
            eyebrow="Laboratory & Workshop"
            title={
              <>
                Where Theory Meets <span className="hl">Real EV Hardware</span>
              </>
            }
            description="Our training spaces are organised around the core systems of an electric vehicle."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <Reveal className="img-zoom relative overflow-hidden rounded-[26px] shadow-card sm:col-span-2 lg:row-span-2">
              <img src="/images/ev-lab-training.webp" alt="EV laboratory with training equipment" loading="lazy" className="h-full min-h-[260px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-serif text-2xl font-bold text-white">EV Training Lab</p>
            </Reveal>
            {[
              ['/images/course-battery.webp', 'Battery Lab'],
              ['/images/course-bms.webp', 'Electronics Bench'],
              ['/images/ev-charging-plug.webp', 'Charging Bay'],
              ['/images/technician.webp', 'Diagnostics'],
            ].map(([src, label], i) => (
              <Reveal key={label} delay={i * 0.06} className="img-zoom relative overflow-hidden rounded-[26px] shadow-soft">
                <img src={src} alt={label} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 font-semibold text-white">{label}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {labs.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 0.05} className="rounded-[20px] bg-white p-5 shadow-soft">
                <I className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="mt-3 text-[17px] font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 sm:py-24" aria-label="Faculty and mentorship">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">Faculty & Mentorship</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.15] font-bold sm:text-[2.6rem]">
              Learn from People Who <span className="hl">Know EVs</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/85">
              Our trainers bring practical knowledge of EV systems into every session. Beyond teaching, each learner is
              supported by a mentor who reviews progress, guides projects and helps plan the next career step.
            </p>
            <ul className="mt-6 space-y-2.5 font-medium text-forest">
              <li>✦ Regular one-to-one progress reviews</li>
              <li>✦ Project guidance and technical doubt-clearing</li>
              <li>✦ Career counselling aligned with your strengths</li>
            </ul>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {faculty.map((f, i) => (
              <Reveal key={i} delay={i * 0.08} className="rounded-[24px] border border-forest/[0.07] bg-white p-6 text-center shadow-soft">
                <div className="mx-auto w-fit">
                  <Avatar photo={f.photo} name={f.name} size="h-24 w-24" ring="ring-mint" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.name}</h3>
                <p className="mt-1 text-sm text-brand">{f.role}</p>
                <span className="mt-3 inline-block rounded-full border border-forest/15 px-2.5 py-0.5 text-[10.5px] font-bold tracking-wider text-ink/50 uppercase">
                  Profile placeholder
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-24" aria-label="Student learning journey">
        <div className="container-x">
          <SectionHeading
            eyebrow="Student Learning Journey"
            title={
              <>
                From First Enquiry to <span className="hl">First EV Job</span>
              </>
            }
          />
          <div className="relative mt-14">
          <div className="absolute top-8 right-[10%] left-[10%] hidden h-[2px] border-t-2 border-dashed border-gold/60 md:block" aria-hidden="true" />
          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            {journey.map(({ icon: I, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="relative text-center">
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-gold shadow-card ring-8 ring-cream-2">
                  <I className="h-7 w-7" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-deep">{i + 1}</span>
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mx-auto mt-1.5 max-w-[220px] text-[15px] leading-relaxed text-ink/75">{text}</p>
              </Reveal>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready to Start Your <span className="hl">EV Journey?</span>
          </>
        }
        description="Speak with our counsellors to find the right EV programme for your background and goals."
      />
    </>
  )
}
