import { useEditor } from "novel";
import { Button, ButtonProps } from "@heroui/button";
import { cn } from "@heroui/theme";
import { addToast } from "@heroui/toast";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";

import { Icon } from "@/components/icons";

type DownloadFormat = "html" | "md";

const downloadContent = (content: string, filename: string, format: DownloadFormat) => {
  try {
    const blob = new Blob([content], { type: `text/${format}` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${filename}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    addToast({
      title: "Download Complete",
      description: `Successfully downloaded ${filename}.${format}`,
      color: "success",
    });
  } catch (error: any) {
    addToast({
      title: "Download Failed",
      description: `Failed to download ${filename}.${format}: ${error.message}`,
      color: "danger",
    });
  }
};

export const DownloadButton = ({ className, ...props }: ButtonProps) => {
  const { editor } = useEditor();
  if (!editor) return null;

  const items = [
    {
      name: "Download HTML",
      icon: "code",
      command: () => {
        const html = editor.getHTML();
        downloadContent(html, "document", "html");
      },
    },
    {
      name: "Download Markdown",
      icon: "markdown",
      command: () => {
        const markdown = editor.storage.markdown.getMarkdown();
        downloadContent(markdown, "document", "md");
      },
    },
  ];

  props.children = props.children === undefined ? "Download" : props.children;

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Button
          size="sm"
          startContent={<Icon className="size-5 pt-1" icon="download" />}
          {...props}
          className={cn("max-w-80 flex-grow-0", className)}
        />
      </DropdownTrigger>

      <DropdownMenu
        aria-label="download types"
        classNames={{ base: "max-h-80 overflow-auto" }}
        color="primary"
        selectedKeys={[]}
        selectionMode="single"
        variant="shadow"
        onSelectionChange={() => { }}
      >
        {items.map((i) => (
          <DropdownItem
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
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
