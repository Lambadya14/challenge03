import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";


function TodoButton({ task, onChange, onDelete }) {
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
        <div className="d-flex gap-3">
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
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => onDelete(task.id)}>Delete</Button>
        </div>
      </>
    );
  }
  return (
    <Container>
      <label className="d-flex align-items-center justify-content-between">
        {taskContent}
      </label>
    </Container>
  );
}
export default TodoButton;
