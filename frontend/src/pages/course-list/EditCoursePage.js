import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseDetails, updateCourse } from '../../services/api';
import CourseForm from '../../components/course/CourseForm';

function EditCoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getCourseDetails(id);
      setInitialData(data);
    };
    fetchCourse();
  }, [id]);

  const handleSubmit = async (data) => {
    await updateCourse(id, data);
    navigate('/courses');
  };

  return (
    <div>
      <h1>Edit Course</h1>
      {initialData ? <CourseForm initialData={initialData} onSubmit={handleSubmit} /> : <p>Loading...</p>}
    </div>
  );
}

export default EditCoursePage;
