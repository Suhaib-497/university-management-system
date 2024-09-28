import React from 'react'
import StImage from "/Users/Suhaib/university managment system/src/img/image.png";
const WelcomeUser = () => {
  return (
    <div className="col-12 bg-white d-flex  rounded-3 px-3  flex-row  ">
          <div className="d-inline align-self-center">
            <h1>Hello Grace</h1>
            <p>
              you have 3 new tasks.It is alot of work for today! So lets start!
            </p>
          </div>
          <img src={StImage} className="col-4" />
        </div>
  )
}

export default WelcomeUser