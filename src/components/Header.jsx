import React from "react";
import image from "../images/NC games-logos.jpeg"

const Header = () => {
  return (
    <div className="header">
      <img src={image} alt="logo" />
      <h1>NC GAMES</h1>
    </div>
  );
};

export default Header;
