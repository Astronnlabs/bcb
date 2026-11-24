import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Headphones } from 'lucide-react'
import Button from './Button'
import { Sparkle } from './Decor'

export default function CTASection({
  title = (
    <>
      Build a Brighter Tomorrow with <span className="hl">EV Technology.</span>
    </>
  ),
  description = 'Take the next step toward an exciting career in the electric mobility industry.',
  image = '/images/cta-sunset-grid.webp',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section className="py-16 sm:py-20" aria-label="Enquiry call to action">
      <div className="container-x">
        <div ref={ref} className="grain relative isolate overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <motion.img
            style={{ y }}
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-x-0 -top-[12%] -z-20 h-[124%] w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/95 via-deep/70 to-deep/5" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
          <Sparkle className="top-10 right-[12%] h-7 w-7 animate-float" />
          <Sparkle className="right-[28%] bottom-12 h-4 w-4 animate-float-slow" color="#fff" />

          <div className="max-w-2xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-gold!"
            >
              Your EV career starts here
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-4 text-[2.1rem] leading-[1.12] font-bold text-white! sm:text-[2.8rem] lg:text-[3.3rem]"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/80"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button to="/enquiry" variant="gold" size="lg" arrow>
                Enquire Now
              </Button>
              <Button to="/contact" variant="outline-light" size="lg" icon={Headphones}>
                Talk to Our Counsellor
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
