import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { useEditor } from "novel";
import { Button, ButtonProps } from "@heroui/button";
import { cn } from "@heroui/theme";
import { Icon } from "@/components/icons";

export const AIButton = ({ className, ...props }: ButtonProps) => {
  const { editor } = useEditor();

  if (!editor) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Button className={cn("", className)} {...props}>
          <Icon icon="ai" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        this is supposed to be a ai editor
      </PopoverContent>
    </Popover>
  );
};
