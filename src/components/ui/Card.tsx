import type { ReactNode } from 'react'

type CardProps = {
  title: string
  body?: string
  children?: ReactNode
}

export function Card({ title, body, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
      <h2 className="text-lg font-medium text-navy">{title}</h2>
      {body ? <p className="mt-2 text-sm text-muted">{body}</p> : null}
      {children}
    </div>
  )
}
