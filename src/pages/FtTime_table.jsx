import React, { useEffect, useRef } from "react";
import FtImg from "../img/FtImg.jpg";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
const FtTime_table = () => {
  let NumberOfStudent = 500;
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const clonedContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML += clonedContent;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      if (scrollContainer.scrollLeft === 0) {
        scrollContainer.scrollLeft =
          scrollContainer.scrollWidth / 2 - scrollContainer.clientWidth;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="rounded-3 shadow" style={{ backgroundColor: "#F2F6FC" }}>
      <div className=" p-1 d-flex ">
        {/* left section */}
        <div className=" d-flex flex-column gap-4 p-3 col-9">
          {/* top */}
          <div className="d-flex flex-row justify-content-between ">
            {/* header */}
            <div className="d-flex flex-row justify-content-center align-items-end gap-1">
              <span className="fw-semibold m-0 h1 display-5">Class</span>
              <h4 className="m-0  fw-light">Calender</h4>
            </div>
            <div className=" d-flex flex-column align-items-end gap-4">
              <NotificationsActiveOutlinedIcon className="fs-4 bg-white p-1 border border-1 border-black " />
              <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                <span>November2024</span>
                <span className="rounded-pill bg-dark-subtle border border-1 border-black p-1 px-3">
                  last Week
                </span>
              </div>
            </div>
          </div>
          {/* miidle */}
          <div className="d-flex flex-column gap-4">
            {/* months */}
            <div
              ref={scrollContainerRef}
              className="d-flex flex-row justify-content-between align-items-center gap-5  hide-scrollbar"
            >
              <span className="text-black-50">Jan</span>
              <span className="text-black-50">Febravery</span>
              <span className="text-black-50">March</span>
              <span className="text-black-50">April</span>
              <span className="text-black-50">May</span>
              <span className="text-black-50">June</span>
              <span className="text-black-50">July</span>
              <span className="text-black-50">August</span>
              <span className="text-black-50">September</span>
              <span className="text-black-50">October</span>
              <span className="text-black-50">December</span>
              <span className="text-black-50">Novem</span>
            </div>
            {/* Days */}
            <div
              ref={scrollContainerRef}
              className="d-flex flex-row justify-content-evenly gap-5 align-items-center hide-scrollbar "
            >
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-info p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
              <div className="d-flex flex-column">
                <span className="rounded-circle bg-dark-subtle p-2  text-center">
                  10
                </span>
                <span>Mon</span>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div
            ref={scrollContainerRef}
            className=" d-flex flex-row justify-content-between gap-5 h-100 text-info hide-scrollbar"
          >
            <div className="position-relative col-2 d-flex fle-row">
            <div className="  bg-info d-block rounded-4  ">
              2
              
              
            </div>
            <div className="position-absolute z-3 top-0 start-0 w-100 bg-info bottom-0 border border-2 border-black d-flex justify-content-center align-items-center flex-column  " style={{mixBlendMode:"hard-light"}}>
                <h6 className="text-center text-body-emphasis">Math Class</h6>

                <span className="text-body-emphasis">Start From 8:30 to 10:30</span>
              </div>
            
            </div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>
            <div className=" bg-info d-block rounded-4 ">2</div>

           
          </div>
        </div>

        {/* right section */}
        <div className=" col-3 bg-white rounded-3 p-3 py-5 d-flex flex-column gap-4">
          {/* top */}
          <div className="d-flex flex-column justify-content-center  align-items-center">
            <div className="col-6  rounded-circle border border-2 border-black ">
              <img src={FtImg} className="img-fluid rounded-circle " />
            </div>
            <h6 className="m-0">Class Incharge</h6>
            <h5>MR.Professor</h5>
          </div>
          {/* Monthly shedule */}
          <div className="d-flex flex-column gap-2">
            <h6>Monthly shedule</h6>
            <div className="d-flex flex-column  gap-3 align-items-start">
              <div className="d-flex flex-row align-items-start gap-2">
                <div className="d-flex flex-column justify-content-center align-">
                  <span className="rounded-circle bg-dark-subtle p-2  text-center">
                    10
                  </span>
                  <span>Mon</span>
                </div>
                <span className="d-flex flex-column justify-content-center align-items-center">
                  Maths
                  <span className="" style={{ fontSize: "0.8vw" }}>
                    1pm to 1:30pm
                  </span>
                </span>
              </div>

              <div className="d-flex flex-row align-items-start gap-2">
                <div className="d-flex flex-column justify-content-center align-">
                  <span className="rounded-circle bg-dark-subtle p-2  text-center">
                    10
                  </span>
                  <span>Mon</span>
                </div>
                <span className="d-flex flex-column justify-content-center align-items-center">
                  Maths
                  <span className="" style={{ fontSize: "0.8vw" }}>
                    1pm to 1:30pm
                  </span>
                </span>
              </div>

              <div className="d-flex flex-row align-items-start gap-2">
                <div className="d-flex flex-column justify-content-center align-">
                  <span className="rounded-circle bg-dark-subtle p-2  text-center">
                    10
                  </span>
                  <span>Mon</span>
                </div>
                <span className="d-flex flex-column justify-content-center align-items-center">
                  Maths
                  <span className="" style={{ fontSize: "0.8vw" }}>
                    1pm to 1:30pm
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Active student */}
          <div className="d-flex flex-column">
            <h6>Active student</h6>
            <p className="text-center m-0" style={{ fontSize: "1vw" }}>
              500+Student
            </p>
            <div
              className="d-block w-100  h-25 flex-shrink-0 p-1"
              style={{
                background:
                  "linear-gradient(to right,rgba(90,119,223,1), rgba(90,119,223,0.8),rgba(90,119,223,0))",
              }}
            ></div>

            <div className="d-flex flex-row justify-content-between">
              <span>{NumberOfStudent}</span>
              <span>{Math.round(NumberOfStudent / 2)}</span>
              <span>{Math.round(NumberOfStudent / 4)}</span>
              <span>{Math.round(NumberOfStudent / 6)}</span>
              <span>{Math.round(NumberOfStudent / 8)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FtTime_table;
