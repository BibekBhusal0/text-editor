import { NodeSelector } from "./nodeSelector";
import { ChangeAlignment } from "./changeAlignment";
import { UndoRedo } from "./undo-redo";
import { DownloadButton } from "./download";

const EditorHeader = () => {
  return (
    <div className="bg-default-100 flex flex-row items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <UndoRedo />
        <ChangeAlignment type="tabs" variant="light" />
      </div>
      <div className="flex items-center gap-2">
        <NodeSelector className="w-[150px]" />
        <DownloadButton isIconOnly variant="shadow">
          {""}
        </DownloadButton>
      </div>
    </div>
  );
};

export default EditorHeader;
