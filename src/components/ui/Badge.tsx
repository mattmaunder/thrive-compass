import type { ReactNode } from 'react'

type BadgeStatus =
  | 'on-track'
  | 'goal-neutral'
  | 'worth-discussing'
  | 'over-budget'
  | 'inactive'

type BadgeProps = {
  status: BadgeStatus
  children: ReactNode
}

const statusClasses: Record<BadgeStatus, string> = {
  'on-track': 'bg-teal/13 text-teal',
  'goal-neutral': 'bg-slate-400/13 text-slate-400',
  'worth-discussing': 'bg-warning/13 text-warning',
  'over-budget': 'bg-[#d4183d]/13 text-[#d4183d]',
  inactive: 'bg-[#ececf0] text-muted',
}

export function Badge({ status, children }: BadgeProps) {
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs ${statusClasses[status]}`}>
      {children}
    </span>
  )
}
