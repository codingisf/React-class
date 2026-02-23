import React, { useEffect , useState} from "react";
import axios from "axios";

function Api({ name }) {

const [first, setfirst] = useState("");


  useEffect(() => {
    async function run() {
      try {
        let result = await axios.get(
          "http://jsonplaceholder.typicode.com/posts/22",
        );
        console.log(result.data);
      } catch (error) {
        console.log("ERROR WHILE THE API ROUTE");
      }
    }
    run();
  }, []);



  return (
    <>
            <input type="text" onChange={(event)=>{setfirst(event.target.value)}}  value={first}/>
    </>
  );
}

export default Api;
