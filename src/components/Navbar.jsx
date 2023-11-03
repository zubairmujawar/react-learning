import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-conatainer">
      <div className="logo"><img src="./images/nike_logo.png" alt="img"/></div>
      <div>
      <ul>
        <li> <NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/count'>Counter</NavLink></li>
        <li> <NavLink to='/PasswordGenretor'>Password</NavLink></li>
      </ul>  
      </div>
      
      
    </nav>
    
  );
}
