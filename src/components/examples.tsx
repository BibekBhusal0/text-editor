import CommentEditor from "./editor/comment-editor";
import { TodoListEditor } from "./editor/todo-editor";

export const Examples = () => {
  return (
    <div className="p-2">
      <TodoListEditor />
      <CommentEditor />
    </div>
  );
};
