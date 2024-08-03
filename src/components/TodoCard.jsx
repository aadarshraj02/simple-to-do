import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem flex  items-center justify-between w-2/3 p-5 mt-5 bg-zinc-900 rounded-lg">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
