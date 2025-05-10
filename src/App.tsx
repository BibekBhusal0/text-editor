import { ThemeSwitch } from "@/components/theme-switch";
import DefaultLayout from "@/layouts/default";
import Tiptap from "./components/editor";

function App() {
  return <DefaultLayout>
    <div className='border-2 border-gray-200'>
      <ThemeSwitch />
      <Tiptap />
    </div>
  </DefaultLayout>
}

export default App;
