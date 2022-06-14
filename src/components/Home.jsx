import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link className="link-home link-btn" to="/">
        Home
      </Link>
    </div>
  );
};

export default Home;
