import { NavLink as RouterNavLink } from 'react-router-dom'

type NavLinkProps = {
  to: string
  label: string
}

export function NavLink({ to, label }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        [
          'flex items-center gap-2 rounded-xl px-4 py-2 text-base font-medium transition-colors',
          isActive ? 'gradient-primary text-white' : 'text-muted hover:text-navy',
        ].join(' ')
      }
    >
      {label}
    </RouterNavLink>
  )
}
