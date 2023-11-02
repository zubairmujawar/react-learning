import React, { useCallback, useEffect, useRef, useState } from "react";

const Password2 = () => {
  const [length, setlength] = useState(5);
  const [password, setpassword] = useState("");
  const [numAllowd, setnumAllowd] = useState(false);
  const [charAllowd, setcharAllowd] = useState(false);

  const passwordGenretor = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    if (numAllowd) pass += "0123456789";
    if (charAllowd) pass += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, setcharAllowd, setnumAllowd, setpassword]);

  useEffect(() => {
    passwordGenretor();
  }, [passwordGenretor, numAllowd, charAllowd, length]);

  const passWordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div style={{ backgroundColor: "gray", padding: "2rem" }}>
      <div>
        <input
          type="text"
          style={{ padding: "8px" }}
          ref={passWordRef}
          value={password}
        />

        <button onClick={copyPassword}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          max={50}
          onChange={(e) => setlength(e.target.value)}
        />

        <p>length({length})</p>

        <label htmlFor="Num">Number</label>
        <input
          type="checkbox"
          defaultChecked={numAllowd}
          onChange={() => setnumAllowd((prev) => !prev)}
        />

        <label htmlFor="Cher">Charecter</label>
        <input
          type="checkbox"
          defaultChecked={charAllowd}
          onChange={() => setcharAllowd((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Password2;
