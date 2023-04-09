import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

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
        {task.complete ? (
          <strike>{task.task}</strike>
        ) : (
          <span>{task.task}</span>
        )}
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
          <BsFillPencilFill
            className="text-primary"
            onClick={() => setIsEditing(true)}
          />
          <BsTrashFill
            style={{ color: "red" }}
            onClick={() => onDelete(task.id)}
          />
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
