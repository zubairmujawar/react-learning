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
  // for input handler 
  function handelInput (e) {
    const value = parseInt(e.target.value, 10) //parseInt(string, radix -> it is potional)
    setCount(value)
  }

  function countDown() {
    if (count === 0) {
      alert("Minimum Number is 0");
    }else{
      setCount(count - 1);
    }
  }

  return (
    <div className="hero conatainer countcontainer">
      <h1>{count}</h1>
      <button className="button" onClick={countUp}>Up</button>
      <button className="button" onClick={countDown}>Down</button>
      <br/>
      <input type="range" max={5} min={0} onChange={handelInput}/>
    </div>
  );
}
export default Count;
