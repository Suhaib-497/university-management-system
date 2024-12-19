import React from 'react'

import Calender from "../component/StComponent/Calender";
import WelcomeUser from "../component/StComponent/WelcomeUser";
import Chats from '../component/Admin.Component/Chats';
import Tasks from '../component/Admin.Component/Tasks';
import Chart from '../component/Admin.Component/Chart';


const AdminDashboard = () => {
  return (
    <div className="d-flex flex-row gap-3">
    {/* left part  */}
    <div className=" col-8 d-flex flex-column gap-2 ">
      {/* top part */}
      <WelcomeUser />
      <div className='d-flex flex-row justify-content-between gap-1'>
      <div className='bg-white rounded-3 col-6'>
        <Chart/>
      </div>

      <div className='bg-white rounded-3 col-6'>
        <Chart />
      </div>

      </div>
      
      
    </div>

    {/* right------------------------------------------------------- */}

    <div className="col d-flex flex-column gap-4 tra">
      {/* top */}
      <Calender />
      <Chats/>
      <Tasks/>
    </div>
  </div>
  )
}

export default AdminDashboard