import React from "react";

type todos = {
  todos: { id: string; task: string }[];
  deleteHandler: (id: string) => void;
};
const Todos: React.FC<todos> = ({ todos, deleteHandler }) => {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          {item.task} |{" "}
          <button onClick={() => deleteHandler(item.id)} className="btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
