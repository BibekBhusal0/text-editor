import { GlobalDragHandle, useEditor } from "novel";
import Document from "@tiptap/extension-document";
import { TaskItem, TaskList } from "novel";

import { starterKit } from "./extension";
import MinimalEditor from "./minimal";
import "@/styles/todo.css";

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
      className="editor todo-list group prose-xl mt-4 h-72 overflow-hidden rounded-md border-1 border-default-400 pl-2 pt-10 focus-within:border-primary-400"
      editorProps={{
        attributes: {
          class: "p-0 pl-3 ",
          spellcheck: "true",
        },
      }}
      extensions={extensions}
    >
      <CaptureFocus className="absolute left-0 top-0 h-10 w-full overflow-hidden bg-default-400 text-center group-focus-within:bg-primary-400">
        Todo Editor
      </CaptureFocus>
      <CaptureFocus className="size-full -translate-y-4 cursor-text" />
    </MinimalEditor>
  );
};

const CaptureFocus = (props: React.HTMLProps<HTMLDivElement>) => {
  const { editor } = useEditor();

  if (!editor) return <div {...props} />;

  return <div {...props} onClick={() => editor.chain().focus()} />;
};

export default TodoListEditor;
