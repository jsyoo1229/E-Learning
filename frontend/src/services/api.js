import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/'; // Django 백엔드 URL

export const getCourses = async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await axios.get(`${API_URL}courses/?${params}`);
    return response.data;
};

export const getCourseDetails = async (id) => {
    const response = await axios.get(`${API_URL}courses/${id}/`);
    return response.data;
};
