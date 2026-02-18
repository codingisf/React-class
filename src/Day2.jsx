import { useState } from "react";

function Day2() {
  const [text, setText] = useState("");




  const handleClick = () => {
    console.log("button clicked");
    console.log(text);
    setText('');
  };

// filter


  // let num = [1,2,3,4,5];


//  let new_num = num.filter((value)=> value<=5 );


//  console.log(new_num);
//  console.log(num);




// Map

// let total = num.map(value => value+1);


//  console.log(total);
 



// reduce


//  let num = [1,2,3,4,5];



//  let n1 = 0 ;

//  let a =1;

//  n1 = n1+a;

//  console.log(num.reduce(   (total,values)=> total = total + values)  , 0  );
 







  return (
    <>
      <input
        type="text"
        value={text}
        onChange={
          
          (event) => {
          // console.log(event.target.value);
          setText(event.target.value);
          
        }
      
      }
      />
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default Day2;
