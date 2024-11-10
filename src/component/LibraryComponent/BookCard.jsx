import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({image, title, author, rating}) => {
  return (
    <div className="d-flex  flex-column  bg-white p-2 col-2  rounded-3 ">
      <Link to={"/bookinformation"} className="col-12">
        <img src={image} alt={title} className="img-fluid" />
      </Link>
      <span style={{ fontSize: "0.8rem" }}>{title}</span>
      <span style={{ fontSize: "0.8rem" }}>{author}</span>
      <span style={{ fontSize: "0.8rem" }}>{rating}</span>
    </div>
  );
};

export default BookCard;
