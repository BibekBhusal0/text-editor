import "@/styles/editor.css";
import { TiptapUnderline } from "novel";

import MinimalEditor from "./minimal";
import { placeholderExtension, starterKit } from "./extension";
import { TextButtons } from "./textButtons";

const CommentEditor = () => {
  return (
    <MinimalEditor
      autofocus
      className="editor commend-example border-default-400 focus-within:border-primary-400 overflow-hidden rounded-md border-1"
      editorProps={{
        attributes: {
          class: "overflow-auto h-40 p-2",
          spellcheck: "true",
        },
      }}
      extensions={[
        placeholderExtension.configure({ placeholder: "Your Comment Here ..." }),
        starterKit,
        TiptapUnderline,
      ]}
    >
      <div className="flex-center bg-default-100 gap-2 p-1">
        <TextButtons />
      </div>
    </MinimalEditor>
  );
};

export default CommentEditor;
