
import { useCurrentEditor } from '@tiptap/react'
import { Tooltip } from "@heroui/tooltip"
import { Button, ButtonGroup } from "@heroui/button"
import { Icon } from '@/components/icons';
import { cn } from '@heroui/theme';



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
    <ButtonGroup
      variant="solid"
      color='primary'
      className="p-2"
    >
      {items.map(({ command, icon, isActive, name, shortcut }, index) => (
        <Tooltip
          key={index}
          placement="top"
          size='sm'
          className='backdrop-blur-sm'
          classNames={{
          }}
          shouldCloseOnBlur={false}
          content={
            < >
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
            radius='sm'
            onPress={command}
            className={cn(
              'min-w-7 border-1 border-primary-400 bg-primary-400',
              isActive() ? 'bg-opacity-80 hover:bg-opacity-90 text-foreground' : 'bg-opacity-20 hover:bg-opacity-30 text-primary-400'
            )}
          // variant={isActive() ? 'solid' : 'bordered'}
          // variant={isActive() ? 'flat' : 'light'}
          >
            <Icon icon={icon} size={15} />
          </Button>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};
