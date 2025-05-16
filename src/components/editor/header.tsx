
import { NodeSelector } from "./nodeSelector";
import { ChangeAlignment } from "./changeAlignment";
import { UndoRedo } from "./undo-redo";
import { DownloadButton } from "./download";

const EditorHeader = () => {
  return (
    <div className="flex flex-row justify-between p-2 items-center bg-default-100">
      <div className="flex items-center gap-2">

        <UndoRedo />
        <ChangeAlignment type="tabs" variant="light" />
      </div>
      <div className="flex gap-2 items-center">

        <NodeSelector className="w-[150px]" />
        <DownloadButton isIconOnly variant='shadow'   >{""}</DownloadButton>
      </div>
    </div>
  );
};

export default EditorHeader;
