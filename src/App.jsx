import MainLayout from "./Layouts/MainLayout";
import LogIn from "./component/LogIn/LogIn";
import ForgetPassword from "./component/LogIn/ForgerPassword";
import VerficationCode from "./component/LogIn/VerficationCode";
import NewPassword from "./component/LogIn/Newpassword";
import CreateAccount from "./component/LogIn/CreateAccount"
import StDashboard from "./Dashboards/StDashboard";
import FacultyDashboard from "./Dashboards/FacultyDashboard";
import FtStudent from "./pages/FtStudent";
import FtExams from "./pages/FtExams";
import FtTime_table from "./pages/FtTime_table";
import Courses from "./pages/Courses";
import Time_table from "./pages/Time_table";
import StudentExam from "./pages/StudentExam";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/VerficationCode" element={<VerficationCode />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="StDashboard" element={<StDashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Time_table" element={<Time_table />} />
          <Route path="/Exams" element={<StudentExam />} />
          <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
          <Route path="/Student" element={<FtStudent />} />
          <Route path="/FtExams" element={<FtExams />} />
          <Route path="/FtTime_table" element={<FtTime_table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
