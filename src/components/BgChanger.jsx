import { useState } from "react";

function BgChanger() {
  const [bgcolor, setbgcolor] = useState("black");

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

  return (
    <>
      <div style={{ backgroundColor: bgcolor }}>
        <button onClick={bachangerGenretor}>Color</button>
      </div>
    </>
  );
}

export default BgChanger;