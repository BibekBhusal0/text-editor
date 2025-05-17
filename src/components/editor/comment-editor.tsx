import "@/styles/editor.css";
import MinimalEditor from "./minimal";
import { placeholderExtension, starterKit } from "./extension";
import { TiptapUnderline } from "novel";
import { TextButtons } from "./textButtons";

const CommentEditor = () => {
  return (
    <MinimalEditor
      autofocus
      className="editor commend-example overflow-hidden rounded-md border-1 border-default-400 focus-within:border-primary-400"
      extensions={[
        placeholderExtension.configure({ placeholder: "Your Comment Here ..." }),
        starterKit,
        TiptapUnderline,
      ]}
      editorProps={{
        attributes: {
          class: "overflow-auto h-40 p-2",
          spellcheck: "true",
        },
      }}
    >
      <div className="flex gap-2 bg-default-200">
        <TextButtons />
      </div>
    </MinimalEditor>
  );
};

export default CommentEditor;
