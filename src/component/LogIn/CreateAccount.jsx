import React, { useId, useRef, useState } from "react";
import UniversityManagmentSytem from "./UniversityManagmentSytem";
import { Await, Link, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RemoveModeratorOutlinedIcon from "@mui/icons-material/RemoveModeratorOutlined";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../../Config/Firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfrimRef = useRef();
  const { signUp, sendVerification } = useAuth();
  const [role, setRole] = useState("");
  const [stid, setStId] = useState(0);
  const [ftid, setFtId] = useState(0);
  const [adid, setAdId] = useState(0);

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const username = `${firstNameRef.current.value} ${lastNameRef.current.value}`;
  //   if (passwordRef.current.value !== passwordConfrimRef.current.value) {
  //     return setError("The password do not Match");
  //   }

  //   try {
  //     setError("");
  //     setLoading(true);
  //     const userCredential = await signUp(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     );
  //     const user = userCredential.user;
  //     const uid = user.uid;
  //     let CurrentRole;
  //     switch (role) {
  //       case "admin":
  //         CurrentRole="admins";;
  //         break;
  //       case "faculty":
  //         CurrentRole="faculty";
  //         break;
  //       case "student":
  //         CurrentRole="students";
  //         break;
  //       default:
  //         setError("please choose your role");
  //         break;
  //     }

  //     const userCollection = collection(db, CurrentRole,uid);
  //     await addDoc(userCollection, {

  //       username:username,
  //       email: emailRef.current.value,
  //       role: CurrentRole,
  //     });

  //     console.log("you signed succesfull");
  //     navigate("/VerficationCode");
  //   } catch (err) {
  //     if (err.code === "auth/email-already-in-use") {
  //       setError("this email is already signedup");
  //     } else {
  //       console.log(err)
  //       setError("cant singUp");
  //     }
  //   }
  //   setLoading(false);
  // };
  // const username = firstNameRef.current.value + lastNameRef.current.value;

  const getNextId = async (role) => {
    const counterDocRef = doc(db, "counter", "lastIds");
    const counterDoc = await getDoc(counterDocRef);

    let NextId;
    let UpdateField={};

    if (counterDoc.exists()) {
      const data = counterDoc.data();

      if (role === "admins") {
        NextId = data.adminLastId + 1;
        UpdateField = { adminLastId: NextId };
      } else if (role === "faculty") {
        NextId = data.facultyLastId + 1;
        UpdateField = { facultyLastId: NextId };
      } else if (role === "students") {
        NextId = data.studentLastId + 1;
        UpdateField = { studentLastId: NextId };
      }
    }else{
      console.log("document doesnt exsit");
    }

    await updateDoc(counterDocRef, UpdateField);
    return NextId;
  };

  const createUser = async (CurrentRole, customId) => {
    const userDoc = collection(db, CurrentRole);
    await addDoc(userDoc, {
      id: customId,
      userName: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
      email: emailRef.current.value,
      role: CurrentRole,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfrimRef.current.value) {
      return setError("The passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
       await signUp(
        emailRef.current.value,
        passwordRef.current.value
      );
      

      let customId;
      let CurrentRole;

      switch (role) {
        case "admin":
          
          CurrentRole = "admins";
          break;
        case "faculty":
          
          CurrentRole = "faculty";
          break;
        case "student":
          CurrentRole = "students";
          break;
        default:
          return setError("Please choose your role");
      }
      console.log(CurrentRole);

      customId = await getNextId(CurrentRole);

      createUser(CurrentRole, customId);

      console.log("You signed up successfully");

      setTimeout(() => {
        navigate("/login");
      }, 4000);

      toast.success("you signed up succefully");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already signed up");
      } else {
        setError("Cannot sign up");
      }
      console.error(err);
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
                ref={firstNameRef}
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
                ref={lastNameRef}
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
            {/* <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                choose role
              </button>
              <ul class="dropdown-menu">
                <li>
                  <input type="" className="border border-none   " readOnly value={"Admin"} /> 
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="align-self-start">
              <select
                className="p-1 rounded-3"
                id="roles"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="choose role" disabled>
                  choose role
                </option>
                <option value="admin">admin</option>
                <option value="faculty">faculty</option>
                <option value="student">student</option>
              </select>
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
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      </div>
    </div>
  );
};

export default SignUp;
