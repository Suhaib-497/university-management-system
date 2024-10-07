import React from "react";
import UniversityManagmentSytem from "./UniversityManagmentSytem";
import { Link } from "react-router-dom";
import RemoveModeratorOutlinedIcon from "@mui/icons-material/RemoveModeratorOutlined";


const ForgetPassword = () => {
  return (
    <div
      className="d-flex flex-row  vh-100"
      style={{
        background:
          " linear-gradient(to bottom, #0575E6 0%, #02298A 85%,#021B79 100%)",
      }}
    >
      {/* Left */}
      <UniversityManagmentSytem />

      {/* right */}

      <div className="col-5 bg-white d-flex flex-column justify-content-center align-items-center gap-2 py-5">
        <div className="text-start">
          <h1 className="fw-bold m-0">Enter your new password</h1>
          <span className="text-black-50 fs-5">
          This is the last step in recovering your password.
          </span>
        </div>

        <form
          action=""
          className="w-100 d-flex flex-column justify-content-center align-items-center gap-4"
        >
          <div className=" d-flex flex-column justify-content-center align-items-center gap-2 col-10">
          <div className="d-flex flex-row col-12 ">
              <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-1 ">
                <RemoveModeratorOutlinedIcon className="text-info text-opacity-25 fs-1 " />
              </span>
              <input
                type="password"
                className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0  ps-0  py-3 rounded-start-0   custom-placeholder"
                placeholder="Password "
              />
             
            </div>

            <div className="d-flex flex-row col-12 ">
              <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-1 ">
                <RemoveModeratorOutlinedIcon className="text-info text-opacity-25 fs-1 " />
              </span>
              <input
                type="password"
                className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0  ps-0  py-3 rounded-start-0   custom-placeholder"
                placeholder="Confirm Password "
              />
             
            </div>
          </div>
          <input type="submit" className="btn btn-lg btn-info opacity-75 text-white col-10 py-3" />
          
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
