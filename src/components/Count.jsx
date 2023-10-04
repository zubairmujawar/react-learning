import React, {useState} from "react";

function Count() {
  const [count, setCount] = useState(0);

  function countUp() {
    
    if (count === 5) {
      alert(`Max Number is ${count}!`);
    }else{
      setCount(count + 1);
    }
  }

  function countDown() {
    
    if (count === 0) {
      alert("Last Number is 0");
    }else{
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
      <br/>
      <input type="range" max={5} min={0} onChange={(e)=>setCount(e.target.value)}/>
    </div>
  );
}
export default Count;
