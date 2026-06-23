type ProgressColor = 'teal' | 'navy'

type ProgressProps = {
  label: string
  value: number
  color?: ProgressColor
  showPercent?: boolean
  size?: 'sm' | 'md'
}

const fillClasses: Record<ProgressColor, string> = {
  teal: 'bg-teal',
  navy: 'bg-navy',
}

export function Progress({
  label,
  value,
  color = 'teal',
  showPercent = true,
  size = 'md',
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value))
  const barHeight = size === 'sm' ? 'h-1.5' : 'h-2'

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-navy">{label}</span>
        {showPercent ? <span className="text-sm text-muted">{clamped}%</span> : null}
      </div>
      <div className={`mt-1.5 overflow-hidden rounded-full bg-[#ececf0] ${barHeight}`}>
        <div
          className={`h-full rounded-full transition-all ${fillClasses[color]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
