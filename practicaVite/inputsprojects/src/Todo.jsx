import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1>Todo List <span className="neon-effect">✓</span></h1>
            <div className="todo-form">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                    onKeyPress={(e) => e.key === "Enter" && addTodo()}
                    className="todo-input"
                />
                <button onClick={addTodo} className="add-btn">
                    <span className="btn-text">Add Task</span>
                    <span className="btn-icon">+</span>
                </button>
            </div>
            <ul className="todo-items">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                        <div className="item-content" onClick={() => toggleComplete(todo.id)}>
                            <span className={`checkmark ${todo.completed ? "checked" : ""}`}>
                                {todo.completed && "✓"}
                            </span>
                            <span className="task-text">{todo.text}</span>
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length > 0 && (
                <div className="todo-stats">
                    <span>{todos.filter(t => !t.completed).length} tasks remaining</span>
                </div>
            )}
        </div>
    );
};

export default Todo;