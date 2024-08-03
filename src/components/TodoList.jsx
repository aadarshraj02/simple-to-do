import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
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
