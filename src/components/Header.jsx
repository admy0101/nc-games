import React from "react";
import image from "../images/NC games-logos.jpeg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
    <div className="header">
      <img src={image} alt="logo" />
      <h1>NC GAMES</h1>
    </div>
    </Link>
  );
};

export default Header;
