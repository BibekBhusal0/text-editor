import { Divider } from "@heroui/divider";
import { Card } from "@heroui/card";
import { EditorBubble } from "novel";
import { Button } from "@heroui/button";
import { useState } from "react";

import { Icon } from "../icons";

import { TextButtons } from "./textButtons";
import { NodeSelector } from "./nodeSelector";
import { LinkSelector } from "./link-selector";
import { ColorSelector } from "./colorSelector";
import { ChangeAlignment } from "./changeAlignment";
import { AICommands } from "./ai/commands";

export const BubbleMenu = () => {
  const [aiOpen, setAIOpen] = useState(false);

  return (
    <EditorBubble
      tippyOptions={{
        placement: aiOpen ? "bottom-start" : "top",
        onHidden: () => setAIOpen(false),
      }}
    >
      <Card className="flex-row" radius="sm">

        {aiOpen ? (
          <AICommands />
        ) : (

          <>
            <Button
              className="h-auto min-w-4 px-3 text-5xl"
              color="primary"
              radius="none"
              variant="flat"
              onPress={() => setAIOpen(true)}
            >
              <Icon icon="ai" />{" "}
            </Button>

            <div className="flex flex-col border-l-1">
              <div className="flex-center flex gap-2 py-1">
                <TextButtons />
                <ChangeAlignment
                  isIconOnly
                  className="text-lg"
                  size="sm"
                  type="button"
                  variant="light"
                />
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
          </>
        )}
      </Card>
    </EditorBubble>
  );
};
export default BubbleMenu;
