import { Extensions } from "@tiptap/core";
import {
  TiptapLink,
  TaskList,
  TaskItem,
  StarterKit,
  Placeholder,
  TiptapUnderline,
  Color,
  TextStyle,
  HighlightExtension,
  Mathematics,
  CustomKeymap,
  TiptapImage,
  GlobalDragHandle,
  // CodeBlockLowlight,
} from "novel";
import { Markdown as MarkdownExtension } from "tiptap-markdown";
// import {
//   NodeViewContent,
//   NodeViewWrapper,
//   NodeViewProps,
//   ReactNodeViewRenderer,
// } from "@tiptap/react";

export const starterKit = StarterKit.configure({
  dropcursor: { color: "hsl(var(--heroui-default-400)))", width: 3 },
  codeBlock: {},
  code: { HTMLAttributes: { spellcheck: "false" } },
});

export const markdownExtension = MarkdownExtension.configure({
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

export const MathExtension = Mathematics.extend({
  addKeyboardShortcuts() {
    return {
      "Mod-m": () => {
        if (this.editor.isActive("math")) {
          return this.editor.chain().focus().unsetLatex().run();
        } else {
          const { from, to } = this.editor.state.selection;
          const latex = this.editor.state.doc.textBetween(from, to);
          if (!latex) return false;
          return this.editor.chain().focus().setLatex({ latex }).run();
        }
      },
    };
  },
});


export const extensions: Extensions = [
  starterKit,
  placeholderExtension,
  TiptapLink,
  TaskList,
  taskItem,
  TiptapUnderline,
  Color,
  TextStyle,
  HighlightExtension,
  GlobalDragHandle,
  MathExtension,
  markdownExtension,
  CustomKeymap,
  TiptapImage,
]
