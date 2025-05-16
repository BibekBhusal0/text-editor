import { Divider } from "@heroui/divider";

import { NodeSelector } from "./nodeSelector";
import { ChangeAlignment } from "./changeAlignment";
import { UndoRedo } from "./undo-redo";

const EditorHeader = () => {
  return (
    <div className="flex flex-row items-center bg-default-100">

      <UndoRedo />
      <ChangeAlignment type="tabs" variant="light" />
      <Divider orientation="vertical" />
      <NodeSelector className="w-[150px]" />
    </div>
  );
};

export default EditorHeader;
