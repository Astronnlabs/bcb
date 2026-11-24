import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { Leaf, Sparkle } from './Decor'
import SocialLinks from './SocialLinks'
import { site } from '../data/site'
import { courses } from '../data/courses'

const quick = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'All Courses', to: '/courses' },
  { label: 'Placement Assistance', to: '/placement' },
  { label: 'Success Stories', to: '/success-stories' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Enquiry', to: '/enquiry' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-deep text-white/75">
      <Leaf className="-top-6 -right-6 h-40 w-40 opacity-15" color="#087C68" />
      <Sparkle className="bottom-24 left-[46%] h-5 w-5 opacity-60" />
      <div className="container-x relative grid gap-12 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-10 lg:pt-20">
        <div>
          <div className="inline-block rounded-3xl bg-white p-2.5 shadow-card">
            <Logo className="h-28" blend={false} />
          </div>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
            {site.name} is an Electric Vehicle skills and training institute bridging EV learning to real careers through
            practical training, expert mentorship and career support.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-white!">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-[15px]">
            {quick.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-white!">EV Courses</h3>
          <ul className="mt-5 space-y-2.5 text-[15px]">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link to={`/courses/${c.slug}`} className="group inline-flex items-start gap-1 transition-colors hover:text-gold">
                  {c.title}
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-bold text-white!">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a href={site.contact.phoneHref} className="hover:text-gold">{site.contact.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="break-all hover:text-gold">{site.contact.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-[13.5px] sm:flex-row sm:text-left">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
