import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 px-6 py-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="size-3 text-muted" /> : null}
            {item.href && !isLast ? (
              <a href={item.href} className="text-sm text-muted hover:text-navy">
                {item.label}
              </a>
            ) : (
              <span className={`text-sm ${isLast ? 'text-navy' : 'text-muted'}`}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
