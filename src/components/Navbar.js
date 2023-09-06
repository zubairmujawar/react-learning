import React from "react";

export default function Navbar() {
  return (
    <nav className="conatainer">
      <div className="logo"><img src="./images/nike_logo.png" alt="img"/></div>

      <ul>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Location</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <button className="loginBtn" >login</button>
    </nav>
    
  );
}
