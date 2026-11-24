import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Search, X, ArrowRight, Phone } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import Icon from './Icon'
import SearchOverlay from './SearchOverlay'
import { navLinks, site } from '../data/site'
import { courses } from '../data/courses'

const linkBase =
  'relative py-2 text-[15px] font-medium transition-colors hover:text-brand after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:rounded-full after:bg-gold after:transition-all after:duration-300'

function CoursesDropdown({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="absolute top-full left-1/2 z-50 w-[640px] -translate-x-1/2 pt-4"
    >
      <div className="grid grid-cols-[1fr_200px] overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-lift">
        <ul className="grid grid-cols-1 gap-1 p-3">
          {courses.map((c) => (
            <li key={c.slug}>
              <Link
                to={`/courses/${c.slug}`}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-mint"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-brand transition group-hover:bg-forest group-hover:text-gold">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[14.5px] font-semibold text-forest">{c.title}</span>
                  <span className="text-[12.5px] text-ink/60">
                    {c.level} · {c.duration}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative flex flex-col justify-end overflow-hidden bg-forest p-5 text-white">
          <img src="/images/hero-ev-charging.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="relative">
            <p className="font-serif text-xl leading-tight font-bold">Not sure where to start?</p>
            <p className="mt-2 text-[13px] text-white/75">Compare all EV programmes or talk to a counsellor.</p>
            <Link
              to="/courses"
              onClick={onNavigate}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-[13px] font-bold text-deep"
            >
              All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileCourses, setMobileCourses] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const openDrop = () => {
    clearTimeout(closeTimer.current)
    setDropOpen(true)
  }
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 140)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/90 shadow-[0_8px_30px_-18px_rgba(6,61,53,0.35)] backdrop-blur-md' : 'bg-cream'
        }`}
      >
        <div className={`container-x flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'h-[76px]' : 'h-[88px]'}`}>
          <Logo className={`transition-all duration-300 ${scrolled ? 'h-[64px]' : 'h-[78px]'}`} />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-8">
              {navLinks.map((l) =>
                l.dropdown ? (
                  <li key={l.to} className="relative" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `${linkBase} inline-flex items-center gap-1 ${
                          isActive ? 'text-forest after:w-full' : 'text-ink after:w-0 hover:after:w-full'
                        }`
                      }
                      aria-haspopup="true"
                      aria-expanded={dropOpen}
                      onFocus={openDrop}
                    >
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </NavLink>
                    <AnimatePresence>{dropOpen && <CoursesDropdown onNavigate={() => setDropOpen(false)} />}</AnimatePresence>
                  </li>
                ) : (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `${linkBase} ${isActive ? 'font-semibold text-forest after:w-full' : 'text-ink after:w-0 hover:after:w-full'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="grid h-11 w-11 place-items-center rounded-full text-forest transition hover:bg-mint"
            >
              <Search className="h-5 w-5" />
            </button>
            <span className="hidden sm:block">
              <Button to="/enquiry" arrow size="sm" className="px-5! py-3! whitespace-nowrap">
                Enquire Now
              </Button>
            </span>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-deep/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col bg-cream shadow-lift lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-forest/10 px-5 py-3">
                <Logo className="h-14" />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full bg-mint text-forest"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="space-y-1">
                  {navLinks.map((l) =>
                    l.dropdown ? (
                      <li key={l.to}>
                        <div className="flex items-center">
                          <NavLink
                            to={l.to}
                            className={({ isActive }) =>
                              `flex-1 rounded-xl px-3 py-3 text-[17px] font-semibold ${isActive ? 'bg-mint text-forest' : 'text-ink'}`
                            }
                          >
                            {l.label}
                          </NavLink>
                          <button
                            onClick={() => setMobileCourses((v) => !v)}
                            aria-label="Toggle course list"
                            aria-expanded={mobileCourses}
                            className="grid h-11 w-11 place-items-center rounded-xl text-forest"
                          >
                            <ChevronDown className={`h-5 w-5 transition-transform ${mobileCourses ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        <AnimatePresence initial={false}>
                          {mobileCourses && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-3 overflow-hidden border-l-2 border-gold/60 pl-3"
                            >
                              {courses.map((c) => (
                                <li key={c.slug}>
                                  <Link to={`/courses/${c.slug}`} className="block rounded-lg px-3 py-2.5 text-[15px] text-ink hover:bg-mint">
                                    {c.title}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          end={l.to === '/'}
                          className={({ isActive }) =>
                            `block rounded-xl px-3 py-3 text-[17px] font-semibold ${isActive ? 'bg-mint text-forest' : 'text-ink'}`
                          }
                        >
                          {l.label}
                        </NavLink>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
              <div className="space-y-3 border-t border-forest/10 p-5">
                <Button to="/enquiry" arrow className="w-full">
                  Enquire Now
                </Button>
                <a href={site.contact.phoneHref} className="flex items-center justify-center gap-2 text-sm font-semibold text-forest">
                  <Phone className="h-4 w-4 text-brand" /> {site.contact.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
