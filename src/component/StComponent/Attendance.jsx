import React from 'react'
import Doghunut from "./Doghunut";
const Attendance = () => {
  return (
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
  )
}

export default Attendance