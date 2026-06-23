// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-15
// source=src/components/ui/IconButton.tsx
// component=IconButton
import figma from 'figma'
const instance = figma.selectedInstance

const name = instance.name ?? ''
const variant = name.includes('Default-2')
  ? 'secondary'
  : name.includes('Default-3')
    ? 'ghost'
    : name.includes('Default-4')
      ? 'destructive'
      : name.includes('Default-5')
        ? 'navy'
        : 'primary'

export default {
  example: figma.code`<IconButton variant="${variant}" aria-label="Action">
  <Plus className="size-4" />
</IconButton>`,
  imports: [
    'import { Plus } from "lucide-react"',
    'import { IconButton } from "../components/ui/IconButton"',
  ],
  id: 'icon-button',
  metadata: { nestable: true },
}
