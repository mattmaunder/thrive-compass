// url=https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6?node-id=8-8
// source=src/components/ui/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Style', {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
})

export default {
  example: figma.code`<Button variant="${variant}">${label}</Button>`,
  imports: ['import { Button } from "../components/ui/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
