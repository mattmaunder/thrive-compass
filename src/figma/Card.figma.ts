// url=https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6?node-id=12-5
// source=src/components/ui/Card.tsx
// component=Card
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const body = instance.getString('Body')

export default {
  example: figma.code`<Card title="${title}" body="${body}" />`,
  imports: ['import { Card } from "../components/ui/Card"'],
  id: 'card',
  metadata: { nestable: true },
}
