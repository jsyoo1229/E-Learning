import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses, onDelete }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <h2>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </h2>
          <p>{course.description}</p>
          <p>Category: {course.category}</p>
          <Link to={`/courses/${course.id}/edit`}>Edit</Link>
          <button onClick={() => onDelete(course.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
