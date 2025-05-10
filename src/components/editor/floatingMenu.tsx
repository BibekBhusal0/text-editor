
import { FloatingMenu as FloatingMenuPremitive, useCurrentEditor } from '@tiptap/react'

const BubbleMenu = () => {
  const { editor } = useCurrentEditor()
  return <FloatingMenuPremitive editor={editor}>This is the floating menu</FloatingMenuPremitive>
}
export default BubbleMenu
