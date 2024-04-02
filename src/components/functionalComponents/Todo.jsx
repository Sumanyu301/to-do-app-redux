import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from "@/redux/todoSlice"; // Import toggleComplete action and removeTodo action from todoSlice

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    
    const handleDeleteClick = () => {
        dispatch(removeTodo({ id: todo.id }));//giving the id of the todo to be deleted
    };

    const handleToggleComplete = () => {
        dispatch(toggleComplete({ id: todo.id })); // Dispatch toggleComplete action
    };
    let changecolor = () => 'text-green-500';
    // if true then the color will be green and the text will be line-through
    return (
        <div className="flex justify-center items-center">
            <div className={`flex justify-between items-center bg-zinc-700 p-4 rounded-lg shadow-lg mb-4 w-128 ${todo.completed ? changecolor() : ''}`}>
                <div>
                    <h1 className={`text-xl font-semibold text-black ${todo.completed ? changecolor() : ''}`}>{todo.title}</h1>
                    <p className={`text-sm text-gray-500 ${todo.completed ? 'line-through' : ''}`}>{todo.description}</p>
                </div>
                <div>
                    <button onClick={handleDeleteClick} className={`font-semibold mr-1 ${todo.completed ? 'text-gray-400' : 'text-red-500'}`}>🗑️</button>
                    <button onClick={handleToggleComplete} className={`font-semibold ${todo.completed ? 'text-gray-400' : 'text-blue-500'}`}>✅</button> 
                </div>
            </div>
        </div>
    );
    //toggleComplete button works to change the completed status of the todo
};

export default Todo;
