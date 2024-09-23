import React from "react";
import MainLayout from "./Layouts/MainLayout";
import Body from "./component/Body";
import Courses from "./pages/Courses";
import Time_table from './pages/Time_table'
import StudentExam from './pages/StudentExam'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Body />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Time_table" element={<Time_table />} />
          <Route path="Exams" element={<StudentExam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
