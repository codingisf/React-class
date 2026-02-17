import Button from "./Button.jsx";
import {useState} from 'react'

function App() {


//  let a;



  const [count , setCount] = useState(1);
  // 1 + 1 = 2
  // 2 + 1 = 3


  // const [variable , update_function] = usestate();

  return (
    <>
      {/* 1 */}
      {/* 2 */}

      <button
        onClick={() => {
          console.log(count);

          setCount(count+1);
        }}
      >
        Click mee
      </button>
    </>
  );
}

export default App;
