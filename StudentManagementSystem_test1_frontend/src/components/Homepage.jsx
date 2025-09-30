import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="mx-auto text-center max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="mb-6 text-5xl font-extrabold text-gray-800 md:text-6xl drop-shadow-lg">
            Student Management System
          </h1>
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-700 md:text-xl">
            Manage students, teachers, classes, attendance, and results in one
            place. A modern, responsive, and user-friendly platform designed for
            efficiency.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-10 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Single Card Template */}
          {[
            {
              title: "Student Management",
              desc: "Add, edit, and manage student records with ease. Track details and progress.",
              color: "from-emerald-500 to-teal-600",
              link: "/students",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              ),
            },
            {
              title: "Teacher Management",
              desc: "Add, update, and assign teachers to classes and subjects effectively.",
              color: "from-pink-500 to-red-600",
              link: "/teachers",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A4 4 0 016 14V8a6 6 0 1112 0v6a4 4 0 01.879 3.804M15 21H9a3 3 0 01-3-3h12a3 3 0 01-3 3z"
                />
              ),
            },
            {
              title: "Class & Subject Management",
              desc: "Create and manage classes, sections, and assign subjects seamlessly.",
              color: "from-yellow-500 to-orange-600",
              link: "/classes",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                />
              ),
            },
            {
              title: "Attendance Management",
              desc: "Track student attendance daily or subject-wise with detailed records.",
              color: "from-green-500 to-lime-600",
              link: "/attendance",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2l4 -4M7 20h10a2 2 0 002 -2V6a2 2 0 00-2 -2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              ),
            },
            {
              title: "Marks & Results",
              desc: "Record student marks, calculate grades, and generate progress reports.",
              color: "from-purple-500 to-violet-600",
              link: "/results",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                />
              ),
            },
            {
              title: "Message Center",
              desc: "Send announcements and manage course-related communications.",
              color: "from-blue-500 to-indigo-600",
              link: "/messages",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              ),
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 transform border shadow-xl group bg-white/70 backdrop-blur-lg rounded-3xl border-white/30 hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {card.icon}
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                {card.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">{card.desc}</p>
              <button
                onClick={() => navigate(card.link)}
                className={`w-full px-6 py-3 text-lg font-medium text-white rounded-xl 
                           bg-gradient-to-r ${card.color} shadow-md hover:shadow-xl 
                           transform hover:scale-105 transition-all duration-200 ease-in-out`}
              >
                Explore {card.title}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="py-6 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            🚀 Built with <span className="font-semibold">React</span> &{" "}
            <span className="font-semibold">Tailwind CSS</span> • Modern •
            Responsive • Beautiful
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
