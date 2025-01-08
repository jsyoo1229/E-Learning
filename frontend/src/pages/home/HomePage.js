// HomePage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/categories/")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.slug}/courses`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

