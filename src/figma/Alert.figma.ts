// url=https://www.figma.com/design/CSjIzW3dHezzZOMyZKqIof/Thrive-Bank--Design-System-?node-id=9-25
// source=src/components/ui/Alert.tsx
// component=Alert
import figma from 'figma'
const instance = figma.selectedInstance

function findLayerText(layerName: string) {
  const node = instance.findText(layerName)
  return node.type === 'TEXT' ? node.textContent.trim() : undefined
}

const name = instance.name ?? ''
const variant = name.includes('Warning')
  ? 'warning'
  : name.includes('Error')
    ? 'error'
    : name.includes('Info')
      ? 'info'
      : 'success'

const title =
  findLayerText('House Fund milestone reached') ??
  findLayerText('Account sync failed') ??
  'Alert title'

const message =
  findLayerText("You've saved 15% of your deposit target. Keep it up!") ??
  findLayerText('Barclays connection expired. Re-authorise to continue.') ??
  'Alert message'

export default {
  example: figma.code`<Alert variant="${variant}" title="${title}">${message}</Alert>`,
  imports: ['import { Alert } from "../components/ui/Alert"'],
  id: 'alert',
  metadata: { nestable: true },
}
