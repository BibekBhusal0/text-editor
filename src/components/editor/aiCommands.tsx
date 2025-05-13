import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { Icon } from '@/components/icons';
import { useEditor } from "novel";


type AICommandProps = { size?: number }
export const AICommands = ({ size }: AICommandProps) => {
  const { editor } = useEditor();

  if (!editor) return null;

  return (
    <Popover>
      <PopoverTrigger className="">
        <Icon icon="ai" size={size} />
      </PopoverTrigger>
      <PopoverContent
      >
        <div>
          This is supposed to be ai editor
        </div>
      </PopoverContent>
    </Popover>
  );
};
