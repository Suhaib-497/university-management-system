import React from "react";
import Calender from "../component/StComponent/Calender";
import UpcomingEvent from "../component/StComponent/UpcomingEvent";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const FacultyDashboard = () => {
  function Tasks() {
    return (
      <div className=" rounded-3 bg-white d-flex flex-column gap-3 p-3 justify-content-center align-items-start">
        <h5 className="m-0">
          Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of
          Programming
        </h5>

        <div className="d-flex flex-row justify-content-start align-items-center gap-3 ">
          <p className="text-black-50 m-0">Assigned</p>
          <p className="text-black-50 d-flex justify-content-center align-items-cente m-0">
            <AccessTimeRoundedIcon /> 12:40 pm
          </p>
          <p className="text-black-50 d-flex justify-content-center align-items-center m-0 ms-4">
            <CalendarMonthIcon /> 03 Jan 2023
          </p>
        </div>

        <div className="d-flex flex-row justify-content-start align-items-center gap-5 ">
          <p className="text-black-50 m-0 ">Due</p>
          <p className="text-black-50 d-flex justify-content-center align-items-cente m-0">
            <AccessTimeRoundedIcon /> 12:40 pm
          </p>
          <p className="text-black-50 d-flex justify-content-center align-items-center m-0">
            <CalendarMonthIcon /> 03 Jan 2023
          </p>
        </div>
        <div className="text-black-50 border rounded-3 border-dark-subtle p-2 py-1">
          Not Started
        </div>

        <button className="bg-primary border-0 text-white rounded-2  p-3 py-2">
          View Detailes
        </button>
      </div>
    );
  }
  return (
    <div className="d-flex flex-row gap-3 ">
      {/* left part  */}
      <div
        className=" col-8 d-flex flex-column gap-2 overflow-auto  "
        style={{ height: "550px" }}
      >
        <h6>My Tasks</h6>

       {Tasks()}
       {Tasks()}
       {Tasks()}
      </div>

      {/* right */}
      <div className="col  d-flex flex-column gap-4 tra">
        {/* top */}
        <Calender />
        <UpcomingEvent />
      </div>
    </div>
  );
};

export default FacultyDashboard;
