import React from 'react';
import { v4 as uuid_v4 } from "uuid";

const Form = ({inputText, todos, setTodos, setInputText, setStatus, status}) => {

    const inputTextHandler = (e) => {
        let value = e.target.value;
        if(value.length == 0) {
            console.error("Invalid input")
        } else {
            setInputText(e.target.value);
        }
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: uuid_v4()}
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo" value={status}>
                    <option value="all">All</option>
                    <option value="pending">Pending</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </form>
    );
}

export default Form;