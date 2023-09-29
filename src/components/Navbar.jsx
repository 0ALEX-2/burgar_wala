// src/components/Navbar.js
import React from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-end">
          <li className="mr-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mr-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="mr-4">
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
