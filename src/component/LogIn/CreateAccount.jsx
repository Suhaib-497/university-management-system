import React, { useRef, useState } from "react";
import UniversityManagmentSytem from "./UniversityManagmentSytem";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RemoveModeratorOutlinedIcon from "@mui/icons-material/RemoveModeratorOutlined";
import { useAuth } from "../../Context/AuthContext";
const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfrimRef = useRef();
  const { signUp, sendVerification } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfrimRef.current.value) {
      return setError("The password do not Match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      // await sendVerification();
      console.log("you signed succesfull");
      navigate("/VerficationCode");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("this email is already signedup");
      } else {
        setError("cant singUp");
      }
    }
    setLoading(false);
  };
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

      <div className="col-5 bg-white d-flex flex-column justify-content-center align-items-center gap-3 ">
        <div className="d-flex flex-column justify-content-center align-items-start">
          {error && <div className="alert alert-danger m-0 p-2 ">{error}</div>}
          <h1 className="text-start fw-bold m-0">Create an account.</h1>
        </div>

        <form
          onSubmit={handleSubmit}
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
                required
                ref={emailRef}
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
                required
                ref={passwordRef}
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
                required
                ref={passwordConfrimRef}
                type="password"
                className="form-control bg-info bg-opacity-10 border border-2 border-info-subtle border-start-0  ps-0  py-3 rounded-start-0   custom-placeholder"
                placeholder="Confirm Password "
              />
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center align-self-start gap-1">
              <input type="checkbox" required />
              <span>Accept</span>

              <span className="text-info">terms and condition</span>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="btn btn-lg btn-info opacity-75 text-white col-10 py-3"
          >
            SignUp
          </button>

          <div>
            <span>Do you have an account? </span>
            <Link
              to={`/login`}
              className="text-decoration-none text-info text-opacity-75"
            >
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
