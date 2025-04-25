import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StudentList from "./components/StudentList";
// import AddStudent from "./components/AddStudent";
// import EditStudent from "./components/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl px-4 py-6 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-700">
          Student Management System
        </h1>
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
