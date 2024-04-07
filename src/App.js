import React from "react";
import {useState} from "react"
import "./App.css";

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0)

  const submitForm = (e) =>{
    e.preventDefault()

    if(todo.length !== ""){
      if(editId){
        const editedTodo = todos.find((t) => t.id === editId)

        const updatedTodods = todos.map((t) => 
        t.id === editedTodo.id ? (t = {id: t.id, todo}) : ({id: t.id, todo: t.todo})
      );
      setTodos(updatedTodods);
      // setEditId(0)
      // setTodo("")
      // editedTodo.todo = todo 
        setEditId(0)
        setTodo("")
        return;
      }
      setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos])
    }    
    setTodo("")
    console.log(todos)
  }

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((t) => t.id !== id)
    setTodos([...deleteTodo])
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo)
    setEditId(id)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>

        <form className="todoForm" onSubmit={submitForm}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button> {editId? "Update" : "Add"}</button>
        </form>

        <ul className="list">

        {
          todos.map((t)=> (
            <li className="single-todo">
            <span className="todo-text" key={t.id}>{t.todo}</span>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={()=> handleDelete(t.id)}>Delete</button>
          </li>
          ))
        }

          
          
         
        </ul>
      </div>
    </div>
  );
};

export default App;
