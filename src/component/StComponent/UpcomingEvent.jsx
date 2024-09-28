import React from "react";
import { Link } from "react-router-dom";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import RobotImage from "/Users/Suhaib/university managment system/src/img/Robotimg.jpg";

const UpcomingEvent = () => {
  function CreateEvents() {
    return (
      <div className="bg-white rounded-4  d-flex flex-row gap-1">
        <div className="col-2 ">
          <img src={RobotImage} className="img-fluid rounded-4 " />{" "}
        </div>

        <div className="d-flex flex-column justify-content-center gap-1 ">
          <h6 className="m-0 " style={{ fontSize: "1vw" }}>
            The main event in your life “Robot Fest” will coming soon in...
          </h6>
          <div
            className="m-0 d-flex flex-row justify-content-start gap-3 text-dark-emphasis "
            style={{ fontSize: "1.1vw" }}
          >
            <div className="d-flex flex-row justify-content-center align-items-center ">
              {" "}
              <AccessTimeRoundedIcon className="fs-5 " />
              <span>14 December 2023</span>
            </div>
            <span>12:00pm</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Linked teachers */}
      <div className="d-flex justify-content-between align-items-center flex-row">
        <h6 className="m-0">Upcomig Events</h6>

        <Link>See more</Link>
      </div>
      {/* chats */}
      <div className="d-flex flex-column gap-2">
        {CreateEvents()}
        {CreateEvents()}
        {CreateEvents()}
      </div>
    </div>
  );
};

export default UpcomingEvent;
