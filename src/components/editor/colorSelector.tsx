import { useEditor } from "novel";
import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { Icon } from '@/components/icons';
import { Listbox, ListboxItem, ListboxSection } from "@heroui/listbox";
import { Button, ButtonProps } from "@heroui/button";
import { cn } from "@heroui/theme";

export interface BubbleColorMenuItem {
  name: string;
  color: string;
}

const TEXT_COLORS: BubbleColorMenuItem[] = [
  { name: "Default", color: "" },
  { name: "Blue", color: "#006FEE" },
  { name: "Purple", color: "#7828C8" },
  { name: "Green", color: "#17C964" },
  { name: "Red", color: "#F31260" },
  { name: "Pink", color: "#FF4ECD" },
  { name: "Yellow", color: "#F5A524" },
];

const HIGHLIGHT_COLORS: BubbleColorMenuItem[] = [
  { name: "Default", color: "" },
  { name: "Blue", color: "#006FEE66" },
  { name: "Purple", color: "#7828C866" },
  { name: "Green", color: "#17C96466" },
  { name: "Red", color: "#F3126066" },
  { name: "Pink", color: "#FF4ECD66" },
  { name: "Yellow", color: "#F5A52466" },
];

export const ColorSelector = ({ className, ...props }: ButtonProps) => {
  const { editor } = useEditor();

  if (!editor) return null;
  const activeColorItem = TEXT_COLORS.find(({ color }) => editor.isActive("textStyle", { color }));
  const activeHighlightItem = HIGHLIGHT_COLORS.find(({ color }) =>
    editor.isActive("highlight", { color })
  );
  const cls = "rounded-xs  border-default-500 border px-[6px] py-0 font-medium";

  return (
    <Popover
      classNames={{ content: 'm-0 p-0' }}
    >

      <PopoverTrigger className="flex-center  w-full gap-2 text-center text-sm">
        <Button
          endContent={<Icon icon="arrow_down" className="size-5 pt-1" />}
          {...props}
          style={{
            color: activeColorItem?.color,
            backgroundColor: activeHighlightItem?.color || 'transparent',
            ...props.style
          }}
          className={cn('min-w-1 w-20 p-2 m-0', className)}
        >
          A </Button>
      </PopoverTrigger>
      <PopoverContent
      >

        <Listbox
          classNames={{ base: 'max-h-80 w-36 h-auto overflow-auto' }}
          aria-label='Select Colors'
          selectedKeys={new Set([activeColorItem?.name || 'Default', activeColorItem?.color || 'Default'])}
          selectionMode="multiple"
          variant="bordered"
          color='primary'
        >

          <ListboxSection showDivider title='Colors' >
            {TEXT_COLORS.map(({ name, color, }) =>
              <ListboxItem
                key={name}
                onClick={() => {
                  if (name === "Default") {
                    editor.commands.unsetColor();
                  } else {
                    editor
                      .chain()
                      .focus()
                      .setColor(color || "")
                      .run();
                  }
                }}
                classNames={{ title: 'text-foreground' }}
                startContent={
                  <div className={cls} style={{ color }}>A</div>
                }
              >
                {name}
              </ListboxItem>
            )}
          </ListboxSection>

          <ListboxSection title='Highlight'>
            {HIGHLIGHT_COLORS.map(({ name, color },) => (
              <ListboxItem
                key={name}
                onClick={() => {
                  editor.commands.unsetHighlight();
                  name !== "Default" && editor.chain().focus().setHighlight({ color }).run();
                }}
                classNames={{ title: 'text-foreground' }}
                startContent={<div className={cn(cls, 'text-foreground')} style={{ backgroundColor: color || 'transparent' }}>
                  A
                </div>}
              >
                {name}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>


      </PopoverContent>
    </Popover>
  );
};
