import React from "react";
import imgbook from "/Users/Suhaib/university managment system/src/img/image copy 5.png";
import ShareIcon from "@mui/icons-material/Share";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BookCard from "./BookCard";
const Bookinformation = () => {
  const maxStars = 5;
  const rating = 4.5;

  const renderStar = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<StarRateIcon className="text-warning" key={i} />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          i - 0.5 == rating ? (
            <StarHalfIcon className="text-warning" key={i} />
          ) : (
            <StarRateIcon className="text-warning" key={i} />
          )
        );
      } else {
        stars.push(
          <i key={i} className="far fa-star" style={{ color: "#FFD700" }}></i>
        );
      }
    }
    return stars;
  };

  return (
    <div className="d-flex flex-column pt-5">
      {/* Top */}
      <div className="d-flex flex-row">
        {/* Left Section */}
        <div className="d-flex flex-row justify-content-start align-items-start gap-5">
          {/* Book Image */}
          <div className="bg-white p-3 col-3 d-flex flex-column justify-content-center gap-2 align-items-end rounded-3">
            <div className="col-12 border border-1 border-black">
              <img src={imgbook} alt="Book" className="img-fluid" />
            </div>
            <div>
              <ShareIcon className="text-black-50 fs-5" />
            </div>
          </div>

          {/* Book Details */}
          <div className="col-8 d-flex flex-column gap-2">
            <h4 className="m-0">Don’t Make Me Think</h4>
            <span>By Steve Krug, 2000</span>
            <span className="text-black-50">Second Edition</span>

            {/* Star Rating */}
            <div className="d-flex flex-row justify-content-between ">
              <span>{renderStar()}</span>
              <span className="text-black-50">{rating}/5 Ratings</span>
              <span>25 currenrtly reading</span>
              <span>119 Have read</span>
            </div>

            {/* Avalability add to do list  */}

            <div className="d-flex flex-row justify-content-evenly align-items-center">
              {/* Availability */}
              <div className="d-flex flex-column">
                <h6>Avalability</h6>
                <span>
                  <CheckCircleIcon className="text-success fs-5" /> Hard Copy
                </span>
                <span>
                  <CheckCircleIcon className="text-success fs-5" /> E-book
                </span>
                <span>
                  <CheckCircleIcon className="text-success fs-5" /> Audio book
                </span>
              </div>

              <button className="btn btn-outline-primary">Add to List</button>
            </div>

            {/* borrow && read now */}
            <div className="d-flex flex-row justify-content-evenly">
              <button className="px-5 btn btn-primary">BORROW</button>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <button className="px-4 btn btn-success">READ NOW</button>
                <button className="py-1 border-1 border-start btn  btn-success">
                  <HeadphonesIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* author detail */}

        <div className="d-flex flex-column col-3 bg-white p-2 rounded-3">
          <div className=" d-flex flex-row justify-content-center align-items-center gap-1">
            <span className="text-info h4">About </span>
            <span className="h5 align-self-end">Author</span>
          </div>

          <h6 className="text-black-50">Steve krug</h6>

          <p className="" style={{fontSize:"0.75rem"}}>
            Steve Krug is a usability consultant who has more than 30 years of
            experience as a user advocate for companies like Apple, Netscape,
            AOL, Lexus, and others. Based in part on the success of his first
            book, Don't Make Me Think, he has become a highly sought-after
            speaker on usability design.
          </p>

          <div className="d-flex flex-column">
            <h6>
              other Books
            </h6>

            <div className="d-flex flex-row justify-content-start align-items-center gap-2">
            <div className=" col-2 border border-1">

            <img src={imgbook} alt="" className="img-fluid" />

            </div>
            <div className=" col-2 border border-1">

            <img src={imgbook} alt="" className="img-fluid" />

            </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookinformation;
