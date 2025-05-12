
import { useCurrentEditor } from '@tiptap/react'
import { Tooltip } from "@heroui/tooltip"
import { Button, ButtonGroup } from "@heroui/button"
import { Icon } from '@/components/icons';



export const TextButtons = () => {
  const { editor } = useCurrentEditor();
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
    // {
    //   name: "underline",
    //   isActive: () => editor.isActive("underline"),
    //   command: () => editor.chain().focus().toggleUnderline().run(),
    //   icon: "gravity-ui:underline",
    //   shortcut: "U",
    // },
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
    // {
    //   name: "Math Formula",
    //   isActive: () => editor.isActive("math"),
    //   command: () => {
    //     if (editor.isActive("math")) {
    //       editor.chain().focus().unsetLatex().run();
    //     } else {
    //       const { from, to } = editor.state.selection;
    //       const latex = editor.state.doc.textBetween(from, to);
    //
    //       if (!latex) return;
    //
    //       editor.chain().focus().setLatex({ latex }).run();
    //     }
    //   },
    //   icon: "gravity-ui:curly-brackets-function",
    //   shortcut: "M",
    // },
  ];

  return (
    <ButtonGroup variant="bordered" className="p-2">
      {items.map(({ command, icon, isActive, name, shortcut }, index) => (
        <Tooltip
          key={index}
          placement="top"
          content={
            <div className="flex-center flex-col gap-2">
              <div className="text-md capitalize">{name}</div>
              {shortcut && (
                <div className="flex-center gap-1">
                  <Icon icon="mingcute:command-line" className="size-4" />
                  <div className="text-sm">+ {shortcut}</div>
                </div>
              )}
            </div>
          }>
          <Button
            size="md"
            onPress={() => command()}
            // sx={{
            //   color: isActive() ? "primary.main" : "text.primary",
            //   backgroundColor: isActive() ? "var(--primary-3)" : "transparent",
            //   paddingX: "0",
            // }}
            variant="bordered">
            <Icon icon={icon} className="size-4" />
          </Button>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};
