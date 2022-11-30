import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/Theme";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {

  const {themeColor, setThemeColor} = useContext(Theme)


  const handleChange = (event) => {
    setThemeColor(event.target.value)
  }

  console.log(themeColor);

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
          <select className="select" value={themeColor} onChange={handleChange}>
            <option value={'dark'}>Dark</option>
            <option value={'light'}>Light</option>
          </select>
        </nav>     
      <div className="Cart">
        <CartWidget/>
    </div>
    </ul>
    
  );
};

export default NavBar;
