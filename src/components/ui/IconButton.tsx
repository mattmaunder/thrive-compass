import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'navy'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant
  'aria-label': string
  children: ReactNode
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary: 'bg-teal text-white hover:bg-teal/90',
  secondary: 'bg-[#ececf0] text-navy hover:bg-[#e0e0e5]',
  ghost: 'border border-[var(--color-border)] bg-white text-navy hover:bg-surface',
  destructive: 'bg-[#d4183d]/10 text-[#d4183d] hover:bg-[#d4183d]/15',
  navy: 'bg-navy text-white hover:bg-navy/90',
}

export function IconButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={[
        'inline-flex size-9 items-center justify-center rounded-xl transition-colors',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
