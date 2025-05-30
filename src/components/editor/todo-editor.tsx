import { GlobalDragHandle, useEditor } from "novel";
import Document from "@tiptap/extension-document";
import { TaskItem, TaskList } from "novel";
import { starterKit } from "./extension";
import MinimalEditor from "./minimal";
import '@/styles/todo.css'

const CustomDocument = Document.extend({ content: "taskList" });
const CustomTaskItem = TaskItem.extend({ content: "inline*" });

const extensions = [
  TaskList,
  GlobalDragHandle.configure({ yOffset: 55 }),
  starterKit.configure({
    horizontalRule: false,
    listItem: false,
    orderedList: false,
    blockquote: false,
    bold: false,
    bulletList: false,
    heading: false,
    italic: false,
    strike: false,
    hardBreak: false,
    code: false,
    codeBlock: false,
    document: false,
  }),
  CustomDocument,
  CustomTaskItem,
];

export const TodoListEditor = () => {
  return (
    <MinimalEditor
      extensions={extensions}
      className="editor todo-list overflow-hidden h-72 rounded-md border-1 border-default-400 focus-within:border-primary-400 prose-xl pl-2 pt-10 mt-4 group"
      editorProps={{
        attributes: {
          class: "p-0 pl-3 ",
          spellcheck: "true",
        },
      }} >
      <CaptureFocus className="absolute top-0 left-0 w-full h-10 text-center overflow-hidden bg-default-400 group-focus-within:bg-primary-400">
        Todo Editor
      </CaptureFocus>
      <CaptureFocus className = 'size-full cursor-text -translate-y-4' />
    </MinimalEditor>
  );
};

const CaptureFocus =(props: React.HTMLProps<HTMLDivElement>) =>{
  const { editor } = useEditor() 
  if (!editor) return <div {...props}/>
  return ( <div {...props}  onClick ={()=> editor.chain().focus()}/> )
}

export default TodoListEditor;
