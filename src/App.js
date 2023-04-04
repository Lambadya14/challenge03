import "./App.css";
import Todo from "./components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoInput from "./components/TodoInput";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/add" element={<TodoInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
