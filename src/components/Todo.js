import React from "react";

const Todo = ({setTodos, todos, todo}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    };

    const completedHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id == todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={completedHandler} value={todo.id} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            
            <button onClick={deleteHandler} value={todo.id} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
