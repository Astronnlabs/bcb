import { BatteryLow } from 'lucide-react'
import useSeo from '../components/useSeo'
import Button from '../components/Button'
import { Blob, Sparkle } from '../components/Decor'

export default function NotFound() {
  useSeo('Page not found', 'The page you are looking for could not be found.')
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Blob className="top-0 left-1/2 h-[480px] w-[480px] -translate-x-1/2" />
      <Sparkle className="top-24 right-[20%] h-8 w-8 animate-float" />
      <div className="container-x relative text-center">
        <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-forest text-gold shadow-lift">
          <BatteryLow className="h-11 w-11" aria-hidden="true" />
        </span>
        <p className="mt-8 font-serif text-7xl font-bold text-gold sm:text-8xl">404</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Looks like this page ran out of charge.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink/80">The page you’re looking for doesn’t exist or may have moved.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" arrow>
            Back to Home
          </Button>
          <Button to="/courses" variant="outline">
            Browse Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
