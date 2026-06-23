// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-40
// source=src/components/ui/Tabs.tsx
// component=Tabs
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Tabs
  items={[
    { id: 'overview', label: 'Overview' },
    { id: 'spending', label: 'Spending' },
    { id: 'goals', label: 'Goals' },
  ]}
  activeId="overview"
  onChange={() => {}}
/>`,
  imports: ['import { Tabs } from "../components/ui/Tabs"'],
  id: 'tabs',
  metadata: { nestable: true },
}
