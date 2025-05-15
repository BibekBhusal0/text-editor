import { Extensions } from "@tiptap/core";
import {
  CodeBlockLowlight,
  Color,
  Command,
  CustomKeymap,
  GlobalDragHandle,
  HighlightExtension,
  Mathematics,
  Placeholder,
  renderItems,
  StarterKit,
  TaskItem,
  TaskList,
  TextStyle,
  TiptapImage,
  TiptapLink,
  TiptapUnderline,
  AIHighlight,
} from "novel";
import { Markdown as MarkdownExtension } from "tiptap-markdown";
import { createLowlight, all } from "lowlight";
import { ReactNodeViewRenderer } from "@tiptap/react";
import TextAlign from "@tiptap/extension-text-align";

import { slashCommandItems } from "./slashCommand/items";
import { CodeBlockComponent } from "./customComponents/codeBlock";

export const codeBlockLowlight = CodeBlockLowlight.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CodeBlockComponent);
  },
}).configure({
  lowlight: createLowlight(all),
  defaultLanguage: "auto",
});

export const starterKit = StarterKit.configure({
  dropcursor: { color: "hsl(var(--heroui-default-400))", width: 3 },
  codeBlock: false,
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

export const slashCommand = Command.configure({
  suggestion: {
    items: () => slashCommandItems,
    render: renderItems,
  },
});

export const extensions: Extensions = [
  Color,
  CustomKeymap,
  GlobalDragHandle,
  HighlightExtension,
  MathExtension,
  TaskList,
  TextStyle,
  TiptapImage,
  TiptapLink,
  TiptapUnderline,
  codeBlockLowlight,
  markdownExtension,
  placeholderExtension,
  slashCommand,
  starterKit,
  taskItem,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  AIHighlight
];
