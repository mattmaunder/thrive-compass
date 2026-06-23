// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-42
// source=src/components/ui/Progress.tsx
// component=Progress
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = instance.name ?? ''
const percentMatch = name.match(/(\d+)%/)
const value = percentMatch ? Number(percentMatch[1]) : 15
const color = name.includes('42%') || name.includes('78%') ? 'navy' : 'teal'

const label =
  findLayerText('House Fund') ??
  findLayerText('Retirement') ??
  'Goal'

export default {
  example: figma.code`<Progress label="${label}" value={${value}} color="${color}" />`,
  imports: ['import { Progress } from "../components/ui/Progress"'],
  id: 'progress',
  metadata: { nestable: true },
}
