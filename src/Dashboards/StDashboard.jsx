import React from "react";
import Calender from "../component/StComponent/Calender";
import WelcomeUser from "../component/StComponent/WelcomeUser";
import Performance from "../component/StComponent/Performance";
import Attendance from "../component/StComponent/Attendance";
import LinkedTeachers from "../component/StComponent/LinkedTeachers";
import UpcomingEvent from "../component/StComponent/UpcomingEvent";
const Body = () => {
  return (
    <div className="d-flex flex-row gap-3">
      {/* left part  */}
      <div className=" col-8 d-flex flex-column gap-2 ">
        {/* top part */}
        <WelcomeUser />
        {/* contain 3 part bottom  */}
        <div className=" col-auto d-flex flex-row gap-2">
          {/* left has 2 part */}
          <div className="col-7 d-flex flex-column gap-4 ">
            {/* part 1 */}
            <Performance />

            {/* part 2 */}
            <LinkedTeachers />
          </div>
          {/* right part */}
          <Attendance />
        </div>
      </div>

      {/* right------------------------------------------------------- */}

      <div className="col d-flex flex-column gap-4 tra">
        {/* top */}
        <Calender />
        <UpcomingEvent />
      </div>
    </div>
  );
};

export default Body;
