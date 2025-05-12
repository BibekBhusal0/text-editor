import { EditorProvider } from '@tiptap/react'
import { extensions } from './extension'
import BubbleMenu from './bubbleMenu'
import '@/styles/editor.css'
import FloatingMenu from './floatingMenu'

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  return (
    <div className='max-w-full w-full h-full editor outline-0'>
      <EditorProvider
        editorProps={{
          attributes: {
            class: "prose dark:prose-invert max-w-full min-h-[250px]",
          }
        }}
        extensions={extensions}
        content={content}
      >
        <BubbleMenu />
        <FloatingMenu />
      </EditorProvider>
    </div>
  )
}


export default Tiptap

