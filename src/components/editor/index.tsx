import { EditorRoot, EditorContent, ImageResizer, handleCommandNavigation } from "novel";
import { extensions } from './extension'
import BubbleMenu, { BubbleMenuContent } from './bubbleMenu'
import '@/styles/editor.css'
import { SlashCommand } from "./slashCommand/index";
// import FloatingMenu from './floatingMenu'

const content = '<h1>Heading 1</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora eos soluta fuga quas, ullam quod tenetur ex non, magni fugit autem repellendus! Nihil porro, velit unde quam doloribus repellendus? dolor elit dolor ipsum incididunt magna eiusmod sed dolore lorem magna dolore sed sed sit elit consectetur do et do eiusmod tempor ipsum labore incididunt labore ipsum sit sed adipiscing ut tempor tempor adipiscing et labore dolor aliqua incididunt elit consectetur aliqua magna consectetur consectetur ut aliqua tempor sed amet dolor dolor labore tempor dolore dolor aliqua ipsum elit sed do ipsum eiusmod elit do labore dolor et aliqua sit incididunt consectetur dolore et magna lorem sit eiusmod et elit aliqua amet aliqua et incididunt tempor lorem dolor do labore aliqua sit labore elit amet dolor magna magna et eiusmod </p><h2>Heading 2</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex explicabo. Sapiente quas iusto aliquid error iste sit! Sint aperiam fugit tempore. Dolor eos a magnam? Nisi quod at quibusdam. </p><p></p>'

const Tiptap = () => {
  return (
    <EditorRoot>
      <EditorContent
        autofocus
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          attributes: {
            class: "prose dark:prose-invert prose-sm prose-headings:font-title prose-pre:m-0 max-w-full min-h-[250px]",
            spellcheck: 'false',
          }
        }}
        extensions={extensions}
        //@ts-ignore
        initialContent={content}
        slotAfter={<ImageResizer />}
      >
        <BubbleMenu />
        <SlashCommand />
        <BubbleMenuContent />
      </EditorContent>
    </EditorRoot>
  )
}


export default Tiptap

