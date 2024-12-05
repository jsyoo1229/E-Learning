import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetails } from '../../services/api';

function CourseDetailPage() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await getCourseDetails(id);
            setCourse(data);
        };
        fetchCourse();
    }, [id]);

    if (!course) return <p>로딩 중...</p>;

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <h2>강의 목록</h2>
            <ul>
                {course.lessons.map((lesson) => (
                    <li key={lesson.id}>{lesson.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetailPage;
