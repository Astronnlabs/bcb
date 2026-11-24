export const rules = {
  required: (label) => (v) => (!String(v ?? '').trim() ? `${label} is required.` : ''),
  name: (v) => {
    const s = String(v ?? '').trim()
    if (!s) return 'Full name is required.'
    if (s.length < 3) return 'Please enter your full name.'
    if (!/^[\p{L} .'-]+$/u.test(s)) return 'Name can only contain letters, spaces and . \' -'
    return ''
  },
  phone: (v) => {
    const digits = String(v ?? '').replace(/[\s-]/g, '').replace(/^(\+91|0091|91(?=\d{10}$)|0(?=\d{10}$))/, '')
    if (!digits) return 'Phone number is required.'
    if (!/^[6-9]\d{9}$/.test(digits)) return 'Enter a valid 10-digit Indian mobile number.'
    return ''
  },
  email: (v) => {
    const s = String(v ?? '').trim()
    if (!s) return 'Email address is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return 'Enter a valid email address.'
    return ''
  },
  maxLen: (n, label = 'This field') => (v) => (String(v ?? '').length > n ? `${label} must be under ${n} characters.` : ''),
}

/** Runs a { field: validatorFn | validatorFn[] } schema and returns { field: message }. */
export function validate(values, schema) {
  const errors = {}
  for (const [field, fns] of Object.entries(schema)) {
    for (const fn of [].concat(fns)) {
      const msg = fn(values[field])
      if (msg) {
        errors[field] = msg
        break
      }
    }
  }
  return errors
}
