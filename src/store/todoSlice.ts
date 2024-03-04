import { createSlice } from "@reduxjs/toolkit";
import { TodoProps } from "../shared/types/todo";

interface TodoSliceState {
  tasks: TodoProps[];
}

const initialState: TodoSliceState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleTaskCheckbox(state, action) {
      const toggledTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      toggledTask!.completed = !toggledTask?.completed;
    },
  },
});

export const { addTask, removeTask, toggleTaskCheckbox } = todoSlice.actions;

export default todoSlice.reducer;
