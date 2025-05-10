import { FloatingMenu, EditorProvider } from '@tiptap/react'
import { extensions } from './extension'
import BubbleMenu from './bubbleMenu'

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  return (
    <div className='prose dark:prose-invert focus:outline-hidden'><EditorProvider extensions={extensions} content={content}>
      <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu />

    </EditorProvider>
    </div>
  )
}


export default Tiptap

