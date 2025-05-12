import { Divider } from "@heroui/divider"
import { TextButtons } from './textButtons';
import { NodeSelector } from './nodeSelector';
import { LinkSelector } from './link-selector';
import { ColorSelector } from './colorSelector';
import { AICommands } from './aiCommands';
import { Card } from '@heroui/card';
import { EditorBubble } from "novel";


const BubbleMenu = () => {
  return <EditorBubble >
    <BubbleMenuContent />
  </EditorBubble>
}
export default BubbleMenu

export const BubbleMenuContent = () => {
  return <Card
    isBlurred
    className="flex flex-row max-w-80"
    radius='sm'
  >
    <AICommands />
    <div className="flex flex-col">
      <TextButtons />
      <Divider orientation="horizontal" />
      <div className="flex flex-row w-full">
        <NodeSelector />
        <Divider orientation="vertical" />
        <LinkSelector />
        <Divider orientation="vertical" />
        <ColorSelector />
      </div>
    </div>
  </Card>
}
