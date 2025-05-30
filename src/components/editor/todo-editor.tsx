import {  GlobalDragHandle } from "novel";
import Document from "@tiptap/extension-document";
import { TaskItem, TaskList } from "novel";
import { starterKit } from "./extension";
import MinimalEditor from "./minimal";

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
      className="editor todo-list overflow-hidden rounded-md border-1 border-default-400 focus-within:border-primary-400 prose-xl"
      editorProps={{
        attributes: {
          class: "overflow-auto h-60 p-2",
          spellcheck: "true",
        },
      }} >
    </MinimalEditor>
  );
};

export default TodoListEditor;
