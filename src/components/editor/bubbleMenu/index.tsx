import { BubbleMenu as BubbleMenuPremitive, useCurrentEditor } from '@tiptap/react'
import { Divider } from "@heroui/divider"
import { TextButtons } from './textButtons';
import { NodeSelector } from './nodeSelector';
import { LinkSelector } from './link-selector';
import { ColorSelector } from './colorSelector';


const BubbleMenu = () => {
  const { editor } = useCurrentEditor()
  if (!editor) return
  return <BubbleMenuPremitive editor={editor}>

    <div className="flex">
      <div className="flex-center flex-col">
        <TextButtons />
        <Divider orientation="horizontal" />
        <div className="flex-center w-full">
          <NodeSelector />
          // {/* <Divider orientation="vertical" flexItem /> */}
          <LinkSelector />
          <Divider orientation="vertical" />
          <ColorSelector />
        </div>
      </div>
    </div>

  </BubbleMenuPremitive>
}
export default BubbleMenu
