import React, { useState, UserContext, useContext } from "react";
import UserContextProvider from "../Context/UserContextProvider";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const {setUser} = useContext(UserContext)

  const inputHandel = (e) => {
    e.preventDefault()
    setUser(username, password)
  };

  return (
    <UserContextProvider>
      <div className="conatainer hero PaasDiv">
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
    </UserContextProvider>
  );
};

export default Login;
