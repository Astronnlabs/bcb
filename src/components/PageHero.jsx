import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Blob, Sparkle, Ring, DotGrid } from './Decor'

/** Shared hero banner for inner pages: editorial heading left, rounded image right. */
export default function PageHero({ eyebrow, title, description, image, imageAlt = '', crumbs = [], children, aside }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-10 lg:pb-20">
      <Blob className="-top-40 -left-40 h-[420px] w-[420px] opacity-70" />
      <Blob className="top-24 -right-32 h-[360px] w-[360px] bg-gold-soft/40!" variant={2} />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-[13.5px] text-ink/70">
          <Link to="/" className="hover:text-brand">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              {c.to ? (
                <Link to={c.to} className="hover:text-brand">{c.label}</Link>
              ) : (
                <span className="font-semibold text-forest" aria-current="page">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={`grid items-center gap-10 ${image || aside ? 'lg:grid-cols-[1.05fr_1fr] lg:gap-14' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.8, 0.3, 1] }}
            className={image || aside ? '' : 'mx-auto max-w-3xl text-center'}
          >
            {eyebrow && <span className={`eyebrow ${image || aside ? '' : 'justify-center'}`}>{eyebrow}</span>}
            <h1 className="mt-4 text-[2.4rem] leading-[1.08] font-bold sm:text-5xl lg:text-[3.6rem]">{title}</h1>
            {description && <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/85 sm:text-lg">{description}</p>}
            {children && <div className="mt-8">{children}</div>}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.8, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <DotGrid className="-bottom-6 -left-6 h-28 w-28" />
              <Ring className="-top-8 -right-6 h-28 w-28 animate-spin-slow" />
              <div className="relative overflow-hidden rounded-[32px] rounded-tr-[110px] shadow-lift">
                <img src={image} alt={imageAlt} className="aspect-[5/4] w-full object-cover" fetchpriority="high" />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/25 to-transparent" />
              </div>
              <Sparkle className="-bottom-4 right-10 h-9 w-9 animate-float" />
            </motion.div>
          )}
          {!image && aside}
        </div>
      </div>
    </section>
  )
}
