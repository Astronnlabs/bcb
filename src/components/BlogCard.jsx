import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import Reveal from './Reveal'
import { formatDate } from '../data/blogs'

export default function BlogCard({ post, index = 0 }) {
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 0.1}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-forest/[0.07] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
    >
      <Link to={`/blog/${post.slug}`} className="img-zoom relative block aspect-[16/10] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[11.5px] font-bold tracking-wide text-deep uppercase">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-4 text-[13px] text-ink/65">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden="true" /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" /> {post.readTime}
          </span>
        </div>
        <h3 className="mt-3 text-[1.25rem] leading-snug font-bold">
          <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-brand">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink/80">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold text-forest transition-colors hover:text-brand"
          aria-label={`Read article: ${post.title}`}
        >
          Read Article
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  )
}
