import { useEditor } from "novel";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Button, ButtonProps } from "@heroui/button";
import { cn } from "@heroui/theme";

import { Icon } from "@/components/icons";

export const NodeSelector = ({ className, ...props }: ButtonProps) => {
  const { editor } = useEditor();

  if (!editor) return null;
  const items = [
    {
      name: "Text",
      icon: "text",
      command: () => editor.chain().focus().clearNodes().run(),
      isActive: () =>
        editor.isActive("paragraph") &&
        !editor.isActive("bulletList") &&
        !editor.isActive("orderedList"),
    },
    {
      name: "Heading 1",
      icon: "heading1",
      command: () => editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Heading 2",
      icon: "heading2",
      command: () => editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Heading 3",
      icon: "heading3",
      command: () => editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      name: "To-do List",
      icon: "todo_list",
      command: () => editor.chain().focus().clearNodes().toggleTaskList().run(),
      isActive: () => editor.isActive("taskItem"),
    },
    {
      name: "Bullet List",
      icon: "bullet_list",
      command: () => editor.chain().focus().clearNodes().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      name: "Numbered List",
      icon: "number_list",
      command: () => editor.chain().focus().clearNodes().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      name: "Quote",
      icon: "quote",
      command: () => editor.chain().focus().clearNodes().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      name: "Code",
      icon: "code",
      command: () => editor.chain().focus().clearNodes().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
  ];

  const activeItem = items.filter((item) => item.isActive()).pop() ?? { name: "Multiple" };

  return (
    <Popover classNames={{ content: "m-0 p-0" }} placement="bottom-start">
      <PopoverTrigger>
        <Button
          color="primary"
          endContent={<Icon className="size-5 pt-1" icon="arrow_down" />}
          size="sm"
          {...props}
          className={cn("w-52 max-w-80 flex-grow-0", className)}
        >
          {activeItem.name}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Listbox
          aria-label="Select notes"
          classNames={{ base: "max-h-80 overflow-auto" }}
          color="primary"
          selectedKeys={new Set([activeItem.name])}
          selectionMode="single"
          variant="shadow"
        >
          {items.map((i) => (
            <ListboxItem
              key={i.name}
              className="gap-2 px-3 py-2"
              startContent={
                <Icon
                  className="rounded-md border border-default-500 p-1"
                  icon={i.icon}
                  size={27}
                />
              }
              onClick={() => i.command()}
            >
              {i.name}
            </ListboxItem>
          ))}
        </Listbox>
      </PopoverContent>
    </Popover>
  );
};
