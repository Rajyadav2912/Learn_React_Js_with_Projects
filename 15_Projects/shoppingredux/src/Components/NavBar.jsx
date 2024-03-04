import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img src={logo} alt="logo" width={150} />
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
