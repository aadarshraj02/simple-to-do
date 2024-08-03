import TodoCard from "./TodoCard";

const TodoList = () => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoCard key={index}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </div>
  );
};

export default TodoList;
