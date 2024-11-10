import React, { useState } from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

const SideBar = ({ toggleSidebar, show }) => {
  const navigate = useNavigate();
  const sideNames = {
    student: "Student",
    Dashboard: "Dashboard",
    Courses: "Courses",
    Time_table: "Time_table",
    Exams: "Exams",
    Library: "Library",
    Scholar_ship: "Scholar_ship",
  };
  const [Toggler, SetToggler] = useState(sideNames.Dashboard);
  const [lineDash, setLineDash] = useState(sideNames.Dashboard);
  const { currentRole, logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  function ChangeSideBar(SideName, direction) {
    return Toggler === SideName ? (
      <div className="d-flex ms-3 flex-column bg-secondary ">
        <div className="p-2  bg-primary rounded-pill rounded-top-0 rounded-start-0 "></div>
        <div className=" bg-primary  text-primary ">
          <Link
            className="ps-4 rounded-start-pill bg-secondary d-flex text-decoration-none"
            to={`/${direction}`}
          >
            {SideName}
          </Link>
        </div>
        <div className="p-2  bg-primary rounded-pill rounded-bottom-0 rounded-start-0"></div>
      </div>
    ) : (
      <Link
        to={`/${direction}`}
        onClick={() => {
          SetToggler(SideName), setLineDash(SideName);
        }}
        className="m-0 text-white text-decoration-none ps-4"
      >
        {SideName}
      </Link>
    );
  }

  function changeIcons() {
    return (
      <div className="  text-white  flex-column d-flex align-items-center gap-4 h-100     ">
        <button className="btn " type="button" onClick={toggleSidebar}>
          <MenuIcon className="text-white" />
        </button>

        <Link
          to={`${
            (currentRole === "student" && "/Dashboard") ||
            (currentRole === "faculty" && "/faculty-dashboard")
          }`}
          className="text-white"
        >
          <SpaceDashboardIcon
            className={`${
              lineDash == sideNames.Dashboard
                ? "border-start border-white  "
                : "border-start-0"
            } fs-2 `}
            onClick={() => {
              SetToggler(sideNames.Dashboard), setLineDash(sideNames.Dashboard);
            }}
          />
        </Link>

        {currentRole === "faculty" && (
          <Link to={`/Student`} className="text-white">
            <PersonIcon
              className={`${
                lineDash == sideNames.student
                  ? "border-start border-white"
                  : "border-start-0"
              } fs-2`}
              onClick={() => {
                SetToggler(sideNames.student), setLineDash(sideNames.student);
              }}
            />
          </Link>
        )}

        {currentRole === "student" && (
          <Link to={`/Courses`} className="text-white">
            <AutoStoriesIcon
              className={`${
                lineDash == sideNames.Courses
                  ? "border-start border-white"
                  : "border-start-0"
              } fs-2`}
              onClick={() => {
                SetToggler(sideNames.Courses), setLineDash(sideNames.Courses);
              }}
            />
          </Link>
        )}

<Link className="text-white" to={`${(currentRole==="student" && "/Exams") || (currentRole==="faculty" && "/FtExams")} `}>
          <PendingActionsRoundedIcon
            className={`${
              lineDash == sideNames.Exams
                ? "border-start border-white"
                : "border-start-0"
            } fs-2`}
            onClick={() => {
              SetToggler(sideNames.Exams), setLineDash(sideNames.Exams);
            }}
          />
        </Link>
        
          <Link
            className="text-white"
            to={`${
              (currentRole === "student" && "/Time_table") ||
              (currentRole == "faculty" && "/FtTime_table")
            }`}
          >
            <EventNoteRoundedIcon
              className={`${
                lineDash == sideNames.Time_table
                  ? "border-start border-white"
                  : "border-start-0"
              } fs-2`}
              onClick={() => {
                SetToggler(sideNames.Time_table),
                  setLineDash(sideNames.Time_table);
              }}
            />
          </Link>
        
        
        {currentRole === "student" && (
          <Link className="text-white">
            <LibraryBooksRoundedIcon
              className={`${
                lineDash == sideNames.Library
                  ? "border-start border-white"
                  : "border-start-0"
              } fs-2`}
              onClick={() => {
                SetToggler(sideNames.Library), setLineDash(sideNames.Library);
              }}
            />
          </Link>
        )}
        {currentRole === "student" && (
          <Link className="text-white">
            <SchoolRoundedIcon
              className={`${
                lineDash == sideNames.Scholar_ship
                  ? "border-start border-white"
                  : "border-start-0"
              } fs-2`}
              onClick={() => {
                SetToggler(sideNames.Scholar_ship),
                  setLineDash(sideNames.Scholar_ship);
              }}
            />
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="d-flex h-100  position-fixed top-0 bottom-0 start-0 end-50">
      <div className={`${show ? "col-1 bg-primary" : "col-2"}  `}>
        <div className="d-flex flex-column vh-100 bg-info rounded-end-5 align-items-center pb-2">
          {/* <div className="  text-white  flex-column d-flex align-items-center gap-4 h-100     ">
            <button className="btn " type="button" onClick={toggleSidebar}>
              <MenuIcon className="text-white" />
            </button>
            <Link to={"/"} className="text-white">
              <SpaceDashboardIcon
                className={`${
                  lineDash == sideNames.Dashboard
                    ? "border-start border-white  "
                    : "border-start-0"
                } fs-2 `}
                onClick={() => {
                  SetToggler(sideNames.Dashboard),
                    setLineDash(sideNames.Dashboard);
                }}
              />
            </Link>

            <Link to={`/Courses`} className="text-white">
              <AutoStoriesIcon
                className={`${
                  lineDash == sideNames.Courses
                    ? "border-start border-white"
                    : "border-start-0"
                } fs-2`}
                onClick={() => {
                  SetToggler(sideNames.Courses), setLineDash(sideNames.Courses);
                }}
              />
            </Link>
            <Link className="text-white" to={`/Time_table`}>
              <EventNoteRoundedIcon
                className={`${
                  lineDash == sideNames.Time_table
                    ? "border-start border-white"
                    : "border-start-0"
                } fs-2`}
                onClick={() => {
                  SetToggler(sideNames.Time_table),
                    setLineDash(sideNames.Time_table);
                }}
              />
            </Link>
            <Link className="text-white" to={`/Exams`}>
              <PendingActionsRoundedIcon
                className={`${
                  lineDash == sideNames.Exams
                    ? "border-start border-white"
                    : "border-start-0"
                } fs-2`}
                onClick={() => {
                  SetToggler(sideNames.Exams), setLineDash(sideNames.Exams);
                }}
              />
            </Link>
            <Link className="text-white">
              <LibraryBooksRoundedIcon
                className={`${
                  lineDash == sideNames.Library
                    ? "border-start border-white"
                    : "border-start-0"
                } fs-2`}
                onClick={() => {
                  SetToggler(sideNames.Library), setLineDash(sideNames.Library);
                }}
              />
            </Link>
            <Link className="text-white">
              <SchoolRoundedIcon
                className={`${
                  lineDash == sideNames.Scholar_ship
                    ? "border-start border-white"
                    : "border-start-0"
                } fs-2`}
                onClick={() => {
                  SetToggler(sideNames.Scholar_ship),
                    setLineDash(sideNames.Scholar_ship);
                }}
              />
            </Link>
          </div> */}
          {changeIcons()}
          <div className="">
            <button className="bg-transparent border-0" onClick={handleLogOut}>
              <LogoutIcon className="fs-2 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          show ? "col-3" : "d-none"
        } bg-primary text-white fs-5 d-flex flex-column justify-content-start  gap-3 rounded-end-5`}
      >
        <h5>
          University <br /> Managment System{" "}
        </h5>

        {currentRole === "student" &&
          ChangeSideBar(sideNames.Dashboard, "Dashboard")}
        {currentRole === "faculty" &&
          ChangeSideBar(sideNames.Dashboard, "faculty-dashboard")}
        {currentRole === "admin" &&
          ChangeSideBar(sideNames.Dashboard, "admin-dashboard")}

        {currentRole === "faculty" &&
          ChangeSideBar(sideNames.student, "Student")}

        {currentRole === "faculty" && ChangeSideBar(sideNames.Exams, "FtExams")}
        {currentRole === "faculty" &&
          ChangeSideBar(sideNames.Time_table, "FtTime_table")}
        {currentRole === "student" &&
          ChangeSideBar(sideNames.Courses, "Courses")}
        {currentRole === "student" &&
          ChangeSideBar(sideNames.Time_table, "Time_table")}
        {currentRole === "student" && ChangeSideBar(sideNames.Exams, "Exams")}
        {currentRole === "student" &&
          ChangeSideBar(sideNames.Library, "stlibrary")}
        {currentRole === "student" &&
          ChangeSideBar(sideNames.Scholar_ship, "Scholar_ship")}
      </div>
    </div>
  );
};

export default SideBar;
