import React from "react";
import Categories from "./Categories";
import Home from "./Home";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Home />
        <Categories />
        <li>Sign in</li>
      </ul>
    </nav>
  );
};

export default Navbar;
