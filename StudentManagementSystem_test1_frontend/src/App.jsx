import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl p-4 mx-auto ">
        <div className="p-4 overflow-x-auto rounded-lg shadow-lg backdrop-blur-3xl bg-black/40">
          <h1 className="mb-6 text-6xl font-bold text-center text-blue-600">
            Student Management System
          </h1>
        </div>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
