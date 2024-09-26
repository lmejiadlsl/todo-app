import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditTodoform } from "./EditTodoform";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      {/* Toggle the task's completed state */}
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        {/* Complete button */}
        <button
          onClick={() => toggleComplete(task.id)}
          disabled={task.completed} // Disable if the task is already completed
        >
          {task.completed ? "Completed" : "Complete"}
        </button>

        {/* Conditionally disable the Edit icon based on task completion */}
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          style={{
            color: task.completed ? "gray" : "white",
            pointerEvents: task.completed ? "none" : "auto",
          }}
        />

        {/* Conditionally disable the Remove icon based on task completion */}
        <FontAwesomeIcon
          icon={faTrash}
          style={{
            color: task.completed ? "gray" : "white",
            pointerEvents: task.completed ? "none" : "auto",
          }}
          onClick={() => !task.completed && deleteTodo(task.id)} // Prevent the click if completed
        />
      </div>
    </div>
  );
};
