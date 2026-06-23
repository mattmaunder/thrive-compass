// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-39
// source=src/components/ui/TopNav.tsx
// component=TopNav
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<TopNav items={NAV_ITEMS} />`,
  imports: [
    'import { TopNav } from "../components/ui/TopNav"',
    'import { NAV_ITEMS } from "../lib/constants"',
  ],
  id: 'top-nav',
  metadata: { nestable: true },
}
