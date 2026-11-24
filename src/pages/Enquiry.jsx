import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Send, AlertTriangle, PhoneCall, Clock, ShieldCheck, Building, Laptop, CalendarDays } from 'lucide-react'
import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import FormField, { fieldProps, Spinner } from '../components/FormField'
import useForm from '../components/useForm'
import { Sparkle } from '../components/Decor'
import { rules } from '../utils/validation'
import { submitEnquiry } from '../services/forms'
import { courses } from '../data/courses'
import { site } from '../data/site'

const qualifications = ['10th Pass', '12th Pass', 'ITI', 'Diploma', 'B.Tech / B.E.', 'B.Sc', 'Other Graduate', 'Postgraduate', 'Working Professional']
const modes = [
  { value: 'Classroom', icon: Building, text: 'On-campus classes + labs' },
  { value: 'Hybrid', icon: Laptop, text: 'Online theory + on-campus labs' },
  { value: 'Weekend', icon: CalendarDays, text: 'Weekend batches' },
]

const initial = { fullName: '', phone: '', email: '', course: '', qualification: '', mode: '', message: '', consent: false, website: '' }

const schema = {
  fullName: rules.name,
  phone: rules.phone,
  email: rules.email,
  course: rules.required('Please select a course'),
  qualification: rules.required('Qualification'),
  mode: rules.required('Preferred learning mode'),
  message: rules.maxLen(1000, 'Message'),
  consent: (v) => (!v ? 'Please agree to be contacted.' : ''),
}

export default function Enquiry() {
  useSeo('Enquiry', 'Enquire about EV courses â€” share your details and our counsellors will help you choose the right electric vehicle training programme.')
  const [params] = useSearchParams()
  const { values, errors, status, setStatus, onChange, onBlur, handleSubmit, reset, setValues } = useForm(initial, schema, submitEnquiry)

  useEffect(() => {
    const slug = params.get('course')
    const c = courses.find((x) => x.slug === slug)
    if (c) setValues((v) => ({ ...v, course: c.title }))
  }, [params, setValues])

  const f = (id) => ({ ...fieldProps(id, errors[id]), value: values[id], onChange, onBlur })

  return (
    <>
      <PageHero
        eyebrow="Enquiry"
        title={
          <>
            Take the First Step Toward an <span className="hl">EV Career</span>
          </>
        }
        description="Share a few details and our counsellors will get in touch with course guidance, batch timings and fee information."
        crumbs={[{ label: 'Enquiry' }]}
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-10">
          <Reveal className="relative rounded-[30px] border border-forest/[0.07] bg-white p-6 shadow-card sm:p-10">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center"
                  role="status"
                >
                  <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-mint text-brand">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h2 className="mt-6 text-3xl font-bold">Thank you, {values.fullName.split(' ')[0]}!</h2>
                  <p className="mx-auto mt-3 max-w-md text-ink/80">
                    Your enquiry for <strong className="text-forest">{values.course}</strong> has been received. Our counsellor will contact you soon.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Button to="/courses" arrow>
                      Explore Courses
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Submit Another Enquiry
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" noValidate onSubmit={handleSubmit} exit={{ opacity: 0 }} aria-label="Course enquiry form">
                  <h2 className="text-2xl font-bold sm:text-3xl">Enquiry Form</h2>
                  <p className="mt-1.5 text-[15px] text-ink/70">
                    Fields marked <span className="text-red-500">*</span> are required.
                  </p>

                  {status === 'error' && (
                    <div role="alert" className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                      <p className="text-sm">
                        Something went wrong while sending your enquiry. Please try again or call us at {site.contact.phone}.
                        <button type="button" onClick={() => setStatus('idle')} className="ml-1 font-semibold underline">
                          Dismiss
                        </button>
                      </p>
                    </div>
                  )}

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <FormField id="fullName" label="Full Name" required error={errors.fullName} className="sm:col-span-2">
                      <input type="text" autoComplete="name" placeholder="Enter your full name" {...f('fullName')} />
                    </FormField>
                    <FormField id="phone" label="Phone Number" required error={errors.phone}>
                      <input type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" {...f('phone')} />
                    </FormField>
                    <FormField id="email" label="Email Address" required error={errors.email}>
                      <input type="email" autoComplete="email" placeholder="you@example.com" {...f('email')} />
                    </FormField>
                    <FormField id="course" label="Interested Course" required error={errors.course}>
                      <select {...f('course')} className={`${fieldProps('course', errors.course).className} cursor-pointer`}>
                        <option value="">Select a course</option>
                        {courses.map((c) => (
                          <option key={c.slug} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                        <option value="Not sure â€“ need guidance">Not sure â€“ need guidance</option>
                      </select>
                    </FormField>
                    <FormField id="qualification" label="Educational Qualification" required error={errors.qualification}>
                      <select {...f('qualification')} className={`${fieldProps('qualification', errors.qualification).className} cursor-pointer`}>
                        <option value="">Select qualification</option>
                        {qualifications.map((q) => (
                          <option key={q}>{q}</option>
                        ))}
                      </select>
                    </FormField>

                    <fieldset className="sm:col-span-2" aria-describedby={errors.mode ? 'mode-error' : undefined}>
                      <legend className="label">
                        Preferred Learning Mode <span className="text-red-500">*</span>
                      </legend>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {modes.map(({ value, icon: I, text }) => {
                          const checked = values.mode === value
                          return (
                            <label
                              key={value}
                              className={`flex cursor-pointer items-start gap-3 rounded-2xl border-[1.5px] p-4 transition ${
                                checked ? 'border-brand bg-mint/70 ring-4 ring-brand/10' : errors.mode ? 'border-red-300' : 'border-forest/15 hover:border-brand/50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="mode"
                                id={value === 'Classroom' ? 'mode' : undefined}
                                value={value}
                                checked={checked}
                                onChange={onChange}
                                onBlur={onBlur}
                                className="sr-only"
                              />
                              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${checked ? 'bg-forest text-gold' : 'bg-mint text-brand'}`}>
                                <I className="h-5 w-5" aria-hidden="true" />
                              </span>
                              <span>
                                <span className="block font-semibold text-forest">{value}</span>
                                <span className="text-[12.5px] leading-snug text-ink/65">{text}</span>
                              </span>
                            </label>
                          )
                        })}
                      </div>
                      {errors.mode && (
                        <p id="mode-error" role="alert" className="mt-1.5 text-[13px] font-medium text-red-600">
                          {errors.mode}
                        </p>
                      )}
                    </fieldset>

                    <FormField id="message" label="Message" error={errors.message} hint={`${values.message.length}/1000 Â· Optional`} className="sm:col-span-2">
                      <textarea rows={4} placeholder="Tell us about your goals or any questionsâ€¦" {...f('message')} className={`${fieldProps('message', errors.message).className} resize-y`} />
                    </FormField>

                    {/* honeypot (hidden from humans) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="flex cursor-pointer items-start gap-3 text-[14.5px] text-ink/85">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={values.consent}
                          onChange={onChange}
                          onBlur={onBlur}
                          aria-invalid={errors.consent ? 'true' : 'false'}
                          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#063D35]"
                        />
                        I agree to be contacted by {site.name} by phone, email or WhatsApp regarding my enquiry.
                      </label>
                      {errors.consent && (
                        <p role="alert" className="mt-1.5 text-[13px] font-medium text-red-600">
                          {errors.consent}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={status === 'submitting'} icon={status === 'submitting' ? Spinner : Send}>
                    {status === 'submitting' ? 'Submittingâ€¦' : 'Submit Enquiry'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <aside className="space-y-6">
            <Reveal delay={0.1} className="grain relative overflow-hidden rounded-[30px] bg-forest p-7 text-white shadow-lift">
              <Sparkle className="top-6 right-6 h-6 w-6 animate-float" />
              <h2 className="text-2xl font-bold text-white!">What happens next?</h2>
              <ol className="mt-6 space-y-5">
                {[
                  ['We review your enquiry', 'Our team checks your course interest and background.'],
                  ['A counsellor calls you', 'Get guidance on the best-fit course, batches and fees.'],
                  ['Visit & enrol', 'Visit our campus or enrol directly to begin learning.'],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-bold text-deep">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{t}</p>
                      <p className="mt-0.5 text-sm text-white/70">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.15} className="space-y-4 rounded-[30px] bg-mint p-7">
              <a href={site.contact.phoneHref} className="flex items-center gap-3 font-semibold text-forest">
                <PhoneCall className="h-5 w-5 text-brand" /> {site.contact.phone}
              </a>
              <p className="flex items-center gap-3 text-ink/80">
                <Clock className="h-5 w-5 text-brand" /> {site.contact.hours}
              </p>
              <p className="flex items-start gap-3 text-sm text-ink/70">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> Your details are kept private and used only to respond to your enquiry.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
