import useSeo from '../components/useSeo'
import PageHero from '../components/PageHero'
import { site } from '../data/site'

// ⚠️ PLACEHOLDER legal text — have these reviewed by a qualified professional before launch.
const content = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', `When you submit an enquiry or contact form, ${site.name} collects the details you provide, such as your name, phone number, email address, qualification and course interest.`],
      ['How we use it', 'We use your information only to respond to your enquiry, provide course guidance and share relevant updates you have agreed to receive.'],
      ['Sharing', 'We do not sell your personal information. Data may be processed by service providers that help us operate this website, under appropriate safeguards.'],
      ['Your choices', `You may request access to, correction of, or deletion of your data by emailing ${site.contact.email}.`],
      ['Updates', 'This policy may be updated from time to time. The latest version will always be available on this page.'],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['Use of this website', `This website provides information about ${site.name} and its EV training programmes. Content is for general information and may change without notice.`],
      ['Courses & fees', 'Course content, duration, schedules and fees are subject to change. Confirmed details are provided at the time of admission.'],
      ['Placement assistance', 'Placement assistance includes training, preparation and guidance. It does not constitute a guarantee of employment.'],
      ['Intellectual property', `All content, logos and materials on this site belong to ${site.name} unless stated otherwise.`],
      ['Contact', `For questions about these terms, contact ${site.contact.email}.`],
    ],
  },
}

export default function Legal({ kind = 'privacy' }) {
  const page = content[kind]
  useSeo(page.title, `${page.title} for ${site.name}.`)
  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} crumbs={[{ label: page.title }]} description="Last updated: [Date] · Placeholder text to be reviewed before launch." />
      <section className="pb-24">
        <div className="container-x max-w-3xl!">
          <div className="prose-ev rounded-[28px] border border-forest/[0.07] bg-white p-7 shadow-soft sm:p-12">
            {page.sections.map(([h, p]) => (
              <div key={h}>
                <h2>{h}</h2>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
