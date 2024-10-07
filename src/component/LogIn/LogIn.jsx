import React, { useState } from "react";
import UniversityManagmentSytem from "./UniversityManagmentSytem";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailIcon from "@mui/icons-material/Mail";
import RemoveModeratorOutlinedIcon from "@mui/icons-material/RemoveModeratorOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
const LogIn = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <div
      className="d-flex flex-row vh-100"
      style={{
        background:
          " linear-gradient(to bottom, #0575E6 0%, #02298A 85%,#021B79 100%)",
      }}
    >
      {/* Left */}
      <UniversityManagmentSytem />

      {/* right */}

      <div className="col-5 bg-white d-flex flex-column justify-content-start align-items-center gap-2 py-5">
        <div className="text-center">
          <h1 className="fw-bold m-0">Login to your Account</h1>
          <span className="text-black-50 fs-5">
            Welcome back! Select method to log in:
          </span>
        </div>
        <div className="d-flex flex-row gap-4">
          <button className="btn  border-info-subtle border-2 fw-semibold px-5 py-2 rounded-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>{" "}
            Google
          </button>
          <button className="btn border-info-subtle border-2 fw-semibold px-5 py-2 rounded-3">
            <FacebookRoundedIcon className="text-primary fs-3" /> Facebook
          </button>
        </div>

        <div className="d-flex flex-row justify-content-center gap-3 w-100">
          <hr className="border border-black col-3" />
          <span>or continue with</span>
          <hr className="border border-black col-3" />
        </div>

        <form
          action=""
          className="w-100 d-flex flex-column justify-content-center align-items-center gap-4"
        >
          <div className=" d-flex flex-column justify-content-center align-items-center gap-2 col-10">
            <div className="d-flex flex-row col-12">
              <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-2">
                <MailIcon className="text-info text-opacity-25 fs-1 " />
              </span>
              <input
                required
                type="email"
                className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0 ps-0 py-2 rounded-start-0  custom-placeholder"
                placeholder="Email "
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>

            <div className="d-flex flex-row col-12 ">
              <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-1 ">
                <RemoveModeratorOutlinedIcon className="text-info text-opacity-25 fs-1 " />
              </span>
              <input
                required
                type="password"
                className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0  ps-0  py-3 rounded-start-0   custom-placeholder"
                placeholder="Password "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <span className=" input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0 rounded-start-0  "><VisibilityOffOutlinedIcon className="text-info text-opacity-25 fs-1 " /></span> */}
            </div>

            <div className="d-flex flex-row justify-content-between col-12">
              <div className="d-flex flex-row align-items-center gap-2 ">
                <input type="checkbox" className="border  border-info" />
                <span className="text-black-50">Remember me</span>
              </div>

              <Link
                to={`/ForgetPassword`}
                className="text-decoration-none text-info text-opacity-75"
              >
                Forget password?
              </Link>
            </div>
          </div>
          <button className="btn btn-lg btn-info opacity-75 text-white col-10 py-3">
            LogIn
          </button>

          <div>
            <span>Don`t have an account? </span>
            <Link
              to={`/CreateAccount`}
              className="text-decoration-none text-info text-opacity-75"
            >
              Ceate an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
