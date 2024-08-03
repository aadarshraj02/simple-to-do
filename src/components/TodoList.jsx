import TodoCard from "./TodoCard";

const TodoList = () => {
  let todos = [
    "Solve Leetcode in the morning",
    "Code for 2 hours everyday",
    "Learn new things daily",
  ];
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoCard key={index} />
      ))}
    </div>
  );
};

export default TodoList;
