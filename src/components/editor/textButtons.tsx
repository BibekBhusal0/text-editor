import { useEditor } from "novel";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Icon } from "@/components/icons";

export const TextButtons = () => {
  const { editor } = useEditor();
  if (!editor) return null;

  const items = [
    {
      name: "bold",
      isActive: () => editor.isActive("bold"),
      command: () => editor.chain().focus().toggleBold().run(),
      icon: "bold",
      shortcut: "B",
    },
    {
      name: "italic",
      isActive: () => editor.isActive("italic"),
      command: () => editor.chain().focus().toggleItalic().run(),
      icon: "italic",
      shortcut: "I",
    },
    {
      name: "underline",
      isActive: () => editor.isActive("underline"),
      command: () => editor.chain().focus().toggleUnderline().run(),
      icon: "underline",
      shortcut: "U",
    },
    {
      name: "strike",
      isActive: () => editor.isActive("strike"),
      command: () => editor.chain().focus().toggleStrike().run(),
      icon: "strike",
      shortcut: "Shift + S",
    },
    {
      name: "code",
      isActive: () => editor.isActive("code"),
      command: () => editor.chain().focus().toggleCode().run(),
      icon: "code",
      shortcut: "E",
    },
  ];

  return (
    <div className="flex-center gap-2">
      {items.map(({ command, icon, isActive, name, shortcut }, index) => (
        <Tooltip
          key={index}
          placement="top"
          size="sm"
          className="backdrop-blur-sm"
          classNames={{}}
          shouldCloseOnBlur={false}
          content={
            <>
              <div className="text-md capitalize">{name}</div>
              {shortcut && (
                <div className="flex-center gap-1">
                  <Icon icon="command" className="size-4" />
                  <div className="text-sm">+ {shortcut}</div>
                </div>
              )}
            </>
          }>
          <Button
            size="sm"
            radius="sm"
            onPress={command}
            isIconOnly
            variant={isActive() ? "flat" : "light"}
            color={isActive() ? "primary" : "default"}>
            <Icon icon={icon} className='text-lg' />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};
