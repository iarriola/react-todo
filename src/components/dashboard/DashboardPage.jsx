import React, {useState, useEffect} from "react";
//import { Link } from 'react-router-dom';

import Form from "./Form"
import TodoList from './TodoList';

const DashboardPage = () => {
    const [inputText, setInputText] =  useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState(getLocalStatus());
    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
      getLocalData();
    }, []);
  
    useEffect(() => {
      filterHandler();
      saveLocalData();
    }, [todos, status]);
  
    const filterHandler = () => {
      switch(status) {
        case 'done': {
          setFilterTodos(todos.filter(todo => todo.completed === true));
          break;
        }
        case 'pending': {
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
        }
        default: {
          setFilterTodos(todos);
          break;
        }
      }
    }
  
    function saveLocalData() {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('todos-status', JSON.stringify(status));
    }
  
    function getLocalData() {
      if(localStorage.getItem('todos') === null) {
        //TODO: GET: /v1/api/resources an persist it on the local stora
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let localTodo = JSON.parse(localStorage.getItem('todos'));
        setTodos(localTodo);
      }
  
      setStatus(getLocalStatus());
  
    }
  
    function getLocalStatus() {
      if(localStorage.getItem('todos-status') === null) {
        localStorage.setItem('todos-status', JSON.stringify("all"));
        return JSON.parse(localStorage.getItem('todos-status'))
      } else {
        return JSON.parse(localStorage.getItem('todos-status'))
      }
    }
  
    return (
      <div className="dashboard jumbotron">

        <header>
          <h1>Dashboard</h1>
        </header>
  
        <Form
          setStatus={setStatus}
          status={status}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />

        <TodoList
          filterTodos={filterTodos}
          setFilterTodos={setFilterTodos}
          setTodos={setTodos}
          todos={todos}
        />

      </div>
    );
}

export default DashboardPage;
