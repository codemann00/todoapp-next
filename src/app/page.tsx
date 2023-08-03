"use client";

import { useState } from "react";
import { TodoObject } from "./models/Todos";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);
  const addTodo = () => {
    setTodos([...todos, { id: "1", value: todo, done: false }]);
  };

   const markTodoDone = (id: string)=>{
  setTodos(todos.map(todo =>todo.id === id ? {...todo, done:true}:todo ))
    
   }
  return (
    <>
      <header className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl">Todo List Item</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <input
          type="text"
          placeholder="Enter an item to your todo list"
          className="p-2 rounded mr-5"
          onChange={(e) => setTodo(e.target.value)}
          value = {todo}
        />

        <button className="border-2 p-2 rounded" onClick={() => addTodo()}>
          {" "}
          Add item
        </button>
        <ul className="mt-5">
          { 
           todos.map(todo => (<li 
            onClick={()=> markTodoDone(todo.id)}
            className = {"text-3xl cursor-pointer ${todo.done ? 'line-through' : 'no-underline'}"}>{todo.value}</li>))
           
           }
         
        </ul>
      </main>
    </>
  );
};

export default Home;
