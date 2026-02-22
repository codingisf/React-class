import React, { useState } from "react";
import './App.css'


function App() {
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
    





    task[editindex] = input



    setTodos(task);



    setInput('');
    seteditindex(null);
  };


  const handleUpdate = (index) => {
    seteditindex(index);


    let task = todos[index]; 
    setInput(task);
    
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      
      {editindex === null ? (<button onClick={handleCreate}>Create</button> ) : (<button onClick={handleAdd}>Add</button>)}

      <ul className="list-disc">
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
      </ul>
    </>
  );
}

export default App;

// https://screenrec.com/share/cTVS1kjWKA
