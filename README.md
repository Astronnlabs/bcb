# Bengal Career Bridge — EV Training Website

React 18 + Vite 6 + Tailwind CSS 4 + React Router 6 + Framer Motion + Lucide icons.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build
```

When deploying, configure the host to serve `index.html` for all routes (SPA fallback),
e.g. Netlify `_redirects`: `/* /index.html 200`, or Vercel rewrites.

## Where things live

| What | File |
| --- | --- |
| Institute name, contact details, socials, stats, map | `src/data/site.js` |
| Courses (drives `/courses/:slug`) | `src/data/courses.js` |
| Blog articles (drives `/blog/:slug`) | `src/data/blogs.js` |
| Testimonials | `src/data/testimonials.js` |
| Form API integration point | `src/services/forms.js` |
| Design tokens (colours, fonts, shadows) | `src/index.css` (`@theme`) |
| Original logo | `public/logo/logo.jpeg` (copied from `/logo.jpeg`) |
| Images | `public/images/*.webp` |

## Placeholders to replace before launch

- `src/data/site.js` — address, PIN, phone, WhatsApp, email, office hours, Google Maps embed URL, social links, statistics (`XXX+` students trained, `XX+` industry partners), story video URL.
- `src/data/testimonials.js` — all six testimonials are samples (`placeholder: true` shows a "Sample" tag).
- `src/pages/About.jsx` — faculty names, roles and photos.
- `src/data/courses.js` — durations, modes, eligibility (confirm), fees/batch dates (not shown yet).
- `src/pages/Legal.jsx` — Privacy Policy and Terms text plus "Last updated" date (needs review).
- `src/services/forms.js` — forms currently simulate success; connect a real API.
- `public/images/` — stock photography from Unsplash; swap in photos of your own campus, labs and students.
