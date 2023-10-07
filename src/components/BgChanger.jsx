import { useState } from "react";

function BgChanger() {
  const [bgcolor, setbgcolor] = useState("black");
  const [input, setinput] = useState("");

  function randomColorGenretor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const yellow = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${yellow})`;
    return color;
  }

  const bachangerGenretor = () => {
    const newBgColor = randomColorGenretor();
    setbgcolor(newBgColor);
  };
  // text magic

  const eventHandler = (e) => {
    setinput(e.target.value);
  };
  const uperCase = () => {
    if (input === "") {
      alert("type somtihing");
    } else {
      setinput(input.toUpperCase());
    }
  };
  // const lowerCase = () => {
  //   input === ""? alert("type somthing") : 
  //   setinput(input.toLowerCase());
  // };

  return (
    <>
      <div className="mainDiv"
        style={{
          backgroundColor: bgcolor,
          minHeight: "80vh",
          minWidth: "50vw",
          borderRadius:"10px"
        }}
      >
        <button onClick={bachangerGenretor} style={{marginTop:"2rem"}}>Change Color</button>
        <div>
          <h1>Text magic</h1>
          <textarea
            name=""
            id="textarea"
            placeholder="type here"
            cols="50"
            rows="10"
            value={input}
            onChange={eventHandler}
            style={{padding:"8px", borderRadius:"4px", fontSize:"18px"}}
          ></textarea>
          <div style={{display:"flex", justifyContent:"center" , alignItems:"center", gap:"8px"}}>
          <button onClick={uperCase}>Uper Case</button>
          {/* <button onClick={lowerCase}>Lower Case</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
