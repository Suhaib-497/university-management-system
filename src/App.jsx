import React from "react";
import MainLayout from "./Layouts/MainLayout";
import StDashboard from "./Dashboards/StDashboard";
import FacultyDashboard from "./Dashboards/FacultyDashboard";
import FtStudent from "./pages/FtStudent";
import FtExams from './pages/FtExams'
import Courses from "./pages/Courses";
import Time_table from "./pages/Time_table";
import StudentExam from "./pages/StudentExam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<StDashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Time_table" element={<Time_table />} />
          <Route path="/Exams" element={<StudentExam />} />
          <Route  path="/FacultyDashboard" element={<FacultyDashboard/>} />
          <Route  path="/Student" element={<FtStudent/>} />
          <Route  path="/FtExams" element={<FtExams/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
