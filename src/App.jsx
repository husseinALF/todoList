import { useState } from "react";
import "./App.css";

let count = 1;
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, { title: newTodoTitle, done: false }]);
    setNewTodoTitle("");
  };

  const handleToggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <input
        className="todo-input"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleDone(index)}
          />
          <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.title}
          </span>
          <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
