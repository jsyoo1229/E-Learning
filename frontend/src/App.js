import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CourseListPage from './pages/course-list/CourseListPage';
import CourseDetailPage from './pages/course-details/CourseDetailPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CourseListPage />} />
                <Route path="/courses/:id" element={<CourseDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
