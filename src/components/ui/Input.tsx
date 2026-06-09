type InputProps = {
  label: string
  placeholder?: string
  id?: string
  type?: string
}

export function Input({ label, placeholder, id, type = 'text' }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div>
      <label htmlFor={inputId} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-surface px-3 py-3 text-base text-navy placeholder:text-navy/50 outline-none focus:border-teal"
      />
    </div>
  )
}
