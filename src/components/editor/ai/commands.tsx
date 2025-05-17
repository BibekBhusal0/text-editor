import { useEditor } from "novel";
import { useState } from "react";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Icon } from "@/components/icons";
import { useDummyCompletion } from "@/components/hook/useCompletion";
import { Button } from "@heroui/button";

type optionType = { value: string, label: string, icon?: string, onSelect?: () => void }

const AISelectorCommands = () => {
  const { editor } = useEditor();
  const [inputValue, setInputValue] = useState("");
  const { completion, loading, getAiText, setCompletion } = useDummyCompletion();
  const hasCompletion = completion.trim() !== "";

  if (!editor) return null;
  const getCompletion = async (num_words?: number) => {
    await getAiText(num_words);
    setInputValue("");
  }
  const dismiss = () => {
    setCompletion("")
    setInputValue("")
  }
  const insert = () => {
    const selection = editor.view.state.selection;
    editor
      .chain()
      .focus()
      .insertContentAt(selection.to + 1, completion)
      .run();
  }

  const replace = () => {
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
  }

  const aiOptions: optionType[] = [
    { value: "shorter", label: "Summarize in bullet points", icon: "bullet_list" },
    { value: "elaborate", label: "Elaborate and expand", icon: "ai_content" },
    { value: "improve", label: "Improve writing", icon: "ai_quill_pen" },
    { value: 'rephrase', label: "Rephrase", icon: 'ai_refresh' },
    { value: 'transpate', label: "Translate", icon: 'ai_translate' },
    { value: "emoji", label: "Add Emoji", icon: "angel_emoji" },
  ];
  const complitionOptions: optionType[] = [
    { value: 'insert', label: 'Insert', icon: "insert", onSelect: () => { insert(); dismiss(); } },
    { value: 'add', label: 'Replace', icon: "check", onSelect: () => { replace(); dismiss(); } },
    { value: 'dismiss', label: 'Dismiss', icon: "trash", onSelect: dismiss },
  ]

  const title = hasCompletion ? 'Completion actions' : 'AI commands'
  const commands = hasCompletion ? complitionOptions : aiOptions

  const RenderOptions = ({ options }: { options: optionType[] }) => {
    return <>
      {options.map((option) => (
        <CommandItem
          onSelect={() => {
            if (typeof option.onSelect === 'function') option.onSelect()
            else getCompletion()
          }}
          className="flex gap-2 px-4"
          key={option.value}
          value={option.label}
        >
          <Icon className="text-foreground" icon={option.icon} size={30} />
          {option.label}
        </CommandItem>
      ))}
    </>
  }

  return (

    <Command className="w-80">
      <div className='flex gap-2 items-center border-b-2'><CommandInput
        autoFocus
        className='w-max-full w-56 border-b-0 text-md'
        placeholder="Command To AI"
        value={inputValue}
        onValueChange={setInputValue}
      />

        {(!loading && !hasCompletion) && <Button size='sm' isIconOnly variant='light' color='primary' className='text-xl' onPress={() => {
          if (inputValue.trim() !== '') getCompletion
        }} >
          <Icon icon='send' />
        </Button>}
      </div>

      {
        loading ?
          <div className='flex items-center pl-5 gap-3 text-5xl'><Icon icon="loading" /><div className='text-lg'>Loading</div></div>
          : (

            <>
              {hasCompletion &&
                <div className='h-auto max-h-40 p-2 overflow-auto'>{completion}</div>
              }


              <CommandGroup heading={title}>
                <CommandList><RenderOptions options={commands} /></CommandList>
              </CommandGroup>

            </>
          )}
    </Command>
  );
};

export default AISelectorCommands;
export const AICommands = AISelectorCommands;
