import React from "react";
import {useState} from "react"
import "./App.css";
import TodoForm from "./components/TodoForm"
import TodoList  from "./components/TodoList";
import {ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NewComp from "./components/NewComp";
 
const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);   
  const [editId, setEditId] = useState(0)

  // const submitForm = (e) =>{
  //   e.preventDefault()

  //   if(todo.length !== ""){  
  //     if(editId){
  //       const editedTodo = todos.find((t) => t.id === editId)

  //       const updatedTodods = todos.map((t) => 
  //       t.id === editedTodo.id ? (t = {id: t.id, todo}) : ({id: t.id, todo: t.todo})
  //     );
  //     setTodos(updatedTodods);
  //       setEditId(0)
  //       setTodo("")
  //       return;
  //     }
  //     setTodos([{id: `${todo}-${Date.now()}`, todo, completed: false}, ...todos])
  //   }     
  //   setTodo("")
  // } 


  const showToast = (message, type) =>{

    if(type === "success"){
      return toast.success(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        theme: "light",
      });
    }

    toast.error(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      theme: "light",
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
  
    if (todo.trim() !== "") {  
      if (editId) {
        const updatedTodos = todos.map((t) => {
          if (t.id === editId) {
            return { ...t, todo };
          }
          
          return t;
        });
  
        setTodos(updatedTodos);
        setEditId(0);
        setTodo("");
        showToast("Todo Updated", "success")
      } else {
        setTodos([{ id: `${todo}-${Date.now()}`, todo, completed: false }, ...todos]);
        setTodo("");
      }
    }else{
      showToast("Type Something !")
      console.log("write something")
    }

  };
  




  const handleDelete = (id) => {
    const deleteTodo = todos.filter((t) => t.id !== id)
    setTodos([...deleteTodo])
    showToast("Todo Deleted", "success")
  }

  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo)
    setEditId(id)
  }

  const handleCheckMark = (id) =>{
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
  setTodos(updatedTodos)    
  }

  return (
    <div className="app">

      <h1 className="text-center fw-bolder mt-4">TODO List</h1>

      <ToastContainer/>

      <div className="container text-center">

        <TodoForm submitForm={submitForm} todo={todo} setTodo={setTodo} editId={editId} />

        <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleCheckMark={handleCheckMark} />

        {/* <NewComp /> */}
        
      </div>
    </div>
  );
};

export default App;
