import React from "react";
import UniversityManagmentSytem from "./UniversityManagmentSytem";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
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
        
          <h1 className="text-start fw-bold m-0">Ceate an account.</h1>
          
        

        <form
          action=""
          className="w-100 d-flex flex-column justify-content-center align-items-center gap-4"
        >
          <div className=" d-flex flex-column justify-content-center align-items-center gap-2 col-10">
          <div className="d-flex flex-row col-12">
                
                <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-2">
                  <PersonRoundedIcon className="text-info text-opacity-25 fs-1 " />
                </span>
                <input
                
                  type="text"
                  className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0 ps-0 py-2 rounded-start-0  custom-placeholder "
                  placeholder="First Name "
                />
              </div>
          <div className="d-flex flex-row col-12">
                
                <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-2">
                  <PersonRoundedIcon className="text-info text-opacity-25 fs-1 " />
                </span>
                <input
                
                  type="text"
                  className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0 ps-0 py-2 rounded-start-0  custom-placeholder "
                  placeholder="Last Name "
                />
              </div>
            <div className="d-flex flex-row col-12">
                
              <span className="input-group-text bg-info bg-opacity-10 border border-2 border-info-subtle border-end-0 rounded-end-0 p-0 ps-2 py-2">
                <MailIcon className="text-info text-opacity-25 fs-1 " />
              </span>
              <input
              
                type="email"
                className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0 ps-0 py-2 rounded-start-0  custom-placeholder "
                placeholder="Email "
              />
            </div>

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
            <div className="d-flex flex-row justify-content-center align-items-center align-self-start gap-1">
                <input type="checkbox" />
                <span>Accept</span>

                <span className="text-info">terms and condition</span>
            </div>

            
          </div>
          <Link to={`/VerficationCode`}  className="btn btn-lg btn-info opacity-75 text-white col-10 py-3">
            SignUp
          </Link >

          <div>
            <span>Do you have an account? </span>
            <Link to={`/CreateAccount`} className="text-decoration-none text-info text-opacity-75">
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
