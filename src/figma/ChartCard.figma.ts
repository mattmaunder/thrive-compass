// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-38
// source=src/components/ui/Card.tsx
// component=ChartCard
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const label = findLayerText('Next milestone') ?? 'Next milestone'
const title = findLayerText('20% deposit') ?? '20% deposit'
const description =
  findLayerText('£6,500 away — at current rate, reached by Mar 2027') ??
  'Milestone description'
const actionLabel = findLayerText('Boost savings') ?? 'Boost savings'

export default {
  example: figma.code`<ChartCard
  label="${label}"
  title="${title}"
  description="${description}"
  actionLabel="${actionLabel}"
/>`,
  imports: ['import { ChartCard } from "../components/ui/Card"'],
  id: 'chart-card',
  metadata: { nestable: true },
}
