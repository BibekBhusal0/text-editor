import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { Icon } from '@/components/icons';
import { useEditor } from "novel";
import { Button, ButtonProps } from "@heroui/button";
import { cn } from "@heroui/theme";

export const AICommands = ({ className, ...props }: ButtonProps) => {
  const { editor } = useEditor();

  if (!editor) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Button className={cn('', className)} {...props}><Icon icon="ai" /></Button>
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
