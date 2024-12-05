import React, { useState, useEffect } from 'react';
import { getCourses } from '../../services/api';

function CourseListPage() {
    const [courses, setCourses] = useState([]);
    const [filters, setFilters] = useState({ title: '', category: '' });

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses(filters);
            setCourses(data);
        };
        fetchCourses();
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>강좌 목록</h1>
            <div>
                <input
                    type="text"
                    name="title"
                    placeholder="강좌 제목 검색"
                    value={filters.title}
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="카테고리 필터"
                    value={filters.category}
                    onChange={handleFilterChange}
                />
            </div>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p>카테고리: {course.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseListPage;
