import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false, className = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-gold!' : ''} ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-4 text-[2rem] leading-[1.15] font-bold sm:text-[2.5rem] lg:text-[2.85rem] ${
          light ? 'text-white!' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[16.5px] leading-relaxed ${light ? 'text-white/75' : 'text-ink/85'}`}>{description}</p>
      )}
    </Reveal>
  )
}
