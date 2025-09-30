import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getStudents = () => axios.get(`${API_URL}/students`);
export const getStudentById = (id) => axios.get(`${API_URL}/students/${id}`);
export const addStudent = (student) => axios.post(`${API_URL}/students`, student);
export const updateStudent = (id, student) => axios.put(`${API_URL}/students/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);




export const getMessages = async () => {
    return await axios.get(`${API_URL}/messages`);
};
export const addMessage = (message) => axios.post(`${API_URL}/messages`, message);

export const deleteMessage = async (id) => {
    return await axios.delete(`/messages/${id}`);
};



