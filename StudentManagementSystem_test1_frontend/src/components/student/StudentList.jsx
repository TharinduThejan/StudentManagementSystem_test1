import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../../services/studentapi";
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
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-center text-gray-800">
            Student Management System
          </h1>
          <p className="text-lg text-center text-gray-600">
            Manage your student records efficiently
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => navigate("/add")}
            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-black transition-all duration-200 ease-in-out transform shadow-lg group bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Student
          </button>
          <button
            onClick={() => navigate("/msgList")}
            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-black transition-all duration-200 ease-in-out transform shadow-lg group bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl hover:from-blue-600 hover:to-indigo-700 hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Messages
          </button>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden border shadow-2xl bg-white/80 backdrop-blur-xl rounded-2xl border-white/20">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Student Records
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>{students.length} students</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase">
                      Course
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider text-left text-gray-700 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((s, index) => (
                    <tr
                      key={s.id}
                      className={`hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 ease-in-out ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
                              {s.name.charAt(0).toUpperCase()}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {s.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{s.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-green-800 rounded-full bg-gradient-to-r from-green-100 to-emerald-100">
                          {s.course}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => navigate(`/edit/${s.id}`)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-black transition-all duration-200 ease-in-out transform border border-transparent rounded-md shadow-md group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-105"
                          >
                            <svg
                              className="w-4 h-4 mr-1 transition-transform duration-200 group-hover:rotate-12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(s.id)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-black transition-all duration-200 ease-in-out transform border border-transparent rounded-md shadow-md group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:scale-105"
                          >
                            <svg
                              className="w-4 h-4 mr-1 transition-transform duration-200 group-hover:rotate-12"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {students.length === 0 && (
                <div className="py-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    No students found
                  </h3>
                  <p className="text-gray-500">
                    Get started by adding your first student.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
