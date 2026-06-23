// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-41
// source=src/components/ui/Breadcrumb.tsx
// component=Breadcrumb
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Goals', href: '/goals' },
    { label: 'House Fund' },
  ]}
/>`,
  imports: ['import { Breadcrumb } from "../components/ui/Breadcrumb"'],
  id: 'breadcrumb',
  metadata: { nestable: true },
}
