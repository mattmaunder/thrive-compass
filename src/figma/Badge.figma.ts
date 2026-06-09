// url=https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6?node-id=9-8
// source=src/components/ui/Badge.tsx
// component=Badge
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const status = instance.getEnum('Status', {
  'On-Track': 'on-track',
  'Goal-Neutral': 'goal-neutral',
  'Worth Discussing': 'worth-discussing',
})

export default {
  example: figma.code`<Badge status="${status}">${label}</Badge>`,
  imports: ['import { Badge } from "../components/ui/Badge"'],
  id: 'badge',
  metadata: { nestable: true },
}
