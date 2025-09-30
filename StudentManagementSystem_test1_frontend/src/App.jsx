import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/student/StudentList";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import Homepage from "./components/Homepage";
import MessageList from "./components/messages/MessageList";
import AddMessage from "./components/messages/AddMessage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div
          style={{
            padding: "1rem",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* <h1 style={{marginBottom: '1.5rem', fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: '#3b82f6'}}>
            Student Management System
          </h1> */}
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/msgList" element={<MessageList />} />
          <Route path="/addMsg" element={<AddMessage />} />
          <Route path="/list" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
