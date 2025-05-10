
import { BubbleMenu as BubbleMenuPremitive, useCurrentEditor } from '@tiptap/react'

const BubbleMenu = () => {
  const { editor } = useCurrentEditor()
  return <BubbleMenuPremitive editor={editor}>This is the bubble menu</BubbleMenuPremitive>
}
export default BubbleMenu
