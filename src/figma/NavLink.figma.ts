// url=https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6?node-id=13-6
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
