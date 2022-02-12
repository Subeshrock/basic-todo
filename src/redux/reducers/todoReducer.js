import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoReducer = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    createTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        completed: false,
        createdAt: Date().toLocaleString(),
        updatedAt: null,
      };
      state.push(todo);
    },
    completeTodo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].completed = true;
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state = state.splice(index, 1, action.payload);
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state = state.splice(index, 1);
    },
  },
});

export const { createTodo, completeTodo, updateTodo, deleteTodo } =
  todoReducer.actions;
export default todoReducer.reducer;
