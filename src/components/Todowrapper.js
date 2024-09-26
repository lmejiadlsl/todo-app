import React, { useState } from "react";
import { Todoform } from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoform } from "./EditTodoform";
uuidv4();

export const Todowrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To Do App!</h1>
      <Todoform addTodo={addTodo} />

      {/* Check if there are any todos */}
      {todos.length === 0 ? (
        <p style={{ color: "white" }}>
          No todos available. Add a todo to get started!
        </p>
      ) : (
        todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoform editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )
      )}
    </div>
  );
};
