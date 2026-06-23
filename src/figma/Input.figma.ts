// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-29
// source=src/components/ui/Input.tsx
// component=Input
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const placeholder = instance.getString('Placeholder')

export default {
  example: figma.code`<Input label="${label}" placeholder="${placeholder}" />`,
  imports: ['import { Input } from "../components/ui/Input"'],
  id: 'input',
  metadata: { nestable: true },
}
