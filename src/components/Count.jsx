import React, {useState} from "react";

function Count() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
    if (count >= 5) {
      alert(`Max Number is ${count}!`);
    }
  }

  function countDown() {
    setCount(count - 1);
    if (count <= 0) {
      alert("Last Number is 0");
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
      <input type="range" max={55} min={0} onChange={(e)=>setCount(e.target.value)}/>
    </div>
  );
}
export default Count;
