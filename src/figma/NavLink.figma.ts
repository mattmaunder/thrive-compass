// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-40
// source=src/components/ui/NavLink.tsx
// component=NavLink
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')

export default {
  example: figma.code`<NavLink to="/dashboard" label="${label}" />`,
  imports: ['import { NavLink } from "../components/ui/NavLink"'],
  id: 'nav-link',
  metadata: { nestable: true },
}
