import { ThemeSwitch } from "@/components/theme-switch";
import DefaultLayout from "@/layouts/default";
import { IconPreview } from "@/components/icons";

function App() {
  return <DefaultLayout>
    <div className='border-2 border-gray-200'>
      <ThemeSwitch />
      <IconPreview />
    </div>
  </DefaultLayout>
}

export default App;
