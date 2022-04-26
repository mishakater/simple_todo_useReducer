import React from "react";

function ToDoNoReducer({ todo, handleDelete, handleToggle }) {
  return (
    <div>
      <span style={{ color: todo.completed ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={() => handleToggle(todo.id)}>Toggle</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoNoReducer;
