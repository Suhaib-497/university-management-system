import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Borrow = ({toggleBorrow}) => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 2 }, (_, i) => i + year);
  return (
    <div
      className={` position-fixed top-0 bottom-0 start-0 end-0 `}
      style={{ background: "rgba(90,119,223,25%)" }}

    >
      
      <div className="d-flex justify-content-center align-items-center h-100">
        
        <form className="bg-white col-4 text-center  d-flex flex-column ">
          <button className="align-self-start bg-transparent border-0" onClick={toggleBorrow}><KeyboardBackspaceIcon/></button>
          <div className="px-5 pb-3 text-center">
          <h4>Fill up the detail</h4>
          <div className="d-flex flex-column gap-3 justify-content-center align-items-start">
            <span className="d-inline-block fs-5  ">From</span>
            <div className=" d-flex flex-row justify-content-start gap-4">
              <input
                type="text"
                className="col-2 rounded-2 border-1"
                disabled
                value={day}
              />
              <input
                type="text"
                className="col-2 rounded-2 border-1"
                disabled
                value={month}
              />
              <input
                type="text"
                className="col-2 rounded-2 border-1"
                disabled
                value={year}
              />
            </div>

            <span className="d-inline-block fs-5  ">To</span>
            <div className=" d-flex flex-row justify-content-start gap-4">
              <select
                name="days"
                id="days"
                className="dropdown dropdown-center col-4 p-1 rounded-2 border-1"
                defaultValue={day}
              >
                {days.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select
                name="days"
                id="days"
                className="dropdown dropdown-center col-4 rounded-2 border-1"
                defaultValue={month}
              >
                {months.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select
                name="days"
                id="days"
                className="dropdown dropdown-center col-4 rounded-2 border-1"
                defaultValue={month}
              >
                {years.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            <span className="d-inline-block fs-5  ">Book Serial No.</span>

            <input
              className="p-2  rounded-2 border-1"
              type="number"
              placeholder="Enter 6 digit Serial Non"
            />

            <span className="d-inline-block fs-5  ">Description</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="rounded-2 border-1 col-12 p-2"
              placeholder="Purpos"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info text-white px-5 py-2 mt-3" onClick={toggleBorrow}>Borrow</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Borrow;
