import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";


const ShowTodo = () => {
    const todos = useSelector((state) => state?.todos?.todos); // subscribing to the store
    if (!Array.isArray(todos)) {
        return null; // or handle the error in some other way
    }

    return (
        <div className=" bg-zinc-900 min-h-128 max-w-screen-2xl">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default ShowTodo;
