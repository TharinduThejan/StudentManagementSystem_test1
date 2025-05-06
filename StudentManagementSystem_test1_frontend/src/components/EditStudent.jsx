import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStudentById, updateStudent } from "../api";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStudent() {
      const res = await getStudentById(id);
      setStudent(res.data);
    }
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate("/");
  };

  return (
    <div className="p-6 mt-4 rounded shadow bg-black/40">
      <h2 className="mb-4 text-2xl font-semibold">Edit Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Update Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
