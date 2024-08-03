import { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="enter tasks..."
        className=""
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
