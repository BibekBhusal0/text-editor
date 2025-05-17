import BubbleMenu from "./bubbleMenu";
import "@/styles/editor.css";
import { SlashCommand } from "./slashCommand";
import EditorHeader from "./header";
import MinimalEditor from "./minimal";

const content = `
<h1>What is this</h1><p>This is <strong>AI based text editor </strong>made with <a target="_blank" rel="noopener noreferrer nofollow" href="https://novel.sh/docs/introduction">Novel</a> and <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.heroui.com/">HeroUI</a>. </p><h2>✨ Features</h2><ul class="tight" data-tight="true"><li><p>Built with <strong>HeroUI</strong> components.</p></li><li><p>Powered by <strong>Vite</strong> for blazing-fast performance.</p></li><li><p>Advanced text editing powered by Novel &amp; TipTap.</p></li><li><p>Fully customizable with different extensions.</p></li></ul><h2>✏Editor Features</h2><ul class="tight" data-tight="true"><li><p>Bubble Menu</p></li><li><p>AI Commands</p></li><li><p>Slash Commands</p></li><li><p>Drag and Drop</p></li><li><p>Supports various blocks</p><ul class="tight" data-tight="true"><li><p>Bullet list</p></li><li><p>Task List</p></li><li><p>Numbered list</p></li><li><p>Code Block</p></li><li><p>Quote</p></li></ul></li><li><p><strong>Bold</strong>, <u>Underline</u>, <em>Italic,</em><s> Strike Through</s>, <code spellcheck="false">Inline Code</code>.</p></li><li><p>Intuitive keyboard shortcuts</p></li><li><p>And more ...</p></li></ul><h2>📦 Tech Stack</h2><ul class="tight" data-tight="true"><li><p>Vite</p></li><li><p>TypeScript</p></li><li><p>HeroUI</p></li><li><p>Tailwind CSS</p></li><li><p>TipTap</p></li><li><p>Novel</p></li></ul><h2>🚀 Getting Started</h2><p>Clone the repo and install dependencies:</p><pre><code class="language-bash">git clone https://github.com/BibekBhusal0/text-editor
cd text-editor
npm install
npm run dev</code></pre><p></p>
`;

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
