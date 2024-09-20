import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [item, setItem] = useState(null); // Track the index of the item being updated
    const [priority, setPriority] = useState('High');
    const [filteredTodos, setFilteredTodos] = useState([]); // To store search results
    const [search, setSearch] = useState(''); // To track search input
    const [completedTasks, setCompletedTasks] = useState([]); // Store completed tasks

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        // When todos change, reset the filteredTodos to show all
        setFilteredTodos(todos);
    }, [todos]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setTodos([...todos, { text: input.trim(), priority }]); // Add the new todo
            setInput(''); // Clear the input field
        }
    };

    const deleteHandler = (id) => {
        const deletedTodo = todos.filter((_, index) => id !== index);
        setTodos(deletedTodo);
    };

    const updateHandler = (id) => {
        setItem(id); // Store the index of the todo being updated
        setInput(todos[id].text); // Load the current value of the todo into the input field
        setPriority(todos[id].priority); // Load the current priority
    };

    const updateTodo = (e) => {
        e.preventDefault();
        const updatedTodos = todos.map((todo, index) =>
            index === item ? { text: input, priority } : todo // Update the selected todo
        );
        setTodos(updatedTodos);
        setPriority('High'); // Reset to default after update
        setInput(''); // Clear the input field after update
        setItem(null); // Reset the update state
    };

    const selectHandler = (e) => {
        setPriority(e.target.value); // Update the priority when selected
    };

    const searchHandler = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);
        const filtered = todos.filter(todo => 
            todo.priority.toLowerCase().includes(searchValue)
        );
        setFilteredTodos(filtered); // Update the filteredTodos based on search
    };

    const doneHandler = (task) => {
        setCompletedTasks([...completedTasks, task]);
        deleteHandler(todos.indexOf(task)); // Remove from current todos
    };

    return (
        <>
            <h1>Todo Form</h1>

            <form onSubmit={item !== null ? updateTodo : submitHandler}>
                <input
                    type="text"
                    value={input}
                    onChange={inputHandler}
                    placeholder="Enter the todo"
                />
                <button type="submit">
                    {item !== null ? 'Update todo' : 'Add todo'}
                </button>
                <select value={priority} onChange={selectHandler}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </form>

            {todos.length > 0 && (
                <input 
                    value={search}
                    onChange={searchHandler} 
                    placeholder="Search todos based on priority" 
                />
            )}

            {filteredTodos.map((task, index) => (
                <div key={index}>
                    <h3>{task.text}</h3>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                    <button onClick={() => updateHandler(index)}>Update</button>
                    <button onClick={() => doneHandler(task)}>Done</button>
                    <h3>Priority: {task.priority}</h3>
                </div>
            ))}

            {
                completedTasks.length > 0 && (
                    <Link to="/completed" state={{ completedTasks }}>
                        See completed tasks
                    </Link>
                )
            }
        </>
    );
};
