import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the starting point of your application.</p>
      <Link to="/courses">View Courses</Link>
    </div>
  );
};

export default HomePage;
