import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["create app", "create logo"]);
  const [input, setInput] = useState("");

  const handleCreate = () => {
    const task = [...todos, input];
    console.log(task);
    setTodos(task);
    setInput("");
  };

  const handleDelete = (index) => { //1
    let task = todos.filter((value,i)=> i !=  index)
    setTodos(task);
     
  };

  // for (i = 0 ; i<10;i++){
// dfjgoijgods  
// }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleCreate}>Create</button>

      <ul>
        {todos.map(  (value, index) => (
          <li key={index}>
            {value}{'  -   '+index}


            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>


          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
