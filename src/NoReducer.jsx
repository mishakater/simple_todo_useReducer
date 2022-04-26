import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ToDoNoReducer from "./ToDoNoReducer";
import WithReduser from "./WithReduser";

function NoReducer() {
  const [name, setName] = useState("");
  const [todos, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todos, { id: Date.now(), name: name, completed: false }]);
    setName(" ");
  };

  const handleDelete = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <ToDoNoReducer
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
      <Link to={"/withreducer"}>Go to With Reducer</Link>
    </div>
  );
}

export default NoReducer;
