import { Button, Container, Row, Col } from "react-bootstrap";

import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <Container className="d-flex justify-content-between ">
        <Row>
          <Col className="d-grid gap-2 ">
            <input
              placeholder="Add Todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button>Search</Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <Button
              onClick={() => {
                setText("");
                onAddTask(text);
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
