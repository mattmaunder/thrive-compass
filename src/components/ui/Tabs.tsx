type TabItem = {
  id: string
  label: string
}

type TabsProps = {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
}

export function Tabs({ items, activeId, onChange }: TabsProps) {
  return (
    <div className="inline-flex gap-1 rounded-xl bg-[#ececf0] p-1">
      {items.map((item) => {
        const isActive = item.id === activeId
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={[
              'rounded-[10px] px-4 py-1.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-white text-navy shadow-sm'
                : 'text-muted hover:text-navy',
            ].join(' ')}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
