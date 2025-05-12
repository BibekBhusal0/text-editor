import { InputRule } from "@tiptap/core";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Placeholder from "@tiptap/extension-placeholder";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import TextStyle from "@tiptap/extension-text-style";
import TiptapUnderline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import GlobalDragHandle from "tiptap-extension-global-drag-handle";
// import TiptapImage from "@tiptap/extension-image";
// import { Color } from "@tiptap/extension-color";
// import Highlight from "@tiptap/extension-highlight";
// import TiptapLink from "@tiptap/extension-link";

export const starterKit = StarterKit.configure({
  dropcursor: { color: "var(--mui-palette-divider)", width: 3 },
  codeBlock: false,
  code: {
    HTMLAttributes: { spellcheck: "false" },
  },
});

export const markdownExtension = Markdown.configure({
  html: true,
  tightLists: true,
  tightListClass: "tight",
  bulletListMarker: "-",
  linkify: false,
  breaks: false,
  transformPastedText: true,
  transformCopiedText: false,
});
export const taskItem = TaskItem.configure({
  nested: true,
  taskListTypeName: "taskList",
});
export const placeholderExtension = Placeholder.configure({
  showOnlyWhenEditable: true,
  emptyNodeClass: "pre",
});

export const extensions = [
  GlobalDragHandle,
  HorizontalRule,
  InputRule,
  Markdown,
  Placeholder,
  TaskItem,
  TaskList,
  TextStyle,
  TiptapUnderline,
  starterKit,
]
