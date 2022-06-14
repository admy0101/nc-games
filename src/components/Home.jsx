import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <Link className="link-cat" to="/">
        <button className="home-btn">Home</button>
      </Link>
    </div>
  );
};

export default Home;
