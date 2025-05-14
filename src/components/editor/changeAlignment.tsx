import { useEditor } from "novel";
import { Popover, PopoverTrigger, PopoverContent, PopoverProps } from "@heroui/popover";
import { Button, ButtonProps } from "@heroui/button";
import { Tabs, Tab, TabsProps } from "@heroui/tabs";
import { Listbox, ListboxItem } from "@heroui/listbox";

import { Icon } from "@/components/icons";
import { IconSvgProps } from "@/types";

// import { cn } from "@heroui/theme";

type alignemntOpts = { fullName?: boolean } & (
  | ({ type?: "button" } & Partial<ButtonProps>)
  | ({ type?: "tabs" } & Partial<TabsProps>)
  | { type?: "popover"; buttonProps?: Partial<ButtonProps>; popoverProps?: Partial<PopoverProps> }
);

export const ChangeAlignment = ({ type = "button", fullName = false, ...props }: alignemntOpts) => {
  const { editor } = useEditor();

  if (!editor) return null;
  editor.isActive({ textAlign: "right" });
  const alignments = ["left", "right", "center", "justify"];
  const currentAlignmet = alignments.find((i) => editor.isActive({ textAlign: i })) || "left";
  const setAlignment = (val: string) => editor.chain().focus().setTextAlign(val).run();
  const AlignmentIcon = ({ icon = currentAlignmet, ...props }: IconSvgProps) => {
    return <Icon icon={"align_" + icon} {...props} />;
  };
  const AlignmentItem = ({ icon = currentAlignmet }: { icon?: string }) => {
    return fullName ? (
      <div className="capitalize">
        align {icon} <AlignmentIcon icon={icon} />{" "}
      </div>
    ) : (
      <AlignmentIcon icon={icon} />
    );
  };

  if (type === "tabs")
    return (
      <Tabs
        aria-label="Change Alignment"
        size="sm"
        variant="light"
        {...(props as TabsProps)}
        selectedKey={currentAlignmet}
        classNames={{
          tab: ["text-md p-2", (props as TabsProps).classNames?.tab],
          tabList: ["gap-0", (props as TabsProps).classNames?.tabList],
          ...(props as TabsProps).classNames,
        }}
        onSelectionChange={(e) => setAlignment(e as string)}
      >
        {alignments.map((a) => (
          <Tab key={a} title={<AlignmentItem icon={a} />} />
        ))}
      </Tabs>
    );

  if (type === "popover")
    return (
      <Popover {...(props as { popoverProps?: PopoverProps }).popoverProps}>
        <PopoverTrigger>
          <Button size="sm" {...(props as { buttonProps?: ButtonProps }).buttonProps}>
            <AlignmentItem />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Listbox classNames={{ base: "m-0 p-0" }} selectedKeys={[currentAlignmet]} variant="flat">
            {alignments.map((a) => (
              <ListboxItem key={a} onPress={() => setAlignment(a)}>
                <AlignmentItem icon={a} />
              </ListboxItem>
            ))}
          </Listbox>
        </PopoverContent>
      </Popover>
    );

  if (type === "button")
    return (
      <Button
        isIconOnly
        {...(props as ButtonProps)}
        onPress={() => {
          setAlignment(
            alignments[(alignments.findIndex((e) => e === currentAlignmet) + 1) % alignments.length]
          );
        }}
      >
        <AlignmentItem />{" "}
      </Button>
    );
};
