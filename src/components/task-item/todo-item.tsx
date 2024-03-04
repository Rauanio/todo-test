import { useAppDispatch } from "src/store/store";
import { TodoProps } from "src/shared/types/todo";
import { removeTask, toggleTaskCheckbox } from "src/store/todoSlice";
import { Button } from "src/shared/ui";
import cls from "./todo-item.module.scss";

export const TodoItem = ({ title, completed, id }: TodoProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={cls.todoItem}>
      <div className={cls.todo}>
        <input
          className={cls.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTaskCheckbox({ id }))}
        />

        <h2>{title}</h2>
      </div>

      <Button
        variant="destructive"
        onClick={() => dispatch(removeTask({ id }))}
      >
        Delete
      </Button>
    </div>
  );
};
