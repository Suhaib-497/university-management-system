import React from "react";
import UniversityManagmentSytem from "./UniversityManagmentSytem";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";

const VerficationCode = () => {
  return (
    <div
      className="d-flex flex-row j vh-100"
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
          <h1 className="fw-bold m-0 display-5">Verfication Code.</h1>
          <span className="text-black-50 fs-5 ps-2">
            Enter Code that send to your email
          </span>
        </div>

        <form
          action=""
          className="w-100 d-flex flex-column justify-content-center align-items-center gap-4"
        >
          <div className="d-flex flex-row justify-content-evenly align-items-center col-10">
            <input
              type="text"
              className="col-1  bg-info bg-opacity-10 border border-2 border-info-subtle rounded-3 fs-3 text-center    "
              placeholder=" "
            />
            <input
              type="text"
              className="col-1 bg-info bg-opacity-10 border border-2 border-info-subtle rounded-2   fs-3 text-center "
              placeholder=""
            />
            <input
              type="text"
              className="col-1  bg-info bg-opacity-10 border border-2 border-info-subtle rounded-3   fs-3 text-center "
              placeholder=" "
            />
            <input
              type="text"
              className="col-1 bg-info bg-opacity-10 border border-2 border-info-subtle rounded-2   fs-3 text-center "
              placeholder=""
            />
            <input
              type="text"
              className="col-1 bg-info bg-opacity-10 border border-2 border-info-subtle rounded-2   fs-3 text-center "
              placeholder=""
            />
          </div>

          <Link
            to={`/NewPassword`}
            className="btn btn-lg btn-info opacity-75 text-white col-10 py-3"
          >
            Submit
          </Link>

          <button className="bg-transparent border-0 text-info opacity-75 fs-5">Resent code</button>
        </form>
      </div>
    </div>
  );
};

export default VerficationCode;
