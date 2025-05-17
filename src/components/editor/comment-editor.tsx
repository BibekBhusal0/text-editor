import "@/styles/editor.css";
import { TiptapUnderline } from "novel";

import MinimalEditor from "./minimal";
import { placeholderExtension, starterKit } from "./extension";
import { TextButtons } from "./textButtons";

const CommentEditor = () => {
  return (
    <MinimalEditor
      autofocus
      className="editor commend-example overflow-hidden rounded-md border-1 border-default-400 focus-within:border-primary-400"
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
      <div className="flex gap-2 bg-default-200">
        <TextButtons />
      </div>
    </MinimalEditor>
  );
};

export default CommentEditor;
