import { EditorCommand, EditorCommandItem, EditorCommandEmpty, EditorCommandList } from "novel";
import { Card } from "@heroui/card";

import { slashCommandItems } from "./items";

import { Icon } from "@/components/icons";

export const SlashCommand = () => {
  return (
    <EditorCommand className="rounded-themed z-50 w-[250px] px-1 py-3">
      <Card isBlurred className="h-auto max-h-[300px]">
        <EditorCommandEmpty className="px-2">No results</EditorCommandEmpty>
        <EditorCommandList>
          {slashCommandItems.map((item) => (
            <EditorCommandItem
              key={item.title}
              className="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm aria-selected:bg-primary-400"
              value={[item.title, ...(item.searchTerms === undefined ? [] : item.searchTerms)].join(
                " "
              )}
              onCommand={(val) => item.command?.(val)}
            >
              <Icon
                className="size-10 rounded-md border border-default-600 p-2"
                icon={item.icon as string}
              />
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
