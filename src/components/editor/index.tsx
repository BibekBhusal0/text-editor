import BubbleMenu from "./bubbleMenu";
import "@/styles/editor.css";
import { SlashCommand } from "./slashCommand";
import EditorHeader from "./header";
import MinimalEditor from "./minimal";

const content = "<h1>hello</h1>";

const MainEditor = () => {
  return (
    <MinimalEditor
      autofocus
      className="editor rounded-md border-1 pt-16"
      editorProps={{
        attributes: {
          class: "min-h-[250px] max-h-[580px] overflow-auto pl-6",
          spellcheck: "false",
        },
      }}
      //@ts-ignore
      initialContent={content}
    >
      <div className="absolute top-0 h-20 w-full overflow-hidden rounded-t-md">
        <EditorHeader />
      </div>
      <BubbleMenu />
      <SlashCommand />
    </MinimalEditor>
  );
};

export default MainEditor;
