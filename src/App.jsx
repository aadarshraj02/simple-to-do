import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  let todos = [
    "Solve Leetcode in the morning",
    "Code for 2 hours everyday",
    "Learn new things daily",
  ];
  return (
    <main>
      <TodoInput />
      <TodoList />
    </main>
  );
};

export default App;
