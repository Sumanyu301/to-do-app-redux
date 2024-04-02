import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");// get the state from local storage
    if (serializedState === null) {// if there is no state in local storage
      return undefined;// return undefined
    }
    return JSON.parse(serializedState);// parse the state
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {// save the state to local storage
  try {
    const serializedState = JSON.stringify(state);// stringify the state
    localStorage.setItem("todos", serializedState);// set the state to local storage
  } catch {
    // Ignore write errors
  }
};

const todoSlice = createSlice({
  name: "todo",// name of the slice
  initialState: loadState() || { todos: [] },// initial state
  reducers: {
    addTodo: (state, action) => {// addTodo reducer function to add a todo its an array so simple push works
      state.todos.push(action.payload);
      saveState(state);
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);// filter out the todo with the given id
      saveState(state);
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);// find the todo with the given id
      if (todo) {
        todo.completed = !todo.completed;// toggle the completed status
        saveState(state);// save the state
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
