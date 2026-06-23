import { FormField } from './FormField'

type InputProps = {
  label: string
  placeholder?: string
  id?: string
  type?: string
  hint?: string
}

export function Input({ label, placeholder, id, type = 'text', hint }: InputProps) {
  const fieldType = type === 'email' ? 'email' : type === 'password' ? 'password' : 'text'

  return (
    <FormField
      label={label}
      type={fieldType}
      id={id}
      placeholder={placeholder}
      hint={hint}
    />
  )
}
