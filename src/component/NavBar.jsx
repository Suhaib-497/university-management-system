import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
const NavBar = ({ show }) => {
  return (
    <div className="justify-content-between d-flex mt-2">
      {/* middle part */}
      <div className="col-4">
        <form className="form" action="">
          <div className="input-group mb-2 ">
            <input
              type="text"
              className="form-control border-end-0 "
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text border-start-0 bg-white"
              id="basic-addon2"
            >
              <SearchIcon />
            </span>
          </div>
        </form>
      </div>

      {/* left part */}
      <div className="d-flex col-8 gap-2  justify-content-end">
        <div className="border border-end "></div>
        <div className="dropdown">
          <a
            className="btn btn-sm btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ENG
          </a>

          <ul className="dropdown-menu ">
            <li>
              <a className="dropdown-item" href="#">
                ENG
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                ARB
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                KRD
              </a>
            </li>
          </ul>
        </div>
        <div className="border border-end "></div>

        <EmailIcon />
        <NotificationsIcon />
        <div className="border border-end "></div>

        <div className="dropdown">
          <AccountCircleIcon />
          <a
            className="btn btn-sm  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Stanely Grace
          </a>

          <ul className="dropdown-menu ">
            <li>
              <a className="dropdown-item" href="#">
                ENG
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                ARB
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                KRD
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
