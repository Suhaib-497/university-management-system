import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallIcon from "@mui/icons-material/Call";
const LinkedTeachers = () => {
  return (
    <div>
      {/* Linked teachers */}
      <div className="d-flex justify-content-between align-items-center flex-row">
        <h6 className="m-0">Linked Teachers</h6>

        <Link>See more</Link>
      </div>
      {/* chats */}
      <div className="d-flex flex-column gap-2">
        <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row gap-1">
            <AccountCircleIcon className="fs-1" />
            <div className="d-flex flex-column">
              <h6 className="m-0">Mary Johnson (mentor)</h6>
              <p className="m-0">Science</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-1 align-items-end ">
            <EmailRoundedIcon />
            <CallIcon />
          </div>
        </div>
        <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row gap-1">
            <AccountCircleIcon className="fs-1" />
            <div className="d-flex flex-column">
              <h6 className="m-0">Mary Johnson (mentor)</h6>
              <p className="m-0">Science</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-1 align-items-end ">
            <EmailRoundedIcon />
            <CallIcon />
          </div>
        </div>

        <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
          <div className="d-flex flex-row gap-1">
            <AccountCircleIcon className="fs-1" />
            <div className="d-flex flex-column">
              <h6 className="m-0">Mary Johnson (mentor)</h6>
              <p className="m-0">Science</p>
            </div>
          </div>
          <div className="d-flex flex-row gap-1 align-items-end ">
            <EmailRoundedIcon />
            <CallIcon />
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default LinkedTeachers;
