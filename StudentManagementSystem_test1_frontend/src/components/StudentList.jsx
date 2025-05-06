import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../api";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await getStudents();
      setStudents(res.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        loadStudents();
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  return (
    <div>
      <button
        onClick={() => navigate("/add")}
        className="px-4 py-2 mb-4 text-white bg-green-600 rounded hover:bg-green-700"
      >
        Add Student
      </button>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 mb-4 text-white bg-green-600 rounded hover:bg-green-700"
      >
        Messages
      </button>
      <div className="p-4 overflow-x-auto rounded-lg shadow-lg backdrop-blur-3xl bg-black/40">
        <table className="w-full bg-opacity-50 border border-gray-200 shadow-md ">
          <thead className="bg-black-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="text-center border-t">
                <td className="p-2 border">{s.name}</td>
                <td className="p-2 border">{s.email}</td>
                <td className="p-2 border">{s.course}</td>
                <td className="p-2 space-x-2 border">
                  <button
                    onClick={() => navigate(`/edit/${s.id}`)}
                    className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
