import { FloatingMenu, BubbleMenu, useCurrentEditor, EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const Tiptap = () => {

  return (
    <>
      <EditorProvider extensions={extensions} content={content}>
        <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
        <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
        <Test></Test>
      </EditorProvider>
    </>
  )
}


const Test = () => {
  const { editor } = useCurrentEditor()
  console.log(editor)

  if (!editor) return null
  return <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre>


}

export default Tiptap

