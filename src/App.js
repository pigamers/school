import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import TeacherCreation from "./components/TeacherCreation";
import StudentCreation from "./components/StudentCreation";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import PrincipalLogin from "./pages/PrincipalLogin";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="principal-login" element={<PrincipalLogin />} />
          <Route path="teacher-creation" element={<TeacherCreation/>} />
          <Route path="student-creation" element={<StudentCreation/>} />
          <Route path="admin-dashboard" element={<AdminDashboard/>} />
          <Route path="principal-dashboard" element={<PrincipalDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

