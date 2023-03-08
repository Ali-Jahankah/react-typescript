import React, { useRef } from "react";

const AddTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };
  return (
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Task" ref={inputRef} />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
