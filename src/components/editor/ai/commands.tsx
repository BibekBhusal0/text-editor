import { getPrevText, useEditor } from "novel";
import { useState, } from "react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Icon } from "@/components/icons";
import { useDummyCompletion } from "@/components/hook/useCompletion";

const options = [
  {
    value: "improve",
    label: "Improve writing",
    icon: "ai",
  },
  {
    value: "fix",
    label: "Fix grammar",
    icon: "todo_list",
  },
  {
    value: "shorter",
    label: "Make shorter",
    icon: "bullet_list",
  },
  {
    value: "longer",
    label: "Make longer",
    icon: "heading1",
  },
];

interface AISelectorCommandsProps {
  onSelect?: (value: string, option: string) => void;
}


const AISelectorCommands = ({ onSelect = () => { } }: AISelectorCommandsProps) => {
  const { editor } = useEditor();
  const [inputValue, setInputValue] = useState("");
  const { completion, loading, getAiText, setCompletion } = useDummyCompletion();
  const hasCompletion = completion.trim() !== '';


  if (!editor) return null;


  return (
    <Command>
      <CommandInput
        autoFocus
        placeholder="this is ai editor "
        value={inputValue}
      />
      {!hasCompletion && !loading && (
        <>
          <CommandGroup heading="Edit or review selection">
            {options.map((option) => (
              <CommandItem
                onSelect={async (value) => {
                  const slice = editor.state.selection.content();
                  const text = editor.storage.markdown.serializer.serialize(slice.content);
                  await getAiText()
                  setInputValue("");
                  onSelect(text, value);
                }}
                className="flex gap-2 px-4 border-2 "
                key={option.value}
              >
                <Icon
                  icon={option.icon}
                  size={30}
                />
                <div>
                  {option.label}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Use AI to do more">
            <CommandItem
              className="gap-2 px-4"
              value="continue"
              onSelect={async () => {
                const pos = editor.state.selection.from;
                const text = getPrevText(editor, pos);
                await getAiText()
                setInputValue("");
                onSelect(text, "continue");
              }}
            >
              <Icon className="h-4 w-4 text-primary-500" />
              Continue writing
            </CommandItem>
          </CommandGroup>
        </>
      )}

      {hasCompletion && !loading && (
        <>
          <div>{completion}</div>
          <CommandGroup heading="Completion actions">
            <CommandItem
              onSelect={() => {
                setCompletion("");
              }}
            >
              Dismiss
            </CommandItem>
            <CommandItem
              onSelect={() => {
                if (!editor) return;
                const selection = editor.view.state.selection;
                editor
                  .chain()
                  .focus()
                  .insertContentAt(selection.to + 1, completion)
                  .run();
              }}
            >
              Insert
            </CommandItem>
            <CommandItem
              onSelect={() => {
                if (!editor) return;
                const selection = editor.view.state.selection;
                editor
                  .chain()
                  .focus()
                  .insertContentAt(
                    {
                      from: selection.from,
                      to: selection.to,
                    },
                    completion,
                  )
                  .run();
              }}
            >
              Replace
            </CommandItem>
          </CommandGroup>
        </>
      )}

      {loading && <div>Loading...</div>}
    </Command>
  );
};

export default AISelectorCommands;
export const AICommands = AISelectorCommands;
