import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

export const getCourses = async (filters = {}) => {
    const params = new URLSearchParams(filters); // Convert filters object to query string
    const response = await axios.get(`${API_URL}courses/?${params}`);
    return response.data;
  };
  

export const getCourseDetails = async (id) => {
  const response = await axios.get(`${API_URL}courses/${id}/`);
  return response.data;
};

export const createCourse = async (data) => {
  const response = await axios.post(`${API_URL}courses/`, data);
  return response.data;
};

export const updateCourse = async (id, data) => {
  const response = await axios.put(`${API_URL}courses/${id}/`, data);
  return response.data;
};

export const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}courses/${id}/`);
};
