import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SideBar from "../component/StComponent/SideBar";
import FacultySideBar from "../component/FacultyComponent/FacultySideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow((prevShow) => !prevShow); // Toggles the sidebar
  };

  return (
    <div
      className="d-flex vh-100"
      style={{ transitionDuration: "1000ms"}}
    >
      <div
        className={`${show ? "col" : "col"}  `}
        style={{ transitionDuration: "500ms" }}
      >
        <SideBar toggleSidebar={toggleSidebar} show={show} />
        {/* <FacultySideBar toggleSidebar={toggleSidebar} show={show} /> */}
      </div>
      <div
        className={`${show ? "col-10" : "col-11"} container  pe-0  `}
        style={{ transitionDuration: "1000ms" }}
      >
        
        <NavBar show={show}  />
        <hr className=" container  mt-5  position-fixed" />
        
        <div className="  mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
