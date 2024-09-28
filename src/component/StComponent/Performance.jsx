import React from "react";
import Chart from "../Chart";
const Performance = () => {
  function CraeteChart(name, percentage) {
    return (
      <div className="col-1 d-flex flex-column justify-content-center align-items-center ">
        <h6 className="m-0  ">{percentage}</h6>
        <div
          className="bg-info w-100  d-flex flex-row  align-items-end rounded-3"
          style={{ height: " 100px" }}
        >
          <div
            className="bg-primary w-100 rounded-3"
            style={{ height: ` ${percentage}%` }}
          ></div>
        </div>
        <h6 className="m-0 fw-semibold col " style={{ fontSize: "0.8vw" }}>
          {name}
        </h6>
      </div>
    );
  }
  return (
    <div className="">
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
        <div className="d-flex flex-row justify-content-between">
          {CraeteChart("Algorithms structures", 85.3)}
          {CraeteChart("Object program", 64.7)}
          {CraeteChart("Database program", 84.2)}
          {CraeteChart("web develop", 45.6)}
          {CraeteChart("mobile application", 43.5)}
          {CraeteChart("machine learning", 74.4)}
        </div>
      </div>
    </div>
  );
};

export default Performance;
