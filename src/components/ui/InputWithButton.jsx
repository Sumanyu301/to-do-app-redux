import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";// import Button component from shadcn ui
import { Input } from "@/components/ui/input";
import { addTodo } from "@/redux/todoSlice";

const InputWithButton = () => {
  const dispatch = useDispatch();

  const addTodoHandler = (task) => {//this ensures that the task is not empty and then dispatches the addTodo action
    dispatch(addTodo({
      id: new Date().getTime(), // Unique id
      title: task,
      description: ""// Empty description future use
    }));
  };

  const handleAddButtonClick = () => {
    const inputValue = document.querySelector('input[type="text"]').value; // Get the input value from the DOM
    if (!inputValue.trim()) {// Check if the input value is empty or only contains spaces
      alert("Empty todo! Please enter a task.");
      return;
    }
    addTodoHandler(inputValue);
    document.querySelector('input[type="text"]').value = ""; // Empty the input value
  };

  return (
    <div className="absolute top-0 mt-48 flex justify-center items-center w-screen">
      <Input
        type="text"
        placeholder="Add a new task"
        className="w-96 bg-zinc-900 text-white mt-2"
      />
      <Button
        className="bg-indigo-500 text-white px-4 py-2 rounded ml-2 mt-2 hover:bg-indigo-600"
        onClick={handleAddButtonClick}
      >
        Add
      </Button>
    </div>
  );
};

export default InputWithButton;
