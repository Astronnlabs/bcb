import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-forest text-white hover:bg-brand shadow-[0_12px_30px_-12px_rgba(6,61,53,0.55)]',
  gold: 'bg-gold text-deep hover:bg-[#f0b53a] shadow-[0_12px_30px_-12px_rgba(232,169,40,0.7)]',
  outline: 'border-[1.5px] border-forest/80 text-forest hover:bg-forest hover:text-white',
  light: 'bg-white text-forest hover:bg-mint',
  'outline-light': 'border-[1.5px] border-white/70 text-white hover:bg-white hover:text-forest',
  ghost: 'text-forest hover:text-brand px-0! shadow-none',
}

const sizes = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-3.5 text-[15px]',
  lg: 'px-7 py-4 text-base',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const cls = `group inline-flex min-h-[44px] items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="h-[18px] w-[18px]" aria-hidden="true" />}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  )
}
