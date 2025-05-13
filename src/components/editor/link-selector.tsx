import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Button, ButtonProps } from "@heroui/button";
import { Input } from "@heroui/input";
import { cn } from "@heroui/theme";
import { useEditor } from "novel";

import { getUrlFromString } from "@/utils/getUrlFromString";
import { Icon } from "@/components/icons";

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
            size="sm"
            startContent={<Icon icon="link" />}
            {...props}
            className={cn("w-18 min-w-1 p-2", className)}
          >
            <div
              className={cn(
                "text-sm underline decoration-stone-400 underline-offset-4",
                editor.isActive("link") && "text-blue-500"
              )}
            >
              Link
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="flex-center flex-col gap-2 p-3">
          <Input
            autoFocus
            label="Link"
            labelPlacement="outside"
            size="md"
            value={link}
            variant="faded"
            onChange={(e) => setLink(e.target.value)}
          />

          <Button
            color={l ? "danger" : "success"}
            size="sm"
            startContent={<Icon className="size-4" icon="add" />}
            variant={l ? "bordered" : "solid"}
            onPress={l ? removeLink : addlink}
          >
            {l ? "Remove Link" : "Add Link"}
          </Button>
        </PopoverContent>
      </Popover>
    </>
  );
};
