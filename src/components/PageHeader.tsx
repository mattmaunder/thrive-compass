type PageHeaderProps = {
  title: string
  subtitle: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-medium tracking-tight text-navy">{title}</h1>
          <span className="rounded-full bg-[rgba(236,236,240,0.5)] px-2 py-1 text-xs text-muted">
            Thrive Compass
          </span>
        </div>
        <p className="mt-2 text-base text-muted">{subtitle}</p>
      </div>
      {action}
    </div>
  )
}
