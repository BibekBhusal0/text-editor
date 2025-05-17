import {
  EditorRoot,
  EditorContent,
  ImageResizer,
  handleCommandNavigation,
  EditorContentProps,
} from "novel";
import { cn } from "@heroui/theme";

import { extensions } from "./extension";
import "@/styles/editor.css";

const MinimalEditor = ({ className, ...props }: EditorContentProps) => {
  return (
    <EditorRoot>
      <EditorContent
        className={cn("relative", className)}
        extensions={extensions}
        slotAfter={<ImageResizer />}
        {...props}
        editorProps={{
          handleDOMEvents: { keydown: (_view, event) => handleCommandNavigation(event) },
          ...props.editorProps,
          attributes: {
            ...props.editorProps?.attributes,
            class: cn(
              "prose dark:prose-invert prose-sm prose-headings:font-title prose-pre:m-0",
              "max-w-full ",
              //@ts-ignore
              props.editorProps?.attributes?.class
            ),
          },
        }}
      />
    </EditorRoot>
  );
};

export default MinimalEditor;
