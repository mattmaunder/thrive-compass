import { useState, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { ChevronDown, Eye, EyeOff } from 'lucide-react'

type FormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'currency'
  | 'dropdown'
  | 'textarea'
  | 'readonly'

type FormFieldProps = {
  label: string
  type?: FormFieldType
  id?: string
  placeholder?: string
  hint?: string
  value?: string
  defaultValue?: string
  options?: { value: string; label: string }[]
  onChange?: (value: string) => void
  required?: boolean
  selectProps?: Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'value' | 'onChange'>
  textareaProps?: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'value' | 'onChange'>
}

const inputClassName =
  'w-full rounded-xl border border-[var(--color-border)] bg-[#f3f3f5] px-4 py-2.5 text-base text-navy placeholder:text-navy/50 outline-none focus:border-teal'

export function FormField({
  label,
  type = 'text',
  id,
  placeholder,
  hint,
  value,
  defaultValue,
  options = [],
  onChange,
  required,
  selectProps,
  textareaProps,
}: FormFieldProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (next: string) => {
    onChange?.(next)
  }

  let control: ReactNode

  if (type === 'readonly') {
    control = (
      <div className={`${inputClassName} text-muted`}>
        {value ?? defaultValue ?? placeholder}
      </div>
    )
  } else if (type === 'textarea') {
    control = (
      <textarea
        id={fieldId}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleChange(e.target.value)}
        className={`${inputClassName} min-h-[96px] resize-y`}
        {...textareaProps}
      />
    )
  } else if (type === 'dropdown') {
    control = (
      <div className="relative">
        <select
          id={fieldId}
          value={value}
          defaultValue={defaultValue}
          required={required}
          onChange={(e) => handleChange(e.target.value)}
          className={`${inputClassName} appearance-none pr-10`}
          {...selectProps}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
      </div>
    )
  } else if (type === 'currency') {
    control = (
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-muted">£</span>
        <input
          id={fieldId}
          type="number"
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          onChange={(e) => handleChange(e.target.value)}
          className={`${inputClassName} pl-8`}
        />
      </div>
    )
  } else if (type === 'password') {
    control = (
      <div className="relative">
        <input
          id={fieldId}
          type={showPassword ? 'text' : 'password'}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          onChange={(e) => handleChange(e.target.value)}
          className={`${inputClassName} pr-10`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-navy"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    )
  } else {
    control = (
      <input
        id={fieldId}
        type={type === 'email' ? 'email' : 'text'}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        onChange={(e) => handleChange(e.target.value)}
        className={inputClassName}
      />
    )
  }

  return (
    <div>
      <label htmlFor={type === 'readonly' ? undefined : fieldId} className="text-base font-medium text-navy">
        {label}
      </label>
      <div className="mt-1.5">{control}</div>
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
    </div>
  )
}
