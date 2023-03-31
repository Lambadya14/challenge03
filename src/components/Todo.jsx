import { useReducer } from "react";
import AddTask from "./AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import TodoList from "./TodoList";

export default function Todo() {
  const [tasks, dispatch] = useReducer(tasksReducer, data);

  function handleAddTask(task) {
    dispatch({
      type: "added",
      id: nextId++,
      task: task,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <Container>
        <Col>
          <h1 className="text-center">TodoSearch</h1>
          <AddTask onAddTask={handleAddTask} />
        </Col>
        <Row>
          <Col>
            <h1 className="text-center">TodoList</h1>
            <TodoList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around">
            <Button>Delete All Task</Button>
            <Button>Delete Done Task</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.task,
          complete: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const data = [
  {
    id: 1,
    task: "Nyuci mobil",
    complete: true,
  },
  {
    id: 2,
    task: "Memberi makan kucing",
    complete: true,
  },
  {
    id: 3,
    task: "Olahraga 10 menit",
    complete: false,
  },
  {
    id: 4,
    task: "Sarapan sereal",
    complete: true,
  },
  {
    id: 5,
    task: "Belanja harian",
    complete: false,
  },
  {
    id: 6,
    task: "Ngeprint tugas",
    complete: true,
  },
  {
    id: 7,
    task: "Bayar tagihan bulanan",
    complete: true,
  },
  {
    id: 8,
    task: "Berangkat kuliah",
    complete: false,
  },
  {
    id: 9,
    task: "Les bahasa Inggris",
    complete: true,
  },
  {
    id: 10,
    task: "Ke rumah Sabrina",
    complete: false,
  },
];

let nextId = data.length;
