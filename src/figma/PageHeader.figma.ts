// url=https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6?node-id=15-8
// source=src/components/PageHeader.tsx
// component=PageHeader
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const subtitle = instance.getString('Subtitle')

export default {
  example: figma.code`<PageHeader title="${title}" subtitle="${subtitle}" />`,
  imports: ['import { PageHeader } from "../components/PageHeader"'],
  id: 'page-header',
  metadata: { nestable: true },
}
