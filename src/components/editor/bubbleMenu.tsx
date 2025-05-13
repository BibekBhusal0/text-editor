import { Divider } from "@heroui/divider";
import { Card } from "@heroui/card";
import { EditorBubble } from "novel";

import { TextButtons } from "./textButtons";
import { NodeSelector } from "./nodeSelector";
import { LinkSelector } from "./link-selector";
import { ColorSelector } from "./colorSelector";
import { AICommands } from "./aiCommands";
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
        color="primary"
        radius="none"
        variant="flat"
      />
      <div className="flex flex-col border-l-1">
        <div className="flex-center flex gap-2 py-1">
          <TextButtons />
          <ChangeAlignment isIconOnly className="text-lg" size="sm" type="button" variant="light" />
        </div>
        <Divider orientation="horizontal" />
        <div className="flex">
          <NodeSelector className="w-[150px]" color="default" radius="none" variant="flat" />
          <Divider orientation="vertical" />
          <LinkSelector color="default" radius="none" variant="flat" />
          <Divider orientation="vertical" />
          <ColorSelector radius="none" />
        </div>
      </div>
    </Card>
  );
};
