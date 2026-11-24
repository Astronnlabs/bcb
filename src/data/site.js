/**
 * Central institute information.
 * ⚠️ Everything marked PLACEHOLDER must be replaced with real institute details before launch.
 */
export const site = {
  name: 'Bengal Career Bridge',
  shortName: 'BCB',
  tagline: 'Connecting Talent to Tomorrow',
  description:
    'Bengal Career Bridge is an Electric Vehicle (EV) skills and training institute that prepares learners for careers in electric mobility through practical, industry-focused training, mentorship and career support.',

  // PLACEHOLDER contact details
  contact: {
    address: '[Institute Address], Kolkata, West Bengal – [PIN]',
    phone: '+91 00000 00000',
    phoneHref: 'tel:+910000000000',
    whatsapp: '+91 00000 00000',
    email: 'info@yourdomain.com',
    hours: 'Mon – Sat · 10:00 AM – 6:00 PM',
    // Replace with your exact Google Maps embed URL (Maps → Share → Embed a map)
    mapEmbed: 'https://www.google.com/maps?q=Kolkata,West%20Bengal&output=embed',
  },

  // PLACEHOLDER social links
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },

  // PLACEHOLDER statistics — replace "XX" values with verified figures only.
  stats: [
    { value: 'XXX+', label: 'Students Trained', note: 'Replace with verified figure' },
    { value: '6', label: 'EV Courses', note: 'Specialised EV programmes' },
    { value: 'XX+', label: 'Industry Partners', note: 'Replace with verified figure' },
    { value: '100%', label: 'Placement Support', note: 'Assistance for every learner' },
  ],

  // Link to your institute story video (YouTube etc). PLACEHOLDER.
  storyVideoUrl: '',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses', dropdown: true },
  { label: 'Placement', to: '/placement' },
  { label: 'Success Stories', to: '/success-stories' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
