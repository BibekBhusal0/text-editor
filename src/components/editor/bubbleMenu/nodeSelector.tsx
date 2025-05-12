
import { useCurrentEditor } from '@tiptap/react'
import { Icon } from '@/components/icons';
import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";


export const NodeSelector = () => {
  // const [key, setKey] = useState(1);
  // const handleClose = () => setKey(key + 1);
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  const items = [
    {
      name: "Text",
      icon: "gravity-ui:text",
      command: () => editor.chain().focus().clearNodes().run(),
      isActive: () =>
        editor.isActive("paragraph") &&
        !editor.isActive("bulletList") &&
        !editor.isActive("orderedList"),
    },
    {
      name: "Heading 1",
      icon: "gravity-ui:heading-1",
      command: () => editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Heading 2",
      icon: "gravity-ui:heading-2",
      command: () => editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Heading 3",
      icon: "gravity-ui:heading-3",
      command: () => editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    // {
    //   name: "To-do List",
    //   icon: "gravity-ui:square-check",
    //   command: () => editor.chain().focus().clearNodes().toggleTaskList().run(),
    //   isActive: () => editor.isActive("taskItem"),
    // },
    {
      name: "Bullet List",
      icon: "gravity-ui:list-ul",
      command: () => editor.chain().focus().clearNodes().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      name: "Numbered List",
      icon: "gravity-ui:list-ol",
      command: () => editor.chain().focus().clearNodes().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      name: "Quote",
      icon: "gravity-ui:quote-open",
      command: () => editor.chain().focus().clearNodes().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      name: "Code",
      icon: "gravity-ui:code",
      command: () => editor.chain().focus().clearNodes().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
  ];

  const activeItem = items.filter((item) => item.isActive()).pop() ?? {
    name: "Multiple",
  };

  return (
    <Popover
      placement='bottom-start'
    // icon={
    //   <div className="flex-center icon-sm size-full gap-2">
    //     <div className="text-sm">{activeItem.name}</div>
    //     <Icon2RN icon="ri:arrow-down-s-line" className="size-4" />
    //   </div>
    // }
    //
    >
      <PopoverTrigger>
        {activeItem.name}
      </PopoverTrigger>

      <PopoverContent>
        {items.map((i) => {
          return (
            <div
              key={i.name}
              onClick={() => {
                i.command();
                // handleClose();
              }}
              // selected={activeItem.name === i.name}
              className="gap-2 px-3 py-2">
              <Icon icon={i.icon} className="size-6 rounded-md border p-1" />

              <div>{i.name}</div>
            </div>
          );
        })}

      </PopoverContent>
    </Popover>
  );
};
