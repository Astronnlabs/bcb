import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Play, Zap } from 'lucide-react'
import Button from '../Button'
import { Blob, Sparkle, Ring, DotGrid, Squiggle, Leaf } from '../Decor'
import { site } from '../../data/site'

const ease = [0.22, 0.8, 0.3, 1]
const avatars = [
  '/images/hero-ev-students.webp',
  '/images/students-collab.webp',
  '/images/student-laptop.webp',
  '/images/engineer-goggles.webp',
]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%'])
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-14%'])
  const trained = site.stats[0]

  return (
    <section ref={ref} className="relative overflow-hidden pt-6 pb-16 sm:pt-10 lg:pt-12 lg:pb-24">
      {/* background organic shapes */}
      <motion.div style={{ y: blobY }} aria-hidden="true">
        <Blob className="top-6 -right-48 h-[520px] w-[520px] sm:h-[640px] sm:w-[640px] lg:-right-28" />
        <Blob className="top-[48%] -left-52 h-[300px] w-[300px] bg-gold-soft/35!" variant={2} />
      </motion.div>
      <DotGrid className="top-10 left-[44%] hidden h-24 w-24 opacity-70 lg:block" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.02fr] lg:gap-10 xl:gap-16">
        {/* LEFT */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-brand/15 bg-white/70 px-4 py-2 text-[10.5px] font-bold tracking-[0.14em] whitespace-nowrap min-[400px]:text-[11.5px] sm:gap-x-3 sm:tracking-[0.22em] text-brand uppercase shadow-soft backdrop-blur sm:text-[12px]"
          >
            <Zap className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
            EV Skills <span className="text-gold">|</span> Training <span className="text-gold">|</span> Careers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-[2.65rem] leading-[1.06] font-bold sm:text-[3.6rem] lg:text-[3.7rem] xl:text-[4.35rem]"
          >
            Bridging EV Learning to{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="hl">Real Careers.</span>
              <Squiggle className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-ink/85 sm:text-lg lg:mx-0"
          >
            Build your future in electric mobility with industry-focused EV training, practical experience, expert
            mentorship and career support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button to="/courses" size="lg" arrow className="w-full sm:w-auto">
              Explore EV Courses
            </Button>
            <Link to="/about#story" className="group inline-flex min-h-[44px] items-center gap-3 font-semibold text-forest">
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gold text-deep shadow-[0_12px_26px_-10px_rgba(232,169,40,0.9)] transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" aria-hidden="true" />
                <Play className="relative ml-0.5 h-5 w-5 fill-deep" aria-hidden="true" />
              </span>
              <span className="transition-colors group-hover:text-brand">Watch Our Story</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <div className="flex -space-x-3.5">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-12 w-12 rounded-full border-[3px] border-cream object-cover shadow-soft"
                />
              ))}
              <span className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-cream bg-forest text-xs font-bold text-gold">
                +
              </span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-serif text-2xl leading-none font-bold text-forest">{trained.value}</p>
              <p className="mt-1 text-sm text-ink/75">{trained.label} in EV technology</p>
            </div>
            <span className="hidden h-10 w-px bg-forest/15 sm:block" aria-hidden="true" />
            <div className="text-center sm:text-left">
              <p className="font-serif text-2xl leading-none font-bold text-forest">{site.stats[1].value}</p>
              <p className="mt-1 text-sm text-ink/75">Specialised EV programmes</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
        >
          <Ring className="-top-6 right-4 h-28 w-28 animate-spin-slow sm:h-36 sm:w-36" />
          <Leaf className="-bottom-6 -left-2 h-20 w-20 animate-float-slow sm:h-24 sm:w-24" color="#087C68" />
          <Sparkle className="top-[18%] -left-2 hidden h-8 w-8 animate-float sm:-left-6 sm:block" />
          <Sparkle className="right-[-6px] bottom-[30%] h-5 w-5 animate-float-slow" color="#087C68" />

          {/* main arch image */}
          <div className="relative ml-auto w-[88%] sm:w-[84%]">
            <div className="absolute -inset-3 rounded-t-[999px] rounded-b-[48px] border-2 border-dashed border-gold/60" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[44px] bg-mint shadow-lift">
              <motion.img
                style={{ y: imgY }}
                src="/images/hero-ev-students.webp"
                alt="Engineering students attending an EV technology training session"
                fetchpriority="high"
                className="absolute inset-0 h-[110%] w-full scale-[1.02] object-cover object-[64%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* handwritten note */}
          <div className="absolute top-[6%] left-0 max-w-[46%] -rotate-[7deg] sm:top-[8%] sm:max-w-[40%]">
            <p className="font-hand text-[1.55rem] leading-[1.05] font-bold text-brand sm:text-[2rem]">
              Learn. Innovate. <span className="text-gold">Drive the Future.</span>
            </p>
            <svg viewBox="0 0 120 60" className="mt-1 ml-10 h-10 w-20 sm:h-12 sm:w-24" fill="none" aria-hidden="true">
              <path d="M4 6c30 2 66 14 92 44" stroke="#087C68" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 7" />
              <path d="M84 48l13 4-2-14" stroke="#087C68" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* inset circular EV charging image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease }}
            className="absolute bottom-[20%] left-0 sm:bottom-[22%]"
          >
            <div className="animate-float-slow h-28 w-28 overflow-hidden rounded-full border-[6px] border-cream shadow-card sm:h-40 sm:w-40 sm:border-8">
              <img src="/images/hero-ev-charging.webp" alt="EV charging connector plugged into an electric vehicle" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease }}
            className="absolute right-0 -bottom-6 w-[min(300px,78%)] sm:right-[-4%] sm:-bottom-4"
          >
            <div className="animate-float flex items-center gap-3.5 rounded-3xl border border-white bg-white/95 p-4 shadow-lift backdrop-blur sm:p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest text-gold sm:h-14 sm:w-14">
                <Zap className="h-6 w-6 fill-gold" aria-hidden="true" />
              </span>
              <p className="font-serif text-[15px] leading-snug font-bold text-forest sm:text-[16.5px]">
                Powering the Next Generation of <span className="text-brand italic">EV Professionals.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
