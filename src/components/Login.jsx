import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import UserContextProvider from "../Context/UserContextProvider";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const {setuser} = useContext(UserContext)

  const inputHandel = (e) => {
    e.preventDefault()
    setuser({username, password})
  };

  return (
    <>
      <div className="conatainer hero PaasDiv">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="input"
        />
        <button onClick={inputHandel} className="button">
          submit
        </button>
      </div>
    </>
  );
};

export default Login;
