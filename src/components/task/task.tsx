import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoItem } from "src/components";
import { Button, Input } from "src/shared/ui";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { addTask } from "src/store/todoSlice";
import { TaskSchemaType, taskSchema } from "src/shared/utils/shema";

export const Task = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskSchemaType>({
    resolver: zodResolver(taskSchema),
  });

  const tasks = useAppSelector((state) => state.todos.tasks);
  const dispatch = useAppDispatch();

  const onSubmit = (data: TaskSchemaType) => {
    dispatch(addTask(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register("title")}
          error={errors.title}
          placeholder="Enter task"
        />
        <Button type="submit">submit</Button>
      </form>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </div>
  );
};
