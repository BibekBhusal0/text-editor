import { useEffect, useRef, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { useCurrentEditor } from '@tiptap/react'
import { Button, } from "@heroui/button"
import { Icon } from '@/components/icons';
import { Input } from "@heroui/input";
import { cn } from "@heroui/theme";
import { getUrlFromString } from "@/utils/getUrlFromString";



export const LinkSelector = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { editor } = useCurrentEditor();

  useEffect(() => {
    inputRef.current && inputRef.current?.focus();
  });
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
      <Popover
        placement='bottom-start'
      >
        <PopoverTrigger>
          <div className="icon-sm flex-center size-full gap-2">
            <Icon icon="link" />
            <div
              className={cn(
                "text-sm underline decoration-stone-400 underline-offset-4",
                editor.isActive("link") && "text-blue-500"
              )}>
              Link
            </div>
          </div>

        </PopoverTrigger>
        <PopoverContent><div className="flex-center flex-col gap-2 px-2 py-1">
          <Input
            size="sm"
            label="Link"
            variant="bordered"
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
          <Button
            size="sm"
            variant={l ? "bordered" : "solid"}
            color={l ? "danger" : "success"}
            onPress={l ? removeLink : addlink}
            startContent={
              <Icon icon='add' className="size-4" />
            }
            children={l ? "Remove Link" : "Add Link"}
          />
        </div></PopoverContent>
      </Popover>
    </>
  );
};
