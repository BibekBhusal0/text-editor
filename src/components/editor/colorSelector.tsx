import { useEditor } from "novel";
import { Button, ButtonProps } from "@heroui/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, DropdownSection } from "@heroui/dropdown";
import { cn } from "@heroui/theme";

import { Icon } from "@/components/icons";

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
  const selectedKeys = new Set([
    "color" + (activeColorItem?.name || "Default"),
    "highlight" + (activeHighlightItem?.name || "Default"),
  ]);

  return (
    <Dropdown >
      <DropdownTrigger className="flex-center w-full gap-2 text-center text-sm">
        <Button
          endContent={<Icon className="size-5 pt-1" icon="arrow_down" />}
          size="sm"
          {...props}
          className={cn("m-0 w-12 min-w-1 p-2", className)}
          style={{
            color: activeColorItem?.color,
            backgroundColor: activeHighlightItem?.color || "transparent",
            ...props.style,
          }}
        >
          A
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Select Colors"
        classNames={{ base: "max-h-80 h-auto overflow-auto" }}
        color="primary"
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        variant="bordered"
      >
        <DropdownSection title="Colors">
          {TEXT_COLORS.map(({ name, color }) => (
            <DropdownItem
              key={"color" + name}
              classNames={{ title: "text-foreground" }}
              startContent={
                <div className={cls} style={{ color }}>
                  A
                </div>
              }
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
            >
              {name}
            </DropdownItem>
          ))}
        </DropdownSection>

        {/* <DropdownSection title="Highlight">
          {HIGHLIGHT_COLORS.map(({ name, color }) => (
            <DropdownItem
              key={"highlight" + name}
              classNames={{ title: "text-foreground" }}
              startContent={
                <div
                  className={cn(cls, "text-foreground")}
                  style={{ backgroundColor: color || "transparent" }}
                >
                  A
                </div>
              }
              onClick={() => {
                editor.commands.unsetHighlight();
                name !== "Default" && editor.chain().focus().setHighlight({ color }).run();
              }}
            >
              {name}
            </DropdownItem>
          ))}
        </DropdownSection> */}
      </DropdownMenu>
    </Dropdown>
  );
};
