import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gradient'
  | 'ghost'
  | 'ghost-subtle'
  | 'destructive'
  | 'destructive-secondary'
  | 'tertiary'

type ButtonSize = 'default' | 'small'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-teal text-white hover:bg-teal/90',
  secondary: 'bg-[#ececf0] text-navy hover:bg-[#e0e0e5]',
  gradient: 'gradient-primary text-white',
  ghost: 'border border-[var(--color-border)] bg-white text-navy hover:bg-surface',
  'ghost-subtle': 'bg-transparent text-teal hover:underline',
  destructive: 'bg-[#d4183d] text-white hover:bg-[#d4183d]/90',
  'destructive-secondary': 'bg-[#d4183d]/10 text-[#d4183d] hover:bg-[#d4183d]/15',
  tertiary: 'bg-transparent text-teal hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'rounded-xl px-6 py-2.5 text-base',
  small: 'rounded-xl px-4 py-2 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'default',
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center font-medium transition-colors',
        sizeClasses[size],
        disabled ? 'cursor-not-allowed opacity-50' : '',
        disabled ? '' : variantClasses[variant],
        disabled ? 'bg-[#ececf0] text-muted' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
