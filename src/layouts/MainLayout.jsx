import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function MainLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // Pages are lazy-loaded, so wait for the anchor target to exist.
    let tries = 0
    const id = setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el || ++tries > 30) {
        clearInterval(id)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)
    return () => clearInterval(id)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-forest px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="flex-1"
      >
        <Suspense
          fallback={
            <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-mint border-t-brand" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  )
}
