import { useEditor } from "novel";
import { useState } from "react";
import { Command, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Icon } from "@/components/icons";
import { useDummyCompletion } from "@/components/hook/useCompletion";
import { Button } from "@heroui/button";

const options = [
  { value: "shorter", label: "Summarize in bullet points", icon: "bullet_list" },
  { value: "elaborate", label: "Elaborate and expand", icon: "ai_content" },
  { value: "improve", label: "Improve writing", icon: "ai_quill_pen" },
  { value: 'rephrase', label: "Rephrase", icon: 'ai_refresh' },
  { value: 'transpate', label: "Translate", icon: 'ai_translate' },
  { value: "emoji", label: "Add Emoji", icon: "angel_emoji" },
];

const AISelectorCommands = () => {
  const { editor } = useEditor();
  const [inputValue, setInputValue] = useState("");
  const { completion, loading, getAiText, setCompletion } = useDummyCompletion();
  const hasCompletion = completion.trim() !== "";

  if (!editor) return null;
  const getCompletion = async () => {
    await getAiText();
    setInputValue("");
  }

  return (

    <Command className="w-80">
      <div className='flex bg-primary-50 gap-2 items-center'><CommandInput
        autoFocus
        className='w-max-full w-56'
        placeholder="Command To AI"
        value={inputValue}
        onValueChange={setInputValue}
      />

        <Button size='sm' isIconOnly onPress={() => {
          if (inputValue.trim() !== '') getCompletion
        }} >
          <Icon icon='send' />
        </Button>
      </div>

      {
        loading ?
          <div className='flex items-center pl-5 gap-3 text-5xl '><Icon icon="loading" /><div className='text-lg'>Loading</div></div>
          : (

            <>
              {hasCompletion ? (
                <>
                  <div className='h-auto max-h-40 p-2 overflow-auto'>{completion}</div>
                  <CommandGroup heading="Completion actions">
                    <CommandItem onSelect={() => setCompletion("")}>
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
                            completion
                          )
                          .run();
                      }}
                    >
                      Replace
                    </CommandItem>
                  </CommandGroup>
                </>

              ) : (

                <CommandGroup heading="AI commands">
                  {options.map((option) => (
                    <CommandItem
                      onSelect={getCompletion}
                      className="flex gap-2 px-4"
                      key={option.value}
                    >
                      <Icon className="text-foreground" icon={option.icon} size={30} />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
    </Command>
  );
};

export default AISelectorCommands;
export const AICommands = AISelectorCommands;
