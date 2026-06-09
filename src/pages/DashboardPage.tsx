import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Coins,
  Home,
  PiggyBank,
  Plane,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import {
  GOAL_PROGRESS,
  RECENT_TRANSACTIONS,
  SAVINGS_GROWTH_DATA,
  SPENDING_ALIGNMENT,
  STATUS_STYLES,
} from '../lib/dashboardData'

function useChartReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setReady(true)
      return
    }

    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return ready
}

function SavingsGrowthChart() {
  const ready = useChartReady()
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLength, setPathLength] = useState(0)

  const max = 30000
  const width = 420
  const height = 200
  const padding = { top: 10, right: 10, bottom: 30, left: 45 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const points = SAVINGS_GROWTH_DATA.map((d, i) => {
    const x = padding.left + (i / (SAVINGS_GROWTH_DATA.length - 1)) * chartW
    const y = padding.top + chartH - (d.value / max) * chartH
    return { x, y, ...d }
  })

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const yLabels = [30000, 22500, 15000, 7500, 0]

  useLayoutEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [linePath])

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full" aria-hidden>
      {yLabels.map((label) => {
        const y = padding.top + chartH - (label / max) * chartH
        return (
          <g key={label}>
            <line
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
            <text x={padding.left - 8} y={y + 4} textAnchor="end" className="fill-slate-400 text-[10px]">
              {label === 0 ? '0' : label.toLocaleString()}
            </text>
          </g>
        )
      })}
      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="#00bfa6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: pathLength || undefined,
          strokeDashoffset: ready ? 0 : pathLength,
          transition: ready ? 'stroke-dashoffset 1.2s ease-out' : 'none',
        }}
      />
      {points.map((p, i) => (
        <circle
          key={p.month}
          cx={p.x}
          cy={p.y}
          r="4"
          fill="#00bfa6"
          stroke="white"
          strokeWidth="2"
          style={{
            opacity: ready ? 1 : 0,
            transition: ready ? `opacity 0.25s ease-out ${0.75 + i * 0.08}s` : 'none',
          }}
        />
      ))}
      {points.map((p) => (
        <text key={`label-${p.month}`} x={p.x} y={height - 8} textAnchor="middle" className="fill-slate-400 text-[10px]">
          {p.month}
        </text>
      ))}
    </svg>
  )
}

function SpendingDonutChart() {
  const ready = useChartReady()
  const size = 176
  const strokeWidth = 28
  const radius = (size - strokeWidth) / 2
  const center = size / 2
  const circumference = 2 * Math.PI * radius

  let cumulativeOffset = 0

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        {SPENDING_ALIGNMENT.map((segment, i) => {
          const segmentLength = (segment.percent / 100) * circumference
          const offset = cumulativeOffset
          cumulativeOffset += segmentLength

          return (
            <circle
              key={segment.label}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${ready ? segmentLength : 0} ${circumference}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${center} ${center})`}
              style={{
                transition: ready ? `stroke-dasharray 0.7s ease-out ${i * 0.2}s` : 'none',
              }}
            />
          )
        })}
      </svg>
      <div className="mt-4 grid w-full grid-cols-3 gap-2 text-center">
        {SPENDING_ALIGNMENT.map((segment, i) => (
          <div
            key={segment.label}
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? 'translateY(0)' : 'translateY(6px)',
              transition: ready ? `opacity 0.4s ease-out ${0.5 + i * 0.12}s, transform 0.4s ease-out ${0.5 + i * 0.12}s` : 'none',
            }}
          >
            <div
              className="mx-auto size-3 rounded-full"
              style={{ backgroundColor: segment.color }}
            />
            <p className="mt-1 text-xs text-muted">{segment.label}</p>
            <p className="text-sm font-medium text-navy">{segment.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const goalIcons = {
  home: Home,
  plane: Plane,
  'piggy-bank': PiggyBank,
}

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1152px] px-6 py-8">
      <PageHeader
        title="Household Dashboard"
        subtitle="Your combined financial snapshot for 28/04/26"
      />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="gradient-primary rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="rounded-xl bg-white/20 p-2">
              <Coins className="size-5" />
            </div>
            <TrendingUp className="size-4 text-white/80" />
          </div>
          <p className="mt-4 text-3xl">£12,450</p>
          <p className="mt-1 text-sm text-white/80">Combined Monthly Income</p>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <div className="rounded-xl bg-navy/10 p-2 w-fit">
            <TrendingDown className="size-5 text-navy" />
          </div>
          <p className="mt-4 text-3xl text-navy">£8,234</p>
          <p className="mt-1 text-sm text-muted">Total Spend This Month</p>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <div className="rounded-xl bg-amber-500/10 p-2 w-fit">
            <PiggyBank className="size-5 text-amber-600" />
          </div>
          <p className="mt-4 text-3xl text-navy">34%</p>
          <p className="mt-1 text-sm text-muted">Savings Rate</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="text-lg font-medium text-navy">Savings Growth</h2>
          <div className="mt-4 h-52">
            <SavingsGrowthChart />
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="text-lg font-medium text-navy">Spending Alignment</h2>
          <div className="mt-4 flex justify-center">
            <SpendingDonutChart />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-navy">Goal Progress Overview</h2>
          <Link
            to="/goals"
            className="flex items-center gap-1 text-sm font-medium text-teal hover:underline"
          >
            View All
            <ChevronRight className="size-4" />
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {GOAL_PROGRESS.map((goal) => {
            const Icon = goalIcons[goal.icon]
            return (
              <div key={goal.name} className="rounded-xl bg-[rgba(236,236,240,0.5)] p-4">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-muted" />
                  <span className="text-sm text-muted">{goal.name}</span>
                </div>
                <p className="mt-2 text-base text-navy">{goal.percent}% complete</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#ececf0]">
                  <div
                    className={`h-full rounded-full ${goal.color}`}
                    style={{ width: `${goal.percent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-white p-6">
        <h2 className="text-lg font-medium text-navy">Recent Transactions</h2>
        <div className="mt-4 space-y-3">
          {RECENT_TRANSACTIONS.map((tx) => {
            const status = STATUS_STYLES[tx.status]
            const isIncome = tx.amount > 0
            return (
              <div
                key={`${tx.name}-${tx.date}`}
                className="flex items-center justify-between rounded-xl bg-[rgba(236,236,240,0.3)] p-3"
              >
                <div>
                  <p className="text-base text-navy">{tx.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-muted">{tx.date}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs ${status.badge}`}>
                      {status.text}
                    </span>
                  </div>
                </div>
                <p className={`text-base ${isIncome ? 'text-teal' : 'text-navy'}`}>
                  {isIncome ? '+' : ''}£{Math.abs(tx.amount).toLocaleString('en-GB', { minimumFractionDigits: tx.amount % 1 ? 2 : 0 })}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
