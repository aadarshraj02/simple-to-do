import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header className="flex justify-around w-full">
      <input
        className="border-2 border-orange-400 rounded-lg px-4 py-1 w-1/3 text-black"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        className="bg-orange-400 px-4 py-1 rounded-lg text-black hover:opacity-80"
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
