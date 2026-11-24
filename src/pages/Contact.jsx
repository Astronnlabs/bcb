import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertTriangle, MessageCircle } from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import FormField, { fieldProps, Spinner } from '../components/FormField'
import useForm from '../components/useForm'
import { rules } from '../utils/validation'
import { submitContact } from '../services/forms'
import { site } from '../data/site'

const info = [
  { icon: MapPin, title: 'Visit Us', lines: [site.contact.address] },
  { icon: Phone, title: 'Call Us', lines: [site.contact.phone], href: site.contact.phoneHref },
  { icon: Mail, title: 'Email Us', lines: [site.contact.email], href: `mailto:${site.contact.email}` },
  { icon: Clock, title: 'Office Hours', lines: [site.contact.hours] },
]

const initial = { name: '', email: '', phone: '', subject: '', message: '', website: '' }
const schema = {
  name: rules.name,
  email: rules.email,
  phone: rules.phone,
  subject: rules.required('Subject'),
  message: [rules.required('Message'), rules.maxLen(1500, 'Message')],
}

export default function Contact() {
  useSeo('Contact Us', `Contact ${site.name} for EV course information, admissions, campus visits and career counselling.`)
  const { values, errors, status, setStatus, onChange, onBlur, handleSubmit, reset } = useForm(initial, schema, submitContact)
  const f = (id) => ({ ...fieldProps(id, errors[id]), value: values[id], onChange, onBlur })

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Letâ€™s Talk About Your <span className="hl">EV Future</span>
          </>
        }
        description="Questions about courses, admissions or careers? Reach out â€” our team is happy to help."
        image="/images/campus.webp"
        imageAlt="Institute campus"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="pb-6" aria-label="Contact information">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {info.map(({ icon: I, title, lines, href }, i) => (
            <Reveal
              key={title}
              delay={i * 0.06}
              className="group rounded-[24px] border border-forest/[0.07] bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint text-brand transition-colors group-hover:bg-forest group-hover:text-gold">
                <I className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              {lines.map((l) =>
                href ? (
                  <a key={l} href={href} className="mt-1.5 block break-words text-ink/80 hover:text-brand">
                    {l}
                  </a>
                ) : (
                  <p key={l} className="mt-1.5 text-ink/80">
                    {l}
                  </p>
                ),
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-label="Contact form and map">
        <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="rounded-[30px] border border-forest/[0.07] bg-white p-6 shadow-card sm:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center" role="status">
                  <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-mint text-brand">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h2 className="mt-6 text-3xl font-bold">Message sent!</h2>
                  <p className="mx-auto mt-3 max-w-sm text-ink/80">Thanks for reaching out. Weâ€™ll get back to you as soon as possible.</p>
                  <Button variant="outline" onClick={reset} className="mt-8">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form key="form" noValidate onSubmit={handleSubmit} exit={{ opacity: 0 }} aria-label="Contact form">
                  <span className="eyebrow">Send a message</span>
                  <h2 className="mt-3 text-[2rem] leading-tight font-bold">
                    Weâ€™d Love to <span className="hl">Hear from You</span>
                  </h2>
                  {status === 'error' && (
                    <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      <AlertTriangle className="h-5 w-5 shrink-0" /> Could not send your message. Please try again.
                      <button type="button" onClick={() => setStatus('idle')} className="font-semibold underline">
                        Dismiss
                      </button>
                    </div>
                  )}
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <FormField id="name" label="Full Name" required error={errors.name}>
                      <input autoComplete="name" placeholder="Your name" {...f('name')} />
                    </FormField>
                    <FormField id="phone" label="Phone" required error={errors.phone}>
                      <input type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" {...f('phone')} />
                    </FormField>
                    <FormField id="email" label="Email" required error={errors.email} className="sm:col-span-2">
                      <input type="email" autoComplete="email" placeholder="you@example.com" {...f('email')} />
                    </FormField>
                    <FormField id="subject" label="Subject" required error={errors.subject} className="sm:col-span-2">
                      <select {...f('subject')} className={`${fieldProps('subject', errors.subject).className} cursor-pointer`}>
                        <option value="">Select a topic</option>
                        <option>Course information</option>
                        <option>Admissions & fees</option>
                        <option>Placement assistance</option>
                        <option>Campus visit</option>
                        <option>Partnership / corporate training</option>
                        <option>Other</option>
                      </select>
                    </FormField>
                    <FormField id="message" label="Message" required error={errors.message} className="sm:col-span-2">
                      <textarea rows={5} placeholder="How can we help?" {...f('message')} className={`${fieldProps('message', errors.message).className} resize-y`} />
                    </FormField>
                    <div className="hidden" aria-hidden="true">
                      <input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" disabled={status === 'submitting'} icon={status === 'submitting' ? Spinner : Send}>
                    {status === 'submitting' ? 'Sendingâ€¦' : 'Send Message'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} className="relative min-h-[320px] flex-1 overflow-hidden rounded-[30px] border border-forest/[0.07] bg-mint shadow-card">
              {/* Google Maps embed placeholder â€” update site.contact.mapEmbed with your exact location */}
              <iframe
                title={`${site.name} location map`}
                src={site.contact.mapEmbed}
                className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-forest shadow-soft">Map location placeholder</span>
            </Reveal>
            <Reveal delay={0.15} className="rounded-[30px] bg-forest p-7 text-white">
              <h2 className="text-2xl font-bold text-white!">Follow Our Journey</h2>
              <p className="mt-2 text-white/70">Stay updated with EV insights, batch announcements and student activities.</p>
              <SocialLinks className="mt-5" />
              <a
                href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-deep transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
