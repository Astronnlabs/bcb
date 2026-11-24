/**
 * FORM SUBMISSION SERVICE
 * ------------------------------------------------------------------
 * There is no backend yet. Both functions below simulate a successful
 * request so the UI (loading → success / error states) can be tested.
 *
 * 🔌 API INTEGRATION — replace the body of `post()` with a real request, e.g.
 *
 *   const res = await fetch(import.meta.env.VITE_API_URL + endpoint, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(payload),
 *   })
 *   if (!res.ok) throw new Error('Request failed')
 *   return res.json()
 *
 * Options: your own REST API, a CRM webhook, Google Apps Script,
 * Formspree, EmailJS, etc. Put the base URL in a `.env` file as
 * VITE_API_URL=https://api.example.com
 * Always validate again on the server — frontend validation is for UX only.
 */

const FAKE_DELAY = 1100

async function post(endpoint, payload) {
  // TODO: replace this simulation with a real API call (see comment above).
  await new Promise((r) => setTimeout(r, FAKE_DELAY))
  if (import.meta.env.DEV) console.info(`[forms] would POST to ${endpoint}`, payload)
  return { ok: true }
}

export const submitEnquiry = (data) => post('/enquiries', { ...data, source: 'website-enquiry', submittedAt: new Date().toISOString() })

export const submitContact = (data) => post('/contact', { ...data, source: 'website-contact', submittedAt: new Date().toISOString() })
