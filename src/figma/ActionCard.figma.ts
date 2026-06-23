// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-37
// source=src/components/ui/Card.tsx
// component=ActionCard
import figma from 'figma'
const instance = figma.selectedInstance

function textLayers() {
  return instance
    .findLayers((node) => node.type === 'TEXT')
    .map((node) => (node.type === 'TEXT' ? node.textContent.trim() : undefined))
    .filter((value): value is string => Boolean(value))
}

const texts = textLayers()
const avatar = texts[0] ?? 'A'
const title = texts[1] ?? 'Alex & Jamie'
const subtitle = texts[2] ?? 'Vision aligned · 73%'
const body =
  texts[3] ??
  'Your 10-year visions show strong overlap around homeownership and travel.'
const actionLabel = texts[4] ?? 'View alignment'

export default {
  example: figma.code`<ActionCard avatar="${avatar}" title="${title}" subtitle="${subtitle}" body="${body}" actionLabel="${actionLabel}" />`,
  imports: ['import { ActionCard } from "../components/ui/Card"'],
  id: 'action-card',
  metadata: { nestable: true },
}
