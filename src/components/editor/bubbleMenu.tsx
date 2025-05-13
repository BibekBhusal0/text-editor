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
    className="flex flex-row w-auto"
    radius='sm'
  >
    <AICommands size={50} />
    <div className="flex flex-col border-l-1">
      <TextButtons />
      <Divider orientation="horizontal" />
      <div className="flex ">
        <NodeSelector className='w-[300px]' color='default' variant='flat' radius='none' />
        <Divider orientation="vertical" />
        <LinkSelector />
        <Divider orientation="vertical" />
        <ColorSelector radius='none' />
      </div>
    </div>
  </Card>
}
