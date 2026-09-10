import React, { useState } from "react";
import Todo from "./todo";
import "../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") {
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>To-Do List</h1>

      <div className="todo-input">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
        />

        <button onClick={addTodo}>Add Todo</button>
      </div>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;