import React from "react";
import StImage from "../img/image.png";
import Chart from "./Chart";
import Doghunut from "./Doghunut";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="d-flex flex-row gap-3">
      {/* left part  */}
      <div className=" col-8 d-flex flex-column gap-2 ">
        {/* top part */}
        <div className="col-12 bg-white d-flex  rounded-3 px-3  flex-row  ">
          <div className="d-inline align-self-center">
            <h1>Hello Grace</h1>
            <p>
              you have 3 new tasks.It is alot of work for today! So lets start!
            </p>
          </div>
          <img src={StImage} className="col-4" />
        </div>
        {/* contain 3 part bottom  */}
        <div className=" col-auto d-flex flex-row gap-2">
          {/* left has 2 part */}
          <div className="col-7 flex-column">
            <div className="flex-grow-1">
              {/* performance text */}
              <div className="d-flex justify-content-between align-items-center flex-row">
                <h6 className="m-0">performance</h6>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    December
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Novemver
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        August
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        january
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* part1 */}
              <div className="  flex-column  bg-white p-3 rounded-2">
                <h4>The best lesson</h4>
                <div className="d-flex ">
                  <h1 className="d-inline">95.4</h1>
                  <p className="d-inline align-self-start lh-1 m-0 mt-2 ">
                    introduction <br /> to programming
                  </p>
                </div>
                <Chart />
              </div>
              {/* part 2 */}
              <div>
                {/* Linked teachers */}
                <div className="d-flex justify-content-between align-items-center flex-row">
                  <h6 className="m-0">Linked Teachers</h6>

                  <Link>See more</Link>
                </div>
                {/* chats */}
                <div className="d-flex flex-column gap-2">
                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>
                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>

                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>

                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="col-5 ">
            <div className="d-flex justify-content-between align-items-center flex-row">
              <h6 className="m-0">My visites</h6>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle p-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  December
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Novemver
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      August
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      january
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-4 py-3 d-flex flex-column gap-3 text-center">
              <div className="d-flex flex-row gap-5 justify-content-center">
                <div className="col-4  ">
                  <Doghunut percentage={"92"} />
                  <p>Algorithms structures</p>
                </div>
                <div className="col-4 ">
                  <Doghunut percentage={"83"} />
                  <p>Algorithms structures</p>
                </div>
              </div>
              <div className="d-flex flex-row gap-5  justify-content-center">
                <div className="col-4 ">
                  <Doghunut percentage={"78"} />
                  <p>Algorithms structures</p>
                </div>
                <div className="col-4">
                  <Doghunut percentage={"97"} />
                  <p>Algorithms structures</p>
                </div>
              </div>
              <div className="d-flex flex-row gap-5  justify-content-center">
                <div className="col-4">
                  <Doghunut percentage={"96"} />
                  <p>Algorithms structures</p>
                </div>
                <div className="col-4">
                  <Doghunut percentage={"89"} />
                  <p>Algorithms structures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right------------------------------------------------------- */}

      <div className="col d-flex flex-column gap-4 tra">
        {/* top */}
        <div className=" bg-white p-4 rounded-2 d-flex flex-column   gap-3 ">
          <div className=" d-flex flex-row justify-content-between ">
            <div>
              <h6 className="m-0">Calendar</h6>
              <p className="m-0 text-black-50 ">6 event today</p>
            </div>
            <div className="dropdown align-self-end">
              <button
                className="btn btn-secondary dropdown-toggle p-1 btn-sm"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                today
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Novemver
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    August
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    january
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-info text-white rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto mt-4">
            <div className="col-2 my-1 bg-white rounded-circle"></div>
            <p className="d-flex flex-column m-0 fs-5">
              Electronics lesson
              <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
            </p>
          </div>
          <div className="d-flex flex-row  justify-content-center ">
            <div className="col-1 mb-2  mt-4 bg-black rounded-circle"></div>
            <p className="fs-1 m-0">-------------</p>
          </div>

          <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-between ">
            <p className="d-flex flex-column justify-content-between m-0 me-2">10:00
              <span >10:00</span>
            </p>
            <div className="col-2 bg-primary rounded-4  "> </div>
          </div>
          <div className=" bg-secondary text-black rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto">
            <div className="col-2 my-1 bg-light rounded-circle"></div>
            <p className="d-flex flex-column m-0 fs-5">
              Electronics lesson
              <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
            </p>
          </div>

          

          </div>
          <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-between ">
            <p className="d-flex flex-column justify-content-between m-0 me-2">10:00
              <span >10:00</span>
            </p>
            <div className="col-2 bg-primary rounded-4  "> </div>
          </div>
          <div className=" bg-secondary text-black rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto">
            <div className="col-2 my-1 bg-light rounded-circle"></div>
            <p className="d-flex flex-column m-0 fs-5">
              Electronics lesson
              <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
            </p>
          </div>

          

          </div>
          <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row justify-content-between ">
            <p className="d-flex flex-column justify-content-between m-0 me-2">10:00
              <span >10:00</span>
            </p>
            <div className="col-2 bg-primary rounded-4  "> </div>
          </div>
          <div className=" bg-secondary text-black rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto">
            <div className="col-2 my-1 bg-light rounded-circle"></div>
            <p className="d-flex flex-column m-0 fs-5">
              Electronics lesson
              <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
            </p>
          </div>

          

          </div>

          

         
        </div>
        <div>
                {/* Linked teachers */}
                <div className="d-flex justify-content-between align-items-center flex-row">
                  <h6 className="m-0">Linked Teachers</h6>

                  <Link>See more</Link>
                </div>
                {/* chats */}
                <div className="d-flex flex-column gap-2">
                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>
                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>

                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>

                  <div className="bg-white rounded-4 py-2 d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-1">
                      <AccountCircleIcon className="fs-1" />
                      <div className="d-flex flex-column">
                        <h6 className="m-0">Mary Johnson (mentor)</h6>
                        <p className="m-0">Science</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-1 align-items-end ">
                      <EmailRoundedIcon />
                      <CallIcon />
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};

export default Body;
