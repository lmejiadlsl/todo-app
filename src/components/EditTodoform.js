import React, { useState } from "react";

export const EditTodoform = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      editTodo(task.id, value.trim()); // Add the task only if it's not empty or just spaces
      setValue(""); // Reset the input field
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Save
      </button>
    </form>
  );
};
