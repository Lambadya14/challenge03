import { Button, Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./AddTodo.css"

export default function AddTodo() {
  return (
    <>
      <Container className="d-flex justify-content-between  ">
        <Row>
          <Col className="d-grid gap-2 ">
            <input placeholder="Search" />
            <Button>Search</Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-grid gap-2">
            <br />
            <Button className="AddTodo" as={Link} to="/add">
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
