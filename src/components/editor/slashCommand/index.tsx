import { Icon } from "@/components/icons";
import { EditorCommand, EditorCommandItem, EditorCommandEmpty, EditorCommandList } from "novel";
import { slashCommandItems } from "./items";
import { Card } from "@heroui/card";

export const SlashCommand = () => {
  return (
    <EditorCommand className="rounded-themed z-50 w-[250px] px-1 py-3">
      <Card isBlurred className="h-auto max-h-[300px]">
        <EditorCommandEmpty className="px-2">No results</EditorCommandEmpty>
        <EditorCommandList>
          {slashCommandItems.map((item) => (
            <EditorCommandItem
              value={[item.title, ...(item.searchTerms === undefined ? [] : item.searchTerms)].join(
                " "
              )}
              onCommand={(val) => item.command?.(val)}
              className="aria-selected:bg-primary-400 flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm"
              key={item.title}>
              <Icon icon={item.icon as string} className="size-10 rounded-md border border-default-600 p-2" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs">{item.description}</p>
              </div>
            </EditorCommandItem>
          ))}
        </EditorCommandList>
      </Card>
    </EditorCommand>
  );
};
