import React, { useState } from "react";

function Todo() {

 const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editindex, seteditindex] = useState(null);

  const handleCreate = () => {
    const task = [...todos, input];
    setTodos(task);
    setInput("");
  };

  const handleDelete = (index) => {
    //1
    let task = todos.filter((value, i) => i != index);
    setTodos(task);
  };

  const handleAdd = () => {

    let task = [...todos];

    console.log(task);

    console.log(task[editindex]);

    task[editindex] = input;

    setTodos(task);

    setInput("");
    seteditindex(null);
  };

  const handleUpdate = (index) => {
    seteditindex(index);

    let task = todos[index];
    setInput(task);
  };

  return (
   <>
   <div className="flex flex-col justify-center h-[100vh] w-full items-center">

        <h1 className="text-green-600">Todo App</h1>

        <div className="w-full h-full">

        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-fit border border-black outline-none"
        />

        {editindex === null ? (
          <button onClick={handleCreate} className="w-fit">Create</button>
        ) : (
          <button onClick={handleAdd} className="w-fit">Add</button>
        )}

        <ol className="list-disc">
          {todos.map((value, index) => (
            <li key={index} className="text-blue-800 font-mono text-3xl ">
              {value}
              {"  -   " + index}

              <button
                onClick={() => {
                  handleUpdate(index);
                }}
              >
                update
              </button>

              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ol>
        </div>
      </div>

      <button>Log OUt</button>
   </>
  )
}

export default Todo