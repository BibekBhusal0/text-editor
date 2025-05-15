import BubbleMenu from "./bubbleMenu";
import "@/styles/editor.css";
import { SlashCommand } from "./slashCommand";
import EditorHeader from "./header";
import MinimalEditor from "./minimal";
import { AICommands } from "./ai/commands";

const content = "<h1>hello</h1>";

const MainEditor = () => {
  return (
    <MinimalEditor
      autofocus
      className="rounded-md border-1 pt-16"
      editorProps={{
        attributes: {
          class: "min-h-[250px] max-h-[580px] overflow-auto",
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
      <AICommands onSelect={(text, value) => console.log(text, value)} />
    </MinimalEditor>
  );
};

export default MainEditor;
