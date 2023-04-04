import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

function TodoInput() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!task) {
      alert("task is required!");
      return;
    }

    const dataLength = data.length;
    data.push({
      id: dataLength + 1,
      task,
      complete:false
    });

    return navigate("/");
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className="text-center">
            <h1>InputTodo</h1>
          </div>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="task">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                required={true}
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              {task.length < 1 && (
                <Form.Text className="text-muted">
                  Enter Todo.
                </Form.Text>
              )}
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoInput;
