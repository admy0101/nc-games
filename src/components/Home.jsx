import React from "react";
import { Link } from "react-router-dom";
import SortBy from "./SortBy";
import { useState } from "react";


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
