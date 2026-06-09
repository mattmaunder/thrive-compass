import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Bell,
  LayoutDashboard,
  LogOut,
  Map,
  Target,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { Footer } from './Footer'
import { NotificationsModal } from './NotificationsModal'
import { NAV_ITEMS, THRIVE_LOGO, type NavItem } from '../lib/constants'
import { INITIAL_NOTIFICATIONS } from '../lib/notifications'

const navIcons: Record<NavItem, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  'vision-map': Map,
  goals: Target,
  roadmap: TrendingUp,
  accounts: Wallet,
}

export function AppLayout() {
  const navigate = useNavigate()
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)

  const unreadCount = notifications.filter((n) => n.unread).length

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-8">
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="flex items-center gap-3"
          >
            <img src={THRIVE_LOGO} alt="Thrive Bank" className="h-8 w-auto" />
            <span className="h-6 w-px bg-[var(--color-border)]" />
            <span className="text-xs text-muted">Compass for Couples</span>
          </button>

          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map(({ id, label, path }) => {
              const Icon = navIcons[id]
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-2 rounded-xl px-4 py-2 text-base font-medium transition-colors',
                      isActive
                        ? 'gradient-primary text-white'
                        : 'text-muted hover:text-navy',
                    ].join(' ')
                  }
                >
                  <Icon className="size-4" />
                  {label}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setNotificationsOpen(true)}
              className="relative flex size-9 items-center justify-center rounded-lg hover:bg-[#ececf0]"
              aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
            >
              <Bell className="size-5 text-muted" />
              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 size-2 rounded-full bg-teal" />
              )}
            </button>
            <div className="flex items-center gap-2 rounded-xl bg-[#ececf0] px-3 py-1.5">
              <span className="text-sm text-muted">demo-user</span>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="rounded p-1 text-muted hover:text-navy"
                aria-label="Sign out"
              >
                <LogOut className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <NotificationsModal
        open={notificationsOpen}
        notifications={notifications}
        onClose={() => setNotificationsOpen(false)}
        onMarkAllRead={handleMarkAllRead}
      />
    </div>
  )
}
