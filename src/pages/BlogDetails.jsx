import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, CalendarDays, Clock, PenLine, ArrowLeft, Share2 } from 'lucide-react'
import useSeo from '../components/useSeo'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import Icon from '../components/Icon'
import NotFound from './NotFound'
import { Blob } from '../components/Decor'
import { blogs, getBlog, formatDate } from '../data/blogs'
import { courses } from '../data/courses'

function ContentBlock({ b }) {
  if (b.type === 'h2') return <h2>{b.text}</h2>
  if (b.type === 'h3') return <h3>{b.text}</h3>
  if (b.type === 'quote') return <blockquote>“{b.text}”</blockquote>
  if (b.type === 'ul')
    return (
      <ul>
        {b.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    )
  return <p>{b.text}</p>
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = getBlog(slug)
  useSeo(post?.title || 'Article not found', post?.excerpt, post?.image)
  if (!post) return <NotFound />

  const related = [
    ...blogs.filter((b) => b.slug !== slug && b.category === post.category),
    ...blogs.filter((b) => b.slug !== slug && b.category !== post.category),
  ].slice(0, 3)

  const share = async () => {
    const data = { title: post.title, url: window.location.href }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard?.writeText(window.location.href)
      alert('Link copied to clipboard')
    }
  }

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-8 pb-10">
          <Blob className="-top-40 -right-40 h-[420px] w-[420px]" />
          <div className="container-x relative max-w-4xl!">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-[13.5px] text-ink/70">
              <Link to="/" className="hover:text-brand">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to="/blog" className="hover:text-brand">Blog</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="line-clamp-1 font-semibold text-forest" aria-current="page">{post.title}</span>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="rounded-full bg-gold px-4 py-1.5 text-xs font-bold tracking-wider text-deep uppercase">{post.category}</span>
              <h1 className="mt-5 text-[2.2rem] leading-[1.12] font-bold sm:text-5xl lg:text-[3.3rem]">{post.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/70">
                <span className="inline-flex items-center gap-1.5"><PenLine className="h-4 w-4 text-brand" /> {post.author}</span>
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-brand" /> {formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand" /> {post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="container-x max-w-5xl!">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-[30px] shadow-lift"
          >
            <img src={post.image} alt={post.imageAlt} className="aspect-[16/8] w-full object-cover" />
          </motion.div>
        </div>

        <div className="container-x grid max-w-5xl! gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_250px]">
          <div className="prose-ev min-w-0">
            {post.content.map((b, i) => (
              <ContentBlock key={i} b={b} />
            ))}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-forest/10 pt-6">
              <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-forest hover:text-brand">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
              <button onClick={share} className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 font-semibold text-forest hover:bg-forest hover:text-white">
                <Share2 className="h-4 w-4" /> Share
              </button>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] bg-forest p-6 text-white">
              <p className="font-serif text-xl leading-snug font-bold">Want to learn this hands-on?</p>
              <p className="mt-2 text-sm text-white/70">Explore practical EV courses with lab training.</p>
              <Button to="/courses" variant="gold" size="sm" arrow className="mt-5 w-full">
                View Courses
              </Button>
            </div>
            <div className="rounded-[24px] border border-forest/[0.07] bg-white p-5 shadow-soft">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">Popular courses</p>
              <ul className="mt-3 space-y-1">
                {courses.slice(0, 4).map((c) => (
                  <li key={c.slug}>
                    <Link to={`/courses/${c.slug}`} className="flex items-center gap-3 rounded-xl p-2 text-[14.5px] font-semibold text-forest hover:bg-mint">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-mint text-brand">
                        <Icon name={c.icon} className="h-4 w-4" />
                      </span>
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-cream-2/70 py-16 sm:py-20" aria-label="Related articles">
        <div className="container-x">
          <span className="eyebrow">Keep Reading</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-[2.4rem]">
            Related <span className="hl">Articles</span>
          </h2>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b, i) => (
              <BlogCard key={b.slug} post={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
