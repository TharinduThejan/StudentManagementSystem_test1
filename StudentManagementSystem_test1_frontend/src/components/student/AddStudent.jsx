import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../services/studentapi";

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
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-800">
            Add New Student
          </h1>
          <p className="text-lg text-gray-600">
            Enter the student's information below
          </p>
        </div>

        {/* Form Container */}
        <div className="overflow-hidden border shadow-2xl bg-white/80 backdrop-blur-xl rounded-2xl border-white/20">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold tracking-wider text-gray-700 uppercase">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter student's full name"
                    value={student.name}
                    onChange={handleChange}
                    className="block w-full py-3 pl-10 pr-3 transition-all duration-200 ease-in-out border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold tracking-wider text-gray-700 uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter student's email address"
                    value={student.email}
                    onChange={handleChange}
                    className="block w-full py-3 pl-10 pr-3 transition-all duration-200 ease-in-out border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    required
                  />
                </div>
              </div>

              {/* Course Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold tracking-wider text-gray-700 uppercase">
                  Course
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="course"
                    placeholder="Enter student's course"
                    value={student.course}
                    onChange={handleChange}
                    className="block w-full py-3 pl-10 pr-3 transition-all duration-200 ease-in-out border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center flex-1 px-6 py-3 text-lg font-medium text-black transition-all duration-200 ease-in-out transform shadow-lg group bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
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
                  type="button"
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center flex-1 px-6 py-3 text-lg font-medium text-black transition-all duration-200 ease-in-out transform shadow-lg group bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:from-gray-200 hover:to-gray-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
