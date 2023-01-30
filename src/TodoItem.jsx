import React from "react";

function TodoItem({ todo, toggleDone, deleteTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
