import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { useCurrentEditor } from '@tiptap/react'
import { Icon } from '@/components/icons';


export const AICommands = () => {
  const { editor } = useCurrentEditor();

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
