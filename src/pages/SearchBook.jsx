import React, { useState } from "react";
import imageBook from "../img/image copy 6.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const SearchBook = () => {
  const [red, setRed] = useState(false);

  const togglecolor = () => {
    setRed((prev) => !prev);
  };
  return (
    <div>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-row align-items-center justify-content-around ">
          <div className=""></div>
          <span className="col-2 text-center ">Title</span>{" "}
         
            <span>Rating</span>
             <span className="col-2">Category</span>
         
          <span className="col-3">Avalability</span>
        </div>
        <div className="bg-white p-2   rounded-3">
          <div className=" d-flex flex-row align-items-center justify-content-around">
            <div className="col-1  ">
              <img src={imageBook} className=" col-9" />
            </div>

            <div>
              <h6>Dont Make Me Think</h6>
              <h6 className="mb-0" style={{ fontSize: "0.9rem" }}>
                Steve Krug,2000
              </h6>
              <span style={{ fontSize: "0.8rem" }}>Second edition</span>
            </div>
            <div>
              <span>4.5 </span>
              <span className="text-black-50" style={{ fontSize: "0.75rem" }}>
                /5
              </span>
            </div>

            <div>
              <h6>Computer Science</h6>
              <span style={{ fontSize: "0.85rem" }}>UI/UX</span>
            </div>

            <div className="d-flex flex-column">
              <span>
                <CheckCircleIcon className="text-success fs-5 me-1 " />
                Hard Copy
              </span>
              <span>
                <CheckCircleIcon className="text-success fs-5 me-1" />
                Hard Copy
              </span>
              <span>
                <CheckCircleIcon className="text-success fs-5 me-1" />
                Hard Copy
              </span>
            </div>
            <div className="" onClick={togglecolor}>
              <FavoriteIcon
                className={`${
                  red ? "text-danger" : "text-black-50 opacity-25 "
                }`}
              />
            </div>

            <Link to={"/bookinformation"} className="btn btn-outline-info" >Preview</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
