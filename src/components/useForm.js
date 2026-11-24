import { useState } from 'react'
import { validate } from '../utils/validation'

/** Small form-state hook: values, touched-based errors, submit status. */
export default function useForm(initial, schema, onSubmit) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const runField = (name, v) => {
    if (!schema[name]) return
    const e = validate({ ...values, [name]: v }, { [name]: schema[name] })
    setErrors((prev) => ({ ...prev, [name]: e[name] || '' }))
  }

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    const v = type === 'checkbox' ? checked : value
    setValues((p) => ({ ...p, [name]: v }))
    if (touched[name]) runField(name, v)
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched((p) => ({ ...p, [name]: true }))
    runField(name, values[name])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const all = validate(values, schema)
    setErrors(all)
    setTouched(Object.fromEntries(Object.keys(schema).map((k) => [k, true])))
    if (Object.values(all).some(Boolean)) {
      const first = Object.keys(all).find((k) => all[k])
      document.getElementById(first)?.focus()
      return
    }
    if (values.website) return // honeypot filled → silently ignore bots
    setStatus('submitting')
    try {
      await onSubmit(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(initial)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  return { values, errors, status, setStatus, onChange, onBlur, handleSubmit, reset, setValues }
}
