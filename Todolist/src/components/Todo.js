import React, { useState } from 'react';

function Todo() {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addTask = () => {
        if (value.trim()) {
            setTodo([...todo, value]);
            setValue("");
        }
    };

    const removeTask = (index) => { // Ensure the removeTask function is defined here
        const newTodo = [...todo];
        newTodo.splice(index, 1); // Remove the task at the specified index
        setTodo(newTodo);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={addTask}>Add</button>
            <ul>
                {todo.map((task, index) => (
                    <li key={index}>
                        {task} 
                        <button  onClick={() => removeTask(index)}>Remove</button> {/* Correctly calls removeTask */}
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Todo;
