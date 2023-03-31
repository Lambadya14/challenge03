import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function TodoList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-unstyled d-flex mb-2 border rounded-1 p-2">
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.task}
          onChange={(e) => {
            onChange({
              ...task,
              task: e.target.value,
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.task}
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }
  return (
    <Container>
      <label className="d-flex align-items-center justify-content-between">
        <input
          type="checkbox"
          checked={task.complete}
          onChange={(e) => {
            onChange({
              ...task,
              complete: e.target.checked,
            });
          }}
        />
        {taskContent}
        <Button onClick={() => onDelete(task.id)}>Delete</Button>
      </label>
    </Container>
  );
}
