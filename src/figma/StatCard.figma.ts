// url=https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6?node-id=14-5
// source=src/components/ui/StatCard.tsx
// component=StatCard
import figma from 'figma'
const instance = figma.selectedInstance

const value = instance.getString('Value')
const label = instance.getString('Label')

export default {
  example: figma.code`<StatCard value="${value}" label="${label}" />`,
  imports: ['import { StatCard } from "../components/ui/StatCard"'],
  id: 'stat-card',
  metadata: { nestable: true },
}
