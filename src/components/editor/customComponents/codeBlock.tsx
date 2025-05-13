import { NodeViewContent, NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import { Button, ButtonProps } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";
import { Tooltip } from "@heroui/tooltip";
import { cn } from "@heroui/theme";

import { Icon } from "@/components/icons";

export type CopyButtonProps = Omit<ButtonProps, "children"> & {
  copyIcon?: string;
  copiedIcon?: string;
  showTooltip?: boolean;
  iconCls?: string;
  children: string;
};

export function CopyButton({
  copyIcon = "copy",
  copiedIcon = "check",
  showTooltip = true,
  iconCls,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    console.log("ccc");
    navigator.clipboard.writeText(props.children);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const cls = "size-5 transition-all duration-300 absolute-center";
  const button = (
    <Button className="min-w-10" size="sm" variant="flat" onPress={copyToClipboard} {...props}>
      <div className="relative size-full px-0 py-2">
        <Icon className={cn(cls, copied ? "scale-0" : "scale-100", iconCls)} icon={copyIcon} />
        <Icon className={cn(cls, copied ? "scale-100" : "scale-0", iconCls)} icon={copiedIcon} />
      </div>
    </Button>
  );

  if (!showTooltip) return button;

  return <Tooltip children={button} content={copied ? "Copied" : "Copy"} placement="left" />;
}

export const CodeBlockComponent = ({ node, updateAttributes, extension }: NodeViewProps) => {
  var currentLanguage = node.attrs.language || node.attrs.defaultLanguage;

  currentLanguage = currentLanguage === "null" ? "auto" : currentLanguage;
  const codeContent = node.textContent;
  const languages = extension.options.lowlight.listLanguages();

  return (
    <NodeViewWrapper className="relative mx-2 my-4 rounded-lg border">
      <div className="sticky top-0 z-10 h-0 w-full">
        <div className="absolute right-0 flex w-full items-center justify-end gap-4 rounded-t-lg px-4 py-3">
          <Select
            aria-label="Select language"
            classNames={{
              innerWrapper: "uppercase",
              base: "max-w-36",
            }}
            selectedKeys={[currentLanguage]}
            size="sm"
            onSelectionChange={(e) => {
              if (typeof e === "string") updateAttributes({ language: e });
              if (e.currentKey) updateAttributes({ language: e.currentKey });
            }}>
            <SelectItem key="auto">Auto</SelectItem>
            {languages.map((lang: string) => (
              <SelectItem key={lang} className="uppercase">
                {lang}
              </SelectItem>
            ))}
          </Select>
          <CopyButton children={codeContent} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <pre
          className="hljs m-0 w-max min-w-full rounded-none border-none text-base"
          spellCheck={"false"}>
          <NodeViewContent as="code" />
        </pre>
      </div>
    </NodeViewWrapper>
  );
};
