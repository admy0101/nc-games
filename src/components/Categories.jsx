import React from "react";
import { getCategories } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(category).then((response) => {
      setCategories(response)
    });
  }, [category]);

  return (
    <div className="dropdown link-btn">
        <p>Categories </p>
      {/* <button className="cat-btn">Categories ▽</button> */}
      <div className="dropdown-content">
        {categories.map((category) => {
          return (
            <Link
              className="link-cat"
              key={category.slug}
              to={`/categories/${category.slug}`}
            >
              {category.slug}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

