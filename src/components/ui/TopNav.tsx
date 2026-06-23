import { NavLink } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

export type TopNavItem = {
  id: string
  label: string
  path: string
  icon: LucideIcon
}

type TopNavProps = {
  items: TopNavItem[]
}

export function TopNav({ items }: TopNavProps) {
  return (
    <nav className="flex items-center gap-2 border border-[var(--color-border)] bg-white px-6 py-3">
      {items.map(({ id, label, path, icon: Icon }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            [
              'flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors',
              isActive ? 'gradient-primary text-white' : 'text-muted hover:text-navy',
            ].join(' ')
          }
        >
          <Icon className="size-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
