// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-36
// source=src/components/ui/Card.tsx
// component=GoalSummaryCard
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = findLayerText('House Fund') ?? 'House Fund'
const amount = findLayerText('£18,500') ?? '£18,500'
const target = findLayerText('of £125,000 target') ?? 'of £125,000 target'
const percentText = findLayerText('15% complete') ?? '15% complete'
const percent = Number(percentText.match(/\d+/)?.[0] ?? 15)

export default {
  example: figma.code`<GoalSummaryCard
  icon={Home}
  name="${name}"
  amount="${amount}"
  target="${target}"
  percent={${percent}}
/>`,
  imports: [
    'import { Home } from "lucide-react"',
    'import { GoalSummaryCard } from "../components/ui/Card"',
  ],
  id: 'goal-summary-card',
  metadata: { nestable: true },
}
