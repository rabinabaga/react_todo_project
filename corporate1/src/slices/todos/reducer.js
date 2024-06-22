import { createSlice } from "@reduxjs/toolkit";
import {  addNewTodo, updateTodo, deleteTodo, getProjects, addNewProject } from './thunk';
export const initialState = {
  todos: [],
  projects: [],
  error: {},
};

const TodosSlice = createSlice({
  name: "TodosSlice",
  initialState,
  reducer: {
    getTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
   
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id.toString() === action.payload.id.toString()
          ? { ...todo, ...action.payload }
          : todo
      );
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id + "" !== action.payload + ""
      );
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
    builder.addCase(addNewProject.pending, () => {
      console.log("add new to do project pending");
    });
    builder.addCase(addNewProject.fulfilled, (state, action) => {
      console.log("here in builder");
      console.log("action payload ", action.payload);
      console.log(state.projects);
      state.projects.unshift(action.payload);
    });
    builder.addCase(addNewProject.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
  },
});

export const {getTodo} = TodosSlice.actions;


export default TodosSlice.reducer;