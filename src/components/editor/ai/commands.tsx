import { listboxItem } from "@heroui/theme";
import { getPrevText, useEditor } from "novel";
import { useState } from "react";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Icon } from "@/components/icons";

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

const AISelectorCommands = ({ onSelect = () => {} }: AISelectorCommandsProps) => {
  const { editor } = useEditor();
  const [inputValue, setInputValue] = useState("");

  if (!editor) return null;
  const slots = listboxItem({ variant: "flat", color: "primary" });

  for (const key in slots) {
    // @ts-ignore
    if (typeof slots[key] === "function") {
      // @ts-ignore
      console.log(`${key}:`, slots[key]());
    }
  }

  return (
    <Command>
      <CommandInput
        autoFocus
        placeholder="this is ai editor "
        value={inputValue}
        onValueChange={setInputValue}
      />
      <CommandGroup heading="Edit or review selection">
        {options.map((option) => (
          <CommandItem
            onSelect={(value) => {
              const slice = editor.state.selection.content();
              const text = editor.storage.markdown.serializer.serialize(slice.content);

              onSelect(text, value);
            }}
            // className="flex gap-2 px-4 border-2 "
            className={slots.base({ className: "border-2" })}
            key={option.value}
            // value={option.value}
            // startContent =
          >
            {/* <Icon icon={option.icon} className="h-4 w-4 text-primary-500" /> */}
            <Icon
              icon={option.icon}
              size={30}
              // className={slots.shortcut({ className: 'text-primary-500' })}
            />
            <div
            // className={slots.title()}
            >
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
          onSelect={() => {
            const pos = editor.state.selection.from;
            const text = getPrevText(editor, pos);

            onSelect(text, "continue");
          }}
        >
          <Icon className="h-4 w-4 text-primary-500" />
          Continue writing
        </CommandItem>
      </CommandGroup>
    </Command>
  );
};

export default AISelectorCommands;
export const AICommands = AISelectorCommands;

// export const AICommands = () => {
//   const { editor } = useEditor();
//
//   const text = 'some random text eiusmod elit ut do ut consectetur do aliqua consectetur sed labore lorem amet incididunt dolore ipsum labore tempor elit tempor dolore lorem lorem eiusmod amet ut magna dolore labore et labore tempor lorem sed adipiscing incididunt do dolor incididunt aliqua elit magna adipiscing dolor ut ipsum amet tempor dolor ipsum sit incididunt amet amet dolor elit labore dolore lorem dolore do elit amet ipsum labore sit amet sed aliqua consectetur do eiusmod adipiscing dolor ipsum incididunt dolor do adipiscing do eiusmod labore ut magna consectetur ut eiusmod dolore magna labore consectetur sit magna tempor et eiusmod eiusmod amet tempor adipiscing'
//   if (!editor) return null;
//
//   return (
//     <Command className='w-full bg-default-100 flex-center gap-3 p-2'>
//       <Button color='primary' onPress={() => addAIHighlight(editor)} > click me </Button>
//       <Button color='primary' onPress={() => { const selectation = editor.view.state.selection; editor.chain().focus().insertContentAt(selectation.to + 1, text).run(); }} >Insert below</Button>
//       <Button color='primary' onPress={() => { const selectation = editor.view.state.selection; editor.chain().focus().insertContentAt({ from: selectation.from, to: selectation.to }, text).run(); }} >Replace</Button>
//       <Button color='primary' onPress={() => {
//         const loremIpsum = generateLoremIpsum(200);
//         const selection = editor.view.state.selection;
//         editor.chain().focus().insertContentAt(selection.to + 1, loremIpsum).run();
//       }}>Generate Lorem Ipsum</Button>
//     </Command>
//   );
// };
