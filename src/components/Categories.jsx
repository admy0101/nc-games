import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="dropdown">
      <button className="cat-btn">Categories</button>
      <div className="dropdown-content">
        <Link className="link-cat" to="/reviews/strategy">
          Strategy
        </Link>
        <Link className="link-cat" to="/reviews/hidden-roles">
          Hidden-roles
        </Link>
        <Link className="link-cat" to="/reviews/dexterity">
          Dexterity
        </Link>
        <Link className="link-cat" to="/reviews/push-your-luck">
          Push-your-luck
        </Link>
        <Link className="link-cat" to="/reviews/roll-and-write">
          Roll-and-Write
        </Link>
        <Link className="link-cat" to="/reviews/deck-building">
          Deck-building
        </Link>
        <Link className="link-cat" to="/reviews/engine-building">
          Engine-building
        </Link>
      </div>
    </div>
  );
};

export default Categories;
