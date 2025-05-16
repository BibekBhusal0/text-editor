import { Button, ButtonProps } from "@heroui/button";
import { Icon } from "../icons";
import { cn } from "@heroui/theme";
import { useEditor } from "novel";

export function UndoRedo({ className, ...props }: ButtonProps) {
  const { editor } = useEditor()
  if (!editor) return null
  const defaultProps: ButtonProps = {
    variant: 'flat', size: 'sm', isIconOnly: true, className: 'text-lg',
  }
  return (
    <div className='flex-center p-2 gap-2'>
      <Button {...defaultProps} {...props} className={cn(defaultProps.className, className)} onPress={() => editor.chain().focus().undo().run()} >
        <Icon icon='undo' />
      </Button>
      <Button {...defaultProps} {...props} className={cn(defaultProps.className, className)} onPress={() => editor.chain().focus().redo().run()} >
        <Icon icon='redo' />
      </Button>
    </div>
  )
}
