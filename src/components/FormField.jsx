import { AlertCircle, Loader2 } from 'lucide-react'

export const Spinner = ({ className = '', ...p }) => <Loader2 {...p} className={`${className} animate-spin`} />


/** Accessible label + control + error message wrapper. */
export default function FormField({ id, label, required, error, hint, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-red-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {error}
        </p>
      ) : (
        hint && <p className="mt-1.5 text-[12.5px] text-ink/55">{hint}</p>
      )}
    </div>
  )
}

/** Props to wire a control to its error state. */
export const fieldProps = (id, error) => ({
  id,
  name: id,
  'aria-invalid': error ? 'true' : 'false',
  'aria-describedby': error ? `${id}-error` : undefined,
  className: `field ${error ? 'field-error' : ''}`,
})
