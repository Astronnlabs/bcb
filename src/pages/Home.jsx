import useSeo from '../components/useSeo'
import Hero from '../components/home/Hero'
import FeaturesStrip from '../components/home/FeaturesStrip'
import AboutIntro from '../components/home/AboutIntro'
import PopularCourses from '../components/home/PopularCourses'
import PlacementSupport from '../components/home/PlacementSupport'
import CTASection from '../components/CTASection'

export default function Home() {
  useSeo(
    null,
    'Bridging EV learning to real careers. Industry-focused Electric Vehicle training in battery technology, BMS, motors, charging infrastructure and diagnostics with hands-on labs and placement assistance.',
  )
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <AboutIntro />
      <PopularCourses />
      <PlacementSupport />
      <CTASection />
    </>
  )
}
