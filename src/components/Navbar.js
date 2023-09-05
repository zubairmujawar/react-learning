import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo"><img src="./images/nike_logo.png" alt="img"></img></div>
      <ul>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Location</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}
