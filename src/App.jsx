import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    "Solve Leetcode in the morning",
    "Code for 2 hours everyday",
    "Learn new things daily",
  ]);

  return (
    <main>
      <TodoInput />
      <TodoList todos={todos} />
    </main>
  );
};

export default App;
