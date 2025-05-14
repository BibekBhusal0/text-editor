import { Divider } from "@heroui/divider";
import { NodeSelector } from "./nodeSelector";
import { AICommands } from "./aiCommands";
import { ChangeAlignment } from "./changeAlignment";

const EditorHeader = () => {
  return (
    <div className='flex bg-default-100 flex-row items-center'>
      <AICommands
        className="min-w-4 px-3 text-2xl"
        color="primary"
        radius="none"
        variant="flat"
      />
      <ChangeAlignment
        type='tabs'
        variant="light"
        classNames={{
          tab: 'text-md'
        }}
      />
      <Divider orientation="vertical" />
      <NodeSelector className="w-[150px]" />
    </div>
  );
};

export default EditorHeader
