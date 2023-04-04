import React from "react";
import TodoButton from "./TodoButton";

function TodoList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <React.Fragment>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.name}
            className="list-unstyled d-flex mb-2 border rounded-1 p-2"
          >
            <TodoButton
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
export default TodoList;
