import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem flex  items-center justify-between w-2/3 p-5 mt-5 bg-zinc-900 rounded-lg">
      {children}
      <div className="actionsContainer flex gap-5">
        <button
          className="bg-yellow-200 px-3 py-0.5 rounded-md text-zinc-800"
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          Update
        </button>
        <button
          className="bg-red-200 px-3 py-0.5 rounded-md text-zinc-800"
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
