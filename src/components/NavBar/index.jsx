import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <ul className="container">

        <nav className="links ">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <a href="#about">About</a>
          </li>
          <li className="link">
            <a href="#products">Products</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </nav>     
      <div className="Cart">
        <CartWidget/>
    </div>
    </ul>
    
  );
};

export default NavBar;
