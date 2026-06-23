// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-20
// source=src/components/ui/Badge.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = instance.name ?? ''
const status = name.includes('Goal Neutral')
  ? 'goal-neutral'
  : name.includes('Worth Discussing')
    ? 'worth-discussing'
    : name.includes('Over Budget')
      ? 'over-budget'
      : name.includes('Inactive')
        ? 'inactive'
        : 'on-track'

const badgeLabels = [
  'On track',
  'Goal neutral',
  'Worth discussing',
  'Over budget',
  'Inactive',
]

let label = 'Badge'
for (const layerName of badgeLabels) {
  const found = findLayerText(layerName)
  if (found) {
    label = found
    break
  }
}

export default {
  example: figma.code`<Badge status="${status}">${label}</Badge>`,
  imports: ['import { Badge } from "../components/ui/Badge"'],
  id: 'badge',
  metadata: { nestable: true },
}
