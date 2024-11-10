import React, { useEffect, useState } from "react";
import NewArrival from "../component/LibraryComponent/NewArrival";
import TodayQuete from "../component/LibraryComponent/TodayQuete";
import imgBook from "../img/image copy 6.png";
import { Link } from "react-router-dom";
import BookCard from "../component/LibraryComponent/BookCard";
const StLibrary = () => {
  const [hour, setHour] = useState(new Date().getHours());
  const [greeting, setGreeting] = useState("");

  const books = [
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
    {
      image: imgBook,
      title: "The Design of Every...",
      author: "Don Norman, 1988",
      rating: "4.5/5",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setHour(now.getHours());
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hour >= 8 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon");
    } else if (hour >= 18 && hour < 22) {
      setGreeting("Good evening");
    } else {
      setGreeting("Good night");
    }
  }, [hour]);

  function renderBook() {
    return (
      <div className="d-flex flex-row justify-content-start gap-3 align-items-center hide-scrollbar">
        {books.map((bb, index) => (
          <BookCard
            key={index}
            image={bb.image}
            title={bb.title}
            author={bb.author}
            rating={bb.rating}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="  py-5  d-flex flex-column gap-3 justify-content-start align-items-start  rounded-3 "
      style={{
        background: "linear-gradient(to left,#3E53A0 0%,#FFFFFF 100%)",
        height: "100%",
      }}
    >
      <div className="d-flex justify-content-between align-items-center px-5">
        <TodayQuete />
        <NewArrival />
      </div>
      {/* Bottom */}
      <div className="ps-5 d-flex flex-column gap-3 ">
        <h4 className="m-0 fw-bold" style={{ color: "#4D4D4D" }}>
          {greeting}
        </h4>
        {/* Recomended */}
        <div className=" d-flex flex-column gap-1">
          <h5 style={{ color: "#4D4D4D" }}>Recommended for you</h5>
          {renderBook()}
        </div>

        {/* Readings */}
        <div className=" d-flex flex-column gap-1">
          <h5 style={{ color: "#4D4D4D" }}>Recent Readings</h5>
          {renderBook()}
        </div>

        {/* Academic Books */}
        <div className=" d-flex flex-column gap-1">
          <h5 style={{ color: "#4D4D4D" }}>Academic Books</h5>
          {renderBook()}
        </div>
      </div>
    </div>
  );
};

export default StLibrary;
