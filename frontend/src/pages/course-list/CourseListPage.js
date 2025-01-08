// CourseListPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseListPage = () => {
  const { categorySlug } = useParams();
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`/categories/${categorySlug}/courses/`, { params: { page: currentPage } })
      .then((response) => {
        const coursesData = response.data.results || response.data; // Adjust for API structure
        setCourses(coursesData);
        setTotalPages(Math.ceil(response.data.count / 10)); // Adjust pagination logic
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, [categorySlug, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-4 col-md-6">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={course.image || "img/default-course.jpg"}
                    alt={course.title}
                  />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <Link
                      to={`/categories/${categorySlug}/courses/${course.slug}`}
                      className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </Link>
                    <Link
                      to={`/categories/${categorySlug}/courses/${course.slug}`}
                      className="flex-shrink-0 btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">${course.price || "Free"}</h3>
                  <h5 className="mb-4">{course.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;


