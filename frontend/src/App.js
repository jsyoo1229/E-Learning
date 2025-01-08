// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CourseListPage from "./pages/course-list/CourseListPage";
import AddCoursePage from "./pages/course-list/AddCoursePage";
import EditCoursePage from "./pages/course-list/EditCoursePage";
import CourseDetailPage from "./pages/course-details/CourseDetailPage";

import Register from "./pages/users/Register";
import Login from "./pages/users/Login";

import Nav from "./components/common/Nav.js";
import Footer from "./components/common/Footer";
// import "./assets/js/main.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> |{" "}
        <Link to="/courses/new">Add Course</Link>
      </nav> */}
      <Nav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userEmail={userEmail}
      />
      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* Login page */}
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setUserEmail={setUserEmail}
              />
            }
          />

          {/* Category-specific courses */}
          <Route
            path="/categories/:categorySlug/courses"
            element={<CourseListPage />}
          />

          {/* Specific course details */}
          <Route
            path="/categories/:categorySlug/courses/:courseSlug"
            element={<CourseDetailPage />}
          />

          <Route path="/signup" element={<Register />} />
          <Route path="/courses/new" element={<AddCoursePage />} />
          <Route path="/courses/:id/edit" element={<EditCoursePage />} />

          
          {/* <Route path="/courses" element={<CourseListPage />} /> */}
          {/* <Route path="/courses/:id" element={<CourseDetailPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
