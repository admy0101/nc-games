import React from "react";
import Categories from "./Categories";
import Home from "./Home";
import SignIn from "./Sign-in";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Home />
        <Categories />
        <SignIn />
      </ul>
    </nav>
  );
};

export default Navbar;
