import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenretor = () => {
  const [length, setlength] = useState(5);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef hook
  const passWordRef = useRef(null)

  const passGenretor = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "<>?/=+-()[]|,.%$#@!";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);

  }, [length, setcharAllowed, setnumAllowed, setpassword]);

  // for copy the password to clip password
  const copyPassword = useCallback(()=>{
    passWordRef.current?.select();
    passWordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passGenretor();
  }, [length, numAllowed, charAllowed, passGenretor]);

  return (
    <div className="PaasDiv">
      <div className="">
        <input type="text" className="counterInput"
         value={password}  ref={passWordRef}/>
        <button className="Btn"
        onClick={copyPassword}
        >copy</button>
      </div>

      <div className="itemsDiv">
        <p>Length ({length})</p>
        <input
          type="range"
          max={20}
          min={2}
          value={length}
          onChange={(e) => setlength(e.target.value)}
        />
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={numAllowed}
          onChange={() => setnumAllowed((prev) => !prev)}
        />
        <label htmlFor="num" />
        Num
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={charAllowed}
          onChange={() => setcharAllowed((prev) => !prev)}
        />
        <label htmlFor="cher" />
        Characters
      </div>
    </div>
  );
};

export default PasswordGenretor;
