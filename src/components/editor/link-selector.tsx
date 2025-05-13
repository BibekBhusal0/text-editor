import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Button, ButtonProps } from "@heroui/button";
import { Icon } from "@/components/icons";
import { Input } from "@heroui/input";
import { cn } from "@heroui/theme";
import { getUrlFromString } from "@/utils/getUrlFromString";
import { useEditor } from "novel";

export const LinkSelector = ({ className, ...props }: ButtonProps) => {
  const { editor } = useEditor();
  const l = editor?.getAttributes("link").href;
  const [link, setLink] = useState(l || "");

  if (!editor) return null;

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  const addlink = () => {
    const url = getUrlFromString(link);
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <>
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <Button
            // className="icon-sm flex-center size-full gap-2"
            startContent={<Icon icon="link" />}
            size="sm"
            {...props}
            className={cn("w-18 min-w-1 p-2", className)}>
            <div
              className={cn(
                "text-sm underline decoration-stone-400 underline-offset-4",
                editor.isActive("link") && "text-blue-500"
              )}>
              Link
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="flex-center flex-col gap-2 p-3">
          <Input
            size="md"
            labelPlacement="outside"
            autoFocus
            label="Link"
            variant="faded"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
          <Button
            size="sm"
            variant={l ? "bordered" : "solid"}
            color={l ? "danger" : "success"}
            onPress={l ? removeLink : addlink}
            startContent={<Icon icon="add" className="size-4" />}
            children={l ? "Remove Link" : "Add Link"}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};
