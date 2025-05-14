import { useEditor } from "novel";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Kbd, KbdKey } from "@heroui/kbd";
import { Icon } from "@/components/icons";

type commandItemType = {
  name: string;
  icon: string;
  isActive: () => boolean;
  command: () => void;
  shortcut?: {
    modifiers: KbdKey | KbdKey[];
    key: string;
  };
};

export const TextButtons = () => {
  const { editor } = useEditor();

  if (!editor) return null;

  const items: commandItemType[] = [
    {
      name: "bold",
      isActive: () => editor.isActive("bold"),
      command: () => editor.chain().focus().toggleBold().run(),
      icon: "bold",
      shortcut: { modifiers: "command", key: "b" },
    },
    {
      name: "italic",
      isActive: () => editor.isActive("italic"),
      command: () => editor.chain().focus().toggleItalic().run(),
      icon: "italic",
      shortcut: { modifiers: "command", key: "b" },
    },
    {
      name: "underline",
      isActive: () => editor.isActive("underline"),
      command: () => editor.chain().focus().toggleUnderline().run(),
      icon: "underline",
      shortcut: { modifiers: "command", key: "u" },
    },
    {
      name: "strike",
      isActive: () => editor.isActive("strike"),
      command: () => editor.chain().focus().toggleStrike().run(),
      icon: "strike",
      shortcut: { modifiers: ["command", "shift"], key: "s" },
    },
    {
      name: "code",
      isActive: () => editor.isActive("code"),
      command: () => editor.chain().focus().toggleCode().run(),
      icon: "code",
      shortcut: { modifiers: ["command", "shift"], key: "E" },
    },
  ];

  return (
    <div className="flex-center gap-2">
      {items.map(({ command, icon, isActive, name, shortcut }, index) => (
        <Tooltip
          key={index}
          className="backdrop-blur-sm"
          classNames={{}}
          content={
            <>
              <div className="text-lg capitalize">{name}</div>
              {shortcut && (
                <Kbd className="text-xl uppercase" keys={shortcut.modifiers}>
                  {shortcut.key}
                </Kbd>
              )}
            </>
          }
          placement="top"
          shouldCloseOnBlur={false}
          size="sm"
        >
          <Button
            isIconOnly
            color={isActive() ? "primary" : "default"}
            radius="sm"
            size="sm"
            variant={isActive() ? "flat" : "light"}
            onPress={command}
          >
            <Icon className="text-lg" icon={icon} />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};
