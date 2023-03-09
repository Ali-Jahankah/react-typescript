import React, { useRef } from "react";

type addTodoProps = {
  deleteHandler: (id: string) => void;
  submitHandler: (val: string) => void;
};
const AddTodo: React.FC<addTodoProps> = ({ submitHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    let val = inputRef.current?.value!;
    submitHandler(val);
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
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
