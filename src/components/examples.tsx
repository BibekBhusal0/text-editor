import CommentEditor from "./editor/comment-editor";
import { TodoListEditor } from "./editor/todo-editor";

export const Examples = () => {
  return (
    <div className = 'flex gap-3 flex-col' >
      <TodoListEditor />
      <CommentEditor />
    </div>
  );
};
