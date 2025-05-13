import { Divider } from "@heroui/divider";
import { TextButtons } from "./textButtons";
import { NodeSelector } from "./nodeSelector";
import { LinkSelector } from "./link-selector";
import { ColorSelector } from "./colorSelector";
import { AICommands } from "./aiCommands";
import { Card } from "@heroui/card";
import { EditorBubble } from "novel";
import { ChangeAlignment } from "./changeAlignment";

const BubbleMenu = () => {
  return (
    <EditorBubble>
      <BubbleMenuContent />
    </EditorBubble>
  );
};
export default BubbleMenu;

export const BubbleMenuContent = () => {
  return (
    <Card isBlurred className="flex w-auto flex-row" radius="sm">
      <AICommands
        className="h-auto min-w-4 px-3 text-5xl"
        radius="none"
        variant="flat"
        color="primary"
      />
      <div className="flex flex-col border-l-1">
        <div className="py-1 flex gap-2 flex-center">
          <TextButtons />
          <ChangeAlignment type='button' isIconOnly  variant='light' size='sm' className='text-lg' />
        </div>
        <Divider orientation="horizontal" />
        <div className="flex">
          <NodeSelector className="w-[150px]" color="default" variant="flat" radius="none" />
          <Divider orientation="vertical" />
          <LinkSelector color="default" variant="flat" radius="none" />
          <Divider orientation="vertical" />
          <ColorSelector radius="none" />
        </div>
      </div>
    </Card>
  );
};
