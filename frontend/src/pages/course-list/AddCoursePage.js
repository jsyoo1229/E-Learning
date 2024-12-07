import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../../services/api';
import CourseForm from '../../components/course/CourseForm';

function AddCoursePage() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await createCourse(data);
    navigate('/courses');
  };

  return (
    <div>
      <h1>Add New Course</h1>
      <CourseForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddCoursePage;
