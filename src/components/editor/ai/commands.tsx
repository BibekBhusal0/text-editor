import { addAIHighlight, removeAIHighlight, useEditor } from "novel";
import { useState } from "react";
import { Button } from "@heroui/button";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Icon } from "@/components/icons";
import { useDummyCompletion } from "@/components/hook/useCompletion";

type optionType = { value: string; label: string; icon?: string; onSelect?: () => void };

const AISelectorCommands = () => {
  const { editor } = useEditor();
  const [inputValue, setInputValue] = useState("");
  const { completion, loading, getAiText, setCompletion } = useDummyCompletion();
  const hasCompletion = completion.trim() !== "";

  if (!editor) return null;

  const getCompletion = async (num_words?: number) => {
    await getAiText(num_words);
    setInputValue("");
  };
  const dismiss = () => {
    setCompletion("");
    setInputValue("");
    removeAIHighlight(editor);
  };
  const insert = () => {
    const selection = editor.view.state.selection;

    editor
      .chain()
      .focus()
      .insertContentAt(selection.to + 1, completion)
      .run();
  };
  const replace = () => {
    if (!editor) return;
    const selection = editor.view.state.selection;

    editor
      .chain()
      .focus()
      .insertContentAt({ from: selection.from, to: selection.to }, completion)
      .run();
  };

  const aiOptions: optionType[] = [
    { value: "shorter", label: "Summarize in bullet points", icon: "bullet_list" },
    { value: "elaborate", label: "Elaborate and expand", icon: "ai_content" },
    { value: "improve", label: "Improve writing", icon: "ai_quill_pen" },
    { value: "rephrase", label: "Rephrase", icon: "ai_refresh" },
    { value: "transpate", label: "Translate", icon: "ai_translate" },
    { value: "emoji", label: "Add Emoji", icon: "angel_emoji" },
  ];
  const complitionOptions: optionType[] = [
    {
      value: "insert",
      label: "Insert",
      icon: "insert",
      onSelect: () => {
        insert();
        dismiss();
      },
    },
    {
      value: "add",
      label: "Replace",
      icon: "check",
      onSelect: () => {
        replace();
        dismiss();
      },
    },
    { value: "dismiss", label: "Dismiss", icon: "trash", onSelect: dismiss },
  ];

  const title = hasCompletion ? "Completion actions" : "AI commands";
  const commands = hasCompletion ? complitionOptions : aiOptions;

  const RenderOptions = ({ options }: { options: optionType[] }) => {
    return (
      <>
        {options.map((option) => (
          <CommandItem
            key={option.value}
            value={option.label}
            onSelect={() => {
              if (typeof option.onSelect === "function") option.onSelect();
              else getCompletion();
            }}
          >
            <Icon
              className="size-9 rounded-md border border-default-600 p-2 text-foreground"
              icon={option.icon}
            />
            <div className="text-lg">{option.label}</div>
          </CommandItem>
        ))}
      </>
    );
  };

  return (
    <Command className="w-80">
      <div className="flex items-center gap-2 border-b-2">
        <CommandInput
          autoFocus
          className="w-max-full text-md w-56 border-b-0"
          placeholder="Command To AI"
          value={inputValue}
          onInput={() => addAIHighlight(editor)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              const selection = editor.view.state.selection;

              editor
                .chain()
                .focus()
                .insertContentAt(selection.to + 1, "")
                .run();
              e.preventDefault();
            }
            if (e.key === "Enter" && !hasCompletion && inputValue.trim() !== "") {
              getCompletion();
              e.preventDefault();
            }
          }}
          onValueChange={setInputValue}
        />

        {!loading && !hasCompletion && (
          <Button
            isIconOnly
            className="text-xl"
            color="primary"
            size="sm"
            variant="light"
            onPress={() => {
              if (inputValue.trim() !== "") getCompletion();
            }}
          >
            <Icon icon="send" />
          </Button>
        )}
      </div>

      {loading ? (
        <div className="flex items-center gap-3 p-5 text-5xl">
          <Icon icon="loading" />
          <div className="text-lg">Loading</div>
        </div>
      ) : (
        <>
          {hasCompletion && <div className="h-auto max-h-40 overflow-auto p-2">{completion}</div>}

          <CommandGroup heading={title}>
            <CommandList>
              <RenderOptions options={commands} />
            </CommandList>
          </CommandGroup>
        </>
      )}
    </Command>
  );
};

export default AISelectorCommands;
export const AICommands = AISelectorCommands;
