import axios from "axios";

const API= "http://localhost:8080/api/v1/students";

export const getStudents=()=>axios.get(API);
export const addStudent=(student)=>axios.post(API,student);
export const getStudentById=(id)=>axios.get(`${API}/${id}`);
export const updateStudent=(id,student)=>axios.put(`${API}/${id}`,student);
export const deleteStudent=(id)=>axios.delete(`$API}/${id}`);
