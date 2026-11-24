import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, CalendarDays, Clock, X } from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { blogs, blogCategories, formatDate } from '../data/blogs'

export default function Blog() {
  useSeo(
    'EV Blog',
    'Educational articles on electric vehicle technology, EV batteries, battery management systems, charging infrastructure and EV careers in India.',
  )
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const featured = blogs.find((b) => b.featured) || blogs[0]
  const filtering = q.trim() || cat !== 'All'

  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    return blogs.filter(
      (b) =>
        (filtering || b.slug !== featured.slug) &&
        (cat === 'All' || b.category === cat) &&
        (!s || `${b.title} ${b.excerpt} ${b.category}`.toLowerCase().includes(s)),
    )
  }, [q, cat, featured.slug, filtering])

  const counts = useMemo(() => Object.fromEntries(blogCategories.map((c) => [c, c === 'All' ? blogs.length : blogs.filter((b) => b.category === c).length])), [])

  return (
    <>
      <PageHero
        eyebrow="EV Knowledge Hub"
        title={
          <>
            Insights to Power Your <span className="hl">EV Learning</span>
          </>
        }
        description="Clear, practical articles on electric vehicle technology, batteries, charging and careers — written for students and professionals."
        crumbs={[{ label: 'Blog' }]}
      >
        <label className="relative mx-auto block max-w-lg">
          <span className="sr-only">Search articles</span>
          <Search className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-brand" aria-hidden="true" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="field rounded-full! py-4! pl-13 shadow-soft" />
        </label>
      </PageHero>

      {/* Featured */}
      {!filtering && (
        <section className="pb-8" aria-label="Featured article">
          <div className="container-x">
            <Reveal className="group grid overflow-hidden rounded-[30px] border border-forest/[0.07] bg-white shadow-card lg:grid-cols-[1.15fr_1fr]">
              <Link to={`/blog/${featured.slug}`} className="img-zoom relative block min-h-[260px] overflow-hidden" tabIndex={-1} aria-hidden="true">
                <img src={featured.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute top-5 left-5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold tracking-wider text-deep uppercase">Featured</span>
              </Link>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="eyebrow">{featured.category}</span>
                <h2 className="mt-4 text-[1.9rem] leading-tight font-bold sm:text-[2.4rem]">
                  <Link to={`/blog/${featured.slug}`} className="transition-colors hover:text-brand">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[16.5px] leading-relaxed text-ink/80">{featured.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-ink/65">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {formatDate(featured.date)}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-forest px-6 py-3 font-semibold text-white transition hover:bg-brand"
                >
                  Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16" aria-label="All articles">
        <div className="container-x">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">{filtering ? 'Search Results' : 'Latest Articles'}</h2>
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="group" aria-label="Filter by category">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                    cat === c ? 'bg-forest text-white' : 'bg-mint text-forest hover:bg-forest/10'
                  }`}
                >
                  {c} <span className="opacity-60">({counts[c]})</span>
                </button>
              ))}
            </div>
          </div>

          {list.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((b, i) => (
                <BlogCard key={b.slug} post={b} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-dashed border-forest/20 bg-white/60 px-6 py-16 text-center">
              <p className="font-serif text-2xl font-bold text-forest">No articles found.</p>
              <button
                onClick={() => {
                  setQ('')
                  setCat('All')
                }}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 font-semibold text-white"
              >
                <X className="h-4 w-4" /> Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
