import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../api";

const AddStudent = () => {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    navigate("/");
  };
  return (
    <div className="p-6 rounded shadow bg-opacity: 0">
      <h2 className="mb-4 text-2xl font-bold">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};
export default AddStudent;
