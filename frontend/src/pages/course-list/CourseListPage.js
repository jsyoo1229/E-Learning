import React, { useState, useEffect } from 'react';
import { getCourses, deleteCourse } from '../../services/api';
import CourseList from '../../components/course/CourseList';

function CourseListPage() {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({ title: '', category: '' }); // Add filters state

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses(filters); // Pass filters to getCourses
      setCourses(data);
    };
    fetchCourses();
  }, [filters]); // Refetch courses whenever filters change

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      await deleteCourse(id);
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div>
      <h1>Course List</h1>
      {/* Filter Inputs */}
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={filters.title}
            onChange={handleFilterChange}
            placeholder="Search by title"
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            placeholder="Filter by category"
          />
        </label>
      </div>
      {/* Course List */}
      <CourseList courses={courses} onDelete={handleDelete} />
    </div>
  );
}

export default CourseListPage;
