import TodoReducer from "./TodoReducer";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import React, { useReducer } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.css";
import data from "../data/data.json";

function Todo() {
  const id = uuid();
  const [tasks, dispatch] = useReducer(TodoReducer, data);

  const handleAddTask = (task) => {
    dispatch({
      type: "added",
      id: id,
      task: task,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  const handleDeleteAllTask = (taskId) => {
    dispatch({
      type: "deletedAllTask",
      id: taskId,
    });
  };
  const handleDeleteDoneTask = (taskId) => {
    dispatch({
      type: "deletedDoneTask",
      id: taskId,
    });
  };

  return (
    <>
      <Container className="Todo">
        <Col>
          <h1 className="text-center">TodoSearch</h1>
          <AddTodo onAddTask={handleAddTask} />
        </Col>
        <Row>
          <Col>
            <h1 className="text-center">TodoList</h1>
            <div className="d-flex justify-content-around mb-3">
              <Button className=" w-25 text-center rounded-2">
                All({data.length})
              </Button>
              <Button className=" w-25 text-center rounded-2">
                Done ({data.filter((i) => i.complete === true).length})
              </Button>

              <Button className=" w-25 text-center rounded-2">
                Tasks ({data.filter((i) => i.complete === false).length})
              </Button>
            </div>
            <TodoList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around">
            <Button onClick={handleDeleteAllTask}>Delete All Task</Button>
            <Button onClick={handleDeleteDoneTask}>Delete Done Task</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Todo;
