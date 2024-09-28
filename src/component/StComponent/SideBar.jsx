import React, { useState } from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Link } from "react-router-dom";

const SideBar = ({ toggleSidebar, show }) => {
  const sideNames = {
    Dashboard: "Dashbord",
    Courses: "Courses",
    Time_table: "Time_table",
    Exams: "Exams",
    Library: "Library",
    Scholar_ship: "Scholar_ship",
  };
  const [Toggler, SetToggler] = useState(sideNames.Dashboard);
  const [lineDash, setLineDash] = useState(sideNames.Dashboard);

  function ChangeSideBar(SideName) {
    return Toggler === SideName ? (
      <div className="d-flex ms-3 flex-column bg-secondary ">
        <div className="p-2  bg-primary rounded-pill rounded-top-0 rounded-start-0 "></div>
        <div className=" bg-primary  text-primary ">
          <Link className="ps-4 rounded-start-pill bg-secondary d-flex text-decoration-none">
            {SideName}
          </Link>
        </div>
        <div className="p-2  bg-primary rounded-pill rounded-bottom-0 rounded-start-0"></div>
      </div>
    ) : (
      <Link
        to={`${SideName.trim() === "Dashbord" ? "/" : SideName}`}
        onClick={() => {
          SetToggler(SideName), setLineDash(SideName);
        }}
        className="m-0 text-white text-decoration-none ps-4"
      >
        {SideName}
      </Link>
    );
  }

  return (
    <div className="d-flex h-100 ">
      <div className={`${show ? "col-3 bg-primary" : "col-9"}  `}>
        <div className="bg-info  text-white rounded-end-5 flex-column d-flex align-items-center gap-4 h-100     ">
          <button
            className="btn "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#Id1"
            aria-controls="Id1"
            onClick={toggleSidebar}
          >
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
        </div>
      </div>
      <div
        className={`${
          show ? "col-8" : "d-none"
        } bg-primary text-white fs-5 d-flex flex-column justify-content-start  gap-3 rounded-end-5`}
      >
        <h5>
          University <br /> Managment System{" "}
        </h5>

        {ChangeSideBar(sideNames.Dashboard)}
        {ChangeSideBar(sideNames.Courses)}
        {ChangeSideBar(sideNames.Time_table)}
        {ChangeSideBar(sideNames.Exams)}
        {ChangeSideBar(sideNames.Library)}
        {ChangeSideBar(sideNames.Scholar_ship)}
      </div>
    </div>
  );
};

export default SideBar;
