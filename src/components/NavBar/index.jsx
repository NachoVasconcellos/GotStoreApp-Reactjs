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
          <Link to={"/category/Stark"}  >Stark</Link>
          </li>
          <li className="link">
          <Link to={"/category/Lannister"}  >Lannister</Link>
          </li>
        </nav>     
      <div className="Cart">
        <CartWidget/>
    </div>
    </ul>
    
  );
};

export default NavBar;
