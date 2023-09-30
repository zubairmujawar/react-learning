import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("Black");

  return (
    <div className="mainDiv" style={{ backgroundColor: color }}>
      <div className="innerDiv">
        <button onClick={()=>setcolor("red")} className="Btn" style={{ backgroundColor: "red" }}>
          Red
        </button>
        <button onClick={()=>setcolor("yellow")} className="Btn" style={{ backgroundColor: "yellow" }}>
          yellow
        </button>
        <button onClick={()=>setcolor("blue")} className="Btn" style={{ backgroundColor: "blue" }}>
          blue
        </button>
        <button onClick={()=>setcolor("green")} className="Btn" style={{ backgroundColor: "green" }}>
          green
        </button>
      </div>
    </div>
  );
}

export default App;
