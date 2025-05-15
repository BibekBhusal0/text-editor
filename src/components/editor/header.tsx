import { Divider } from "@heroui/divider";
import { NodeSelector } from "./nodeSelector";
import { AIButton } from "./ai";
import { ChangeAlignment } from "./changeAlignment";

const EditorHeader = () => {
  return (
    <div className="flex flex-row items-center bg-default-100">
      <AIButton className="min-w-4 px-3 text-2xl" color="primary" radius="none" variant="flat" />
      <ChangeAlignment
        type="tabs"
        variant="light"
      />
      <Divider orientation="vertical" />
      <NodeSelector className="w-[150px]" />
    </div>
  );
};

export default EditorHeader;
