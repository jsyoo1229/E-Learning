import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CourseListPage from './pages/course-list/CourseListPage';
import AddCoursePage from './pages/course-list/AddCoursePage';
import EditCoursePage from './pages/course-list/EditCoursePage';
import CourseDetailPage from './pages/course-details/CourseDetailPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> | <Link to="/courses/new">Add Course</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/new" element={<AddCoursePage />} />
        <Route path="/courses/:id/edit" element={<EditCoursePage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
