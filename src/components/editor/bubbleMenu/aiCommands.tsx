import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { Icon } from '@/components/icons';
import { useEditor } from "novel";


export const AICommands = () => {
  const { editor } = useEditor();

  if (!editor) return null;

  return (
    <Popover>
      <PopoverTrigger className="flex-center w-full gap-2 text-center text-sm"><div>
        <Icon icon="ai" size={50} /></div>
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
