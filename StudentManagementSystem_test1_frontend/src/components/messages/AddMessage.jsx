import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../../services/studentapi";

const AddMessage = () => {
  const [message, setMessage] = useState({ course: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMessage(message);
      alert("Message saved successfully");
      navigate("/msgList");
    } catch (error) {
      console.error("Error adding message:", error);
      alert("Failed to add message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-800">
            Add New Message
          </h1>
          <p className="text-lg text-gray-600">
            Create a new course announcement or message
          </p>
        </div>

        {/* Form Container */}
        <div className="overflow-hidden border shadow-2xl bg-white/80 backdrop-blur-xl rounded-2xl border-white/20">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter course name"
                    value={message.course}
                    onChange={handleChange}
                    className="block w-full py-3 pl-10 pr-3 transition-all duration-200 ease-in-out border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold tracking-wider text-gray-700 uppercase">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute flex items-start pointer-events-none top-3 left-3">
                    <svg
                      className="w-5 h-5 mt-1 text-gray-400"
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
                  </div>
                  <textarea
                    name="message"
                    placeholder="Enter your message content"
                    value={message.message}
                    onChange={handleChange}
                    rows="4"
                    className="block w-full py-3 pl-10 pr-3 transition-all duration-200 ease-in-out border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm hover:bg-white/70"
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Add Message
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/msgList")}
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

export default AddMessage;
