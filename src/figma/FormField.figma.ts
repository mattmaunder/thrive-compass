// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-29
// source=src/components/ui/FormField.tsx
// component=FormField
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = instance.name ?? ''
const type = name.includes('Password')
  ? 'password'
  : name.includes('Currency')
    ? 'currency'
    : name.includes('Dropdown')
      ? 'dropdown'
      : name.includes('Textarea')
        ? 'textarea'
        : name.includes('Readonly')
          ? 'readonly'
          : name.includes('Email')
            ? 'email'
            : 'text'

const label =
  findLayerText('Email address') ??
  findLayerText('Password') ??
  findLayerText('Goal Name') ??
  'Label'

const placeholder =
  findLayerText('alex@example.com') ??
  findLayerText('Select a category') ??
  ''

export default {
  example: figma.code`<FormField label="${label}" type="${type}" placeholder="${placeholder}" />`,
  imports: ['import { FormField } from "../components/ui/FormField"'],
  id: 'form-field',
  metadata: { nestable: true },
}
