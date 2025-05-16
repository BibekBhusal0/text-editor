import { useEditor } from "novel";
import { useState, } from "react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
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

const AISelectorCommands = () => {
  const { editor } = useEditor();
  const [inputValue, setInputValue] = useState("");
  const { completion, loading, getAiText, setCompletion } = useDummyCompletion();
  const hasCompletion = completion.trim() !== '';

  if (!editor) return null;

  return (
    <Command className='w-80'>
      <CommandInput
        autoFocus
        placeholder="Command To AI"
        value={inputValue}
        onValueChange={setInputValue}
      />
      {
        loading ? (

          <Icon icon='loading' />
        ) : (
          <>

            {hasCompletion ? (
              <CommandGroup heading="AI commands">
                {options.map((option) => (
                  <CommandItem
                    onSelect={async () => {
                      await getAiText()
                      setInputValue("");
                    }}
                    className="flex gap-2 px-4"
                    key={option.value}
                  >
                    <Icon
                      className='text-foreground'
                      icon={option.icon}
                      size={30}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) :
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

            }

          </>

        )
      }



    </Command>
  );
};

export default AISelectorCommands;
export const AICommands = AISelectorCommands;
