import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;