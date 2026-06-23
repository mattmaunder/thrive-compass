// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-2
// source=src/components/ui/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = instance.name ?? ''
const variant = name.includes('Destructive/Secondary')
  ? 'destructive-secondary'
  : name.includes('Destructive')
    ? 'destructive'
    : name.includes('Secondary')
      ? 'secondary'
      : name.includes('Gradient')
        ? 'gradient'
        : name.includes('Ghost/Subtle')
          ? 'ghost-subtle'
          : name.includes('Ghost')
            ? 'ghost'
            : 'primary'

const size = name.includes('Small') ? 'small' : 'default'

const buttonLabels = [
  'Get Started',
  'Save Goal',
  'Sync Now',
  'Disabled',
  'View Roadmap',
  'Add Account',
  'Delete Goal',
  'Remove Account',
  'Cancel',
  'Learn More',
  'Skip for now',
  'Open Compass',
  'Continue',
  'Boost savings',
]

let label = 'Button'
for (const layerName of buttonLabels) {
  const found = findLayerText(layerName)
  if (found) {
    label = found
    break
  }
}

export default {
  example: figma.code`<Button variant="${variant}" size="${size}">${label}</Button>`,
  imports: ['import { Button } from "../components/ui/Button"'],
  id: 'button',
  metadata: { nestable: true },
}
