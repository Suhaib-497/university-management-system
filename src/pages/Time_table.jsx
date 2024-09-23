import React, { useEffect, useState } from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
const Time_table = () => {
  const [ttime, setTtime] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());
  const [top, setTop] = useState(200);

  useEffect(() => {
    const Interval = setInterval(() => {
      const now = new Date();

      setTtime(now.getMinutes());
      setHour(now.getHours());
    }, 60000);

    return () => clearInterval(Interval);
  }, []);

  useEffect(() => {
    switch (hour) {
      case 8:
        setTop(200);
        break;
      case 9:
        setTop(260);
        break;
      case 10:
        setTop(320);
        break;
      case 11:
        setTop(380);
        break;
      case 12:
        setTop(440);
        break;
      case 13:
        setTop(500);
        break;
      case 14:
        setTop(560);
        break;
      case 15:
        setTop(620);
        break;
      case 16:
        setTop(680);
        break;
      default:
        setTop(200);
        setTtime(0);
    }
  }, [hour]);

  console.log(top);
  console.log(hour);
  console.log(ttime);

  return (
    <div className="bg-white p-4 border-black border-2 d-flex flex-column gap-4 shadow">
      {/* top */}
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="border border-4 border-secondary p-2  rounded-pill text-light-emphasis fw-bold shadow-sm">
          Today
        </div>

        <div className="d-flex flex-row  align-items-center gap-2">
          <span className="border border-4 border-secondary px-2 text-center text-light m-0 rounded-circle fw-bold fs-3">
            &lt;
          </span>
          <p className="m-0 fs-5">May 21 – 26, 2045</p>
          <span className="border border-4 border-secondary px-2 text-center text-light m-0 rounded-circle fw-bold fs-3">
            &gt;
          </span>
        </div>
      </div>

      <div
          className="  col-10 rounded-start-2 position-absolute ps-0 d-flex justify-content-start align-items-center"
          style={{
            top: `${ttime + top}px`,
            backgroundColor: "#FF6633",
            height: "5px",
          }}
        >
          <div
            className="rounded-circle p-2  "
            style={{ backgroundColor: "#FF6633" }}
          ></div>
        </div>
      <table className="table table-bordered ">
        
        <thead>
          <tr>
            <th scope="col-1 ">
              <AccessTimeRoundedIcon />{" "}
            </th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wedne</th>
            <th scope="col">Thersday</th>
            <th scope="col">Friday</th>
            <th scope="col-1">Saturday</th>
            <th scope="col">Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row ">
            <td className=" text-secondary-emphasis ">8:30</td>
            <td className=" d-flex justify-content-center">
              {" "}
              <div
                className="  position-absolute border border-success border-3 p-2  py-0 d-flex flex-column gap-1 "
                style={{
                  width: "10%",
                  height: "85px",
                  backgroundColor: "rgba(41, 204, 57, 5%)",
                  borderColor: "rgba(41, 204, 57, 100%)",
                }}
              >
                <div className="d-flex flex-row gap-3">
                  <div
                    className="col-4 bg-success px-1  rounded-3 text-white  "
                    style={{ fontSize: "11px" }}
                  >
                    08:30
                  </div>
                  <div
                    className="col-4 bg-success px-1 rounded-3 text-white "
                    style={{ fontSize: "11px" }}
                  >
                    10:30
                  </div>
                </div>
                <div
                  className="col-6 bg-success px-1  rounded-3 text-white col-7 "
                  style={{ fontSize: "11px" }}
                >
                  Theory
                </div>
                <span
                  className="text-success-emphasis "
                  style={{ fontSize: "10px" }}
                >
                  Computational
                </span>
                <div className="d-flex flex-row justify-content-between mt-1">
                  <span
                    className="text-success-emphasis col-2 "
                    style={{ fontSize: "9.5%" }}
                  >
                    Dr,Sara
                  </span>
                  <span
                    className="col-4 text-white  bg-success rounded-top-2 px-1 "
                    style={{ fontSize: "10px" }}
                  >
                    Hall 4
                  </span>
                </div>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">9:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">10:30</td>
            <td className=" d-flex justify-content-center">
              {" "}
              <div
                className="  position-absolute border border-success border-3 p-2  py-0 d-flex flex-column gap-1 mt-2"
                style={{
                  width: "10%",
                  height: "85px",
                  backgroundColor: "rgba(41, 204, 57, 5%)",
                  borderColor: "rgba(41, 204, 57, 100%)",
                }}
              >
                <div className="d-flex flex-row gap-3">
                  <div
                    className="col-4 bg-success px-1  rounded-3 text-white  "
                    style={{ fontSize: "11px" }}
                  >
                    08:30
                  </div>
                  <div
                    className="col-4 bg-success px-1 rounded-3 text-white "
                    style={{ fontSize: "11px" }}
                  >
                    10:30
                  </div>
                </div>
                <div
                  className="col-6 bg-success px-1  rounded-3 text-white col-7 "
                  style={{ fontSize: "11px" }}
                >
                  Theory
                </div>
                <span
                  className="text-success-emphasis "
                  style={{ fontSize: "10px" }}
                >
                  Data Comunnication
                </span>
                <div className="d-flex flex-row justify-content-between mt-1">
                  <span
                    className="text-success-emphasis col-2 "
                    style={{ fontSize: "9.5%" }}
                  >
                    Dr,Sara
                  </span>
                  <span
                    className="col-4 text-white  bg-success rounded-top-2 px-1 "
                    style={{ fontSize: "10px" }}
                  >
                    Hall 4
                  </span>
                </div>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">11:30</td>
            {/* <td className=" d-flex justify-content-center">
              {" "}
              <div
                className=" position-absolute border border-success border-3 p-2 pt-0 d-flex flex-column gap-1 "
                style={{
                  height: "110px",
                  backgroundColor: "rgba(41, 204, 57, 5%)",
                  borderColor: "rgba(41, 204, 57, 100%)",
                }}
              >
                <div className="d-flex flex-row gap-3">
                  <div
                    className="bg-success px-1  rounded-3 text-white  "
                    style={{ fontSize: "11px" }}
                  >
                    08:30
                  </div>
                  <div
                    className="bg-success px-1 rounded-3 text-white "
                    style={{ fontSize: "11px" }}
                  >
                    10:30
                  </div>
                </div>
                <div
                  className="bg-success px-1  rounded-3 text-white col-7 "
                  style={{ fontSize: "11px" }}
                >
                  Theory
                </div>
                <span className="text-success-emphasis">Computational</span>
                <span
                  className="text-success-emphasis"
                  style={{ fontSize: "9.5px" }}
                >
                  Dr,Sara
                </span>
                <span
                  className="text-white align-self-end bg-success rounded-top-2 px-1"
                  style={{ fontSize: "12px" }}
                >
                  Hall 4
                </span>
              </div>
            </td> */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">12:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">1:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">2:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">3:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr scope="row">
            <td className="col-1 text-secondary-emphasis">4:30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Time_table;
