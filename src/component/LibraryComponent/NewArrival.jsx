import React from "react";
import imgBook from "/Users/Suhaib/university managment system/src/img/image copy 4.png";

const NewArrival = () => {
  return (
    <div className="d-flex flex-row justify-content-start  flex-grow-0 flex-shrink-1  col-5 rounded-2 text-white bg-transparent  ">
      <div
        className=" rounded-3  d-flex justify-content-start align-items-center rounded-end-0 col-1"
        style={{
          background: "linear-gradient(to bottom,#3E53A0 40%,#FFFFFF 100%",
        }}
      >
        <div className="d-flex flex-column gap-4 justify-content-start align-items-start col-10 mt-5">
          <h4
            className=" m-0 m p-0 d-inline-block   col-12  "
            style={{
              transform: "rotate(270deg)",
            }}
          >
            Arrival
          </h4>

          <h4
            className=" m-0 p-0 d-inline-block   col-12  "
            style={{
              transform: "rotate(270deg)",
            }}
          >
            New
          </h4>
        </div>
      </div>


      <div className=" d-flex   bg-white p-2  rounded-3  rounded-start-0 col-12  hide-scrollbar   " style={{height:"150px"}}>
       <div className=" d-flex  gap-2 justify-content-evenly align-items-center w-100">
        <div className="col-3  ">
          <img
            src={imgBook}
            className="img-thumbnail  img-fluid p-2 shadow border-1"
          />
        </div>

        <div className=" col-3   ">
          <img
            src={imgBook}
            className="img-thumbnail  img-fluid p-2 shadow border-1"
          />
        </div>
        <div className="col-3  ">
          <img
            src={imgBook}
            className="img-thumbnail  img-fluid p-2 shadow border-1"
          />
        </div>

        <div className="col-3  ">
          <img
            src={imgBook}
            className="img-thumbnail  img-fluid p-2 shadow border-1"
          />
        </div>

        <div className="col-3  ">
          <img
            src={imgBook}
            className="img-thumbnail  img-fluid p-2 shadow border-1"
          />
        </div>
        <div className="col-3  ">
          <img
            src={imgBook}
            className="img-thumbnail  img-fluid p-2 shadow border-1"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
