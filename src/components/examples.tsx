import CommentEditor from "./editor/comment-editor";
import { TodoListEditor } from "./editor/todo-editor";

export const Examples = () => {
  return (
    <div className="flex flex-col gap-3">
      <TodoListEditor />
      <CommentEditor />
    </div>
  );
};
