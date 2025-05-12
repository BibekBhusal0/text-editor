// import { useEditor } from "novel";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import MenuPopover from "@/components/popoverMenu";
// import { cn } from "@/utils/cn";
// import useCurrentIcons from "@/hooks/useCurrentIcons";
// import { Icon2RN } from "@/theme/icons";
// import { getUrlFromString } from "@/utils/url";

import { useEffect, useRef, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, } from "@heroui/popover";
import { useCurrentEditor } from '@tiptap/react'
// import { Tooltip } from "@heroui/tooltip"
import { Button, } from "@heroui/button"
import { Icon } from '@/components/icons';
import { Input } from "@heroui/input";
import { cn } from "@heroui/react";



export const LinkSelector = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [key, setKey] = useState(1);
  const handleClose = () => setKey(key + 1);
  const { editor } = useCurrentEditor();

  useEffect(() => {
    inputRef.current && inputRef.current?.focus();
  });
  const l = editor?.getAttributes("link").href;
  const [link, setLink] = useState(l || "");

  if (!editor) return null;

  const allLink = () => {
    editor.chain().focus().unsetLink().run();
    handleClose();
  };

  const removeLink = () => {
    // const url = getUrlFromString(link);
    if (link) {
      editor.chain().focus().setLink({ href: link }).run();
      handleClose();
    }
  };

  return (
    <>
      <Popover
        placement='bottom-start'
        key={key}
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
            onPress={l ? allLink : removeLink}
            startContent={
              <Icon icon={"material-symbols:check-rounded"} className="size-4" />
            }
            children={l ? "Remove Link" : "Add Link"}
          />
        </div></PopoverContent>
      </Popover>
    </>
  );
};
