import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";// import Button component from shadcn ui
import { Input } from "@/components/ui/input";
import { addTodo } from "@/redux/todoSlice";

const InputWithButton = () => {
  const dispatch = useDispatch();

  const addTodoHandler = (task) => {
    dispatch(addTodo({
      id: new Date().getTime(), // Unique id
      title: task,
      description: ""
    }));
  };

  const handleAddButtonClick = () => {
    const inputValue = document.querySelector('input[type="text"]').value;
    if (!inputValue.trim()) {
      alert("Empty todo! Please enter a task.");
      return;
    }
    addTodoHandler(inputValue);
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
