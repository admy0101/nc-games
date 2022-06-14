import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-btn">
      <button></button>
      <Link className="link-cat" to="/">
        Home
      </Link>
    </div>
  );
};

export default Home;
