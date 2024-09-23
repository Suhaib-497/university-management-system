import React from "react";
import Algorithm_img from "../img/image copy 3.png";
import '../Styles/Scrollbar.css'
const Courses = () => {
  return (
    <div className="col-12 d-flex flex-column gap-4  overflow-y-scroll custom_scroll   " style={{height:"500px"}}>
        
      <div className="d-flex flex-row justify-content-around">
        {/* firs topic */}

        <div className="d-flex flex-column bg-white rounded-4 col-4 gap-2 pb-3">
          <img src={Algorithm_img} className=" rounded-top-4  img-fluid" />
          <div className="d-flex flex-row justify-content-between mx-2 ">
            <p className="m-0">Algorithms Structure</p>
            <p>...</p>
          </div>

          <div
            className="progress mx-5"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{width:"20%"}}>20%</div>
          </div>
          
        </div>

        <div className="d-flex flex-column bg-white rounded-4 col-4 gap-2 pb-3">
          <img src={Algorithm_img} className=" rounded-top-4  img-fluid" />
          <div className="d-flex flex-row justify-content-between mx-2 ">
            <p className="m-0">Algorithms Structure</p>
            <p>...</p>
          </div>

          <div
            className="progress mx-5"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{width:"20%"}}>20%</div>
          </div>
          
        </div>
      </div>


      <div className="d-flex flex-row justify-content-around">
        {/* firs topic */}

        <div className="d-flex flex-column bg-white rounded-4 col-4 gap-2 pb-3">
          <img src={Algorithm_img} className=" rounded-top-4  img-fluid" />
          <div className="d-flex flex-row justify-content-between mx-2 ">
            <p className="m-0">Algorithms Structure</p>
            <p>...</p>
          </div>

          <div
            className="progress mx-5"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{width:"20%"}}>20%</div>
          </div>
          
        </div>

        <div className="d-flex flex-column bg-white rounded-4 col-4 gap-2 pb-3">
          <img src={Algorithm_img} className=" rounded-top-4  img-fluid" />
          <div className="d-flex flex-row justify-content-between mx-2 ">
            <p className="m-0">Algorithms Structure</p>
            <p>...</p>
          </div>

          <div
            className="progress mx-5"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{width:"20%"}}>20%</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Courses;
