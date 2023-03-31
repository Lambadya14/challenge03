import "./App.css";
import AddTask from "./components/AddTodo";
import TaskApp from "./components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskApp />} />
          <Route element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
