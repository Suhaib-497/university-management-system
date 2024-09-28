import React from "react";

const Calender = () => {
  return (
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
        <p className="d-flex flex-column m-0 fs-6 col-12" >
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
          <p className="d-flex flex-column justify-content-between m-0 me-2">
            10:00
            <span>10:00</span>
          </p>
          <div className="col-2 bg-primary rounded-4  "> </div>
        </div>
        <div className=" bg-secondary text-black rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto">
          <div className="col-2 my-1 bg-light rounded-circle"></div>
          <p className="d-flex flex-column m-0 fs-6 col-12">
            Electronics lesson
            <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
          </p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between ">
          <p className="d-flex flex-column justify-content-between m-0 me-2">
            10:00
            <span>10:00</span>
          </p>
          <div className="col-2 bg-primary rounded-4  "> </div>
        </div>
        <div className=" bg-secondary text-black rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto">
          <div className="col-2 my-1 bg-light rounded-circle"></div>
          <p className="d-flex flex-column m-0 fs-6 col-12">
            Electronics lesson
            <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
          </p>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between ">
          <p className="d-flex flex-column justify-content-between m-0 me-2">
            10:00
            <span>10:00</span>
          </p>
          <div className="col-2 bg-primary rounded-4  "> </div>
        </div>
        <div className=" bg-secondary text-black rounded-1 d-flex flex-row gap-3 p-2 col-9 ms-auto">
          <div className="col-2 my-1 bg-light rounded-circle"></div>
          <p className="d-flex flex-column m-0 fs-6 col-12">
            Electronics lesson
            <span style={{ fontSize: "12px" }}>9.45- 10.30, 21 lesson</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
