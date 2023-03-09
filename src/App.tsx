import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [data, setData] = useState<{ id: string; task: string }[]>([]);
  const submitHandler = (val: string) => {
    if (val.length > 0) {
      setData((prevState) => [
        ...prevState,
        { id: String(Math.random() * 100), task: val },
      ]);
    } else {
      alert("Please insert a task first");
    }
  };
  const deleteHandler = (id: string) => {
    if (id) {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="App">
      <AddTodo
        deleteHandler={deleteHandler}
        submitHandler={submitHandler}
      ></AddTodo>
      <Todos todos={data} deleteHandler={deleteHandler}></Todos>
    </div>
  );
}

export default App;
