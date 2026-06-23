import type { ReactNode } from 'react'

type TagVariant = 'new' | 'beta' | 'synced' | 'pending'

type TagProps = {
  variant: TagVariant
  children?: ReactNode
}

const variantLabels: Record<TagVariant, string> = {
  new: 'New',
  beta: 'Beta',
  synced: 'Synced',
  pending: 'Pending',
}

const variantClasses: Record<TagVariant, string> = {
  new: 'bg-teal/13 text-teal',
  beta: 'bg-navy/10 text-navy',
  synced: 'bg-teal/13 text-teal',
  pending: 'bg-warning/13 text-warning',
}

export function Tag({ variant, children }: TagProps) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs ${variantClasses[variant]}`}>
      {children ?? variantLabels[variant]}
    </span>
  )
}
