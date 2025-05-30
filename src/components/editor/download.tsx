import { useEditor } from "novel";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Button, ButtonProps } from "@heroui/button";
import { cn } from "@heroui/theme";
import { addToast } from "@heroui/toast";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  if (!editor) return null;

  const items = [
    {
      name: "Download HTML",
      icon: "code",
      command: () => {
        const html = editor.getHTML();

        downloadContent(html, "document", "html");
        close();
      },
    },
    {
      name: "Download Markdown",
      icon: "markdown",
      command: () => {
        const markdown = editor.storage.markdown.getMarkdown();

        downloadContent(markdown, "document", "md");
        close();
      },
    },
  ];

  props.children = props.children === undefined ? "Download" : props.children;

  return (
    <Popover
      classNames={{ content: "m-0 p-0" }}
      isOpen={open}
      placement="bottom-start"
      onOpenChange={(open) => setOpen(open)}
    >
      <PopoverTrigger>
        <Button
          size="sm"
          startContent={<Icon className="size-5 pt-1" icon="download" />}
          {...props}
          className={cn("max-w-80 flex-grow-0", className)}
        />
      </PopoverTrigger>

      <PopoverContent>
        <Listbox
          aria-label="download types"
          classNames={{ base: "max-h-80 overflow-auto" }}
          color="primary"
          selectedKeys={[]}
          selectionMode="single"
          variant="shadow"
          onSelectionChange={() => {}}
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
