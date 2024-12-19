import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../../Config/Firebase';

const AdminStudent = () => {

const [student,setStudent]=useState([]);
const studentCollectionRef =collection(db,"students");


useEffect(() => {
  const getdata = async () => {
    const data = await getDocs(studentCollectionRef);
    const studentList = data.docs.map(doc => {
      console.log(doc.data());
      return { ...doc.data(), id: doc.data().customId || doc.data().id };
    });
    setStudent(studentList);
  };

  getdata();
}, []);


const renderRows=()=>{
  return student.map((st,index)=>(
    <tr key={index}  className={`${index%2===1 && "bg-light"}`}>
      <td>{st.id || "N/A"}</td>
        <td>{st.userName || "N/A"}</td>
        <td>{st.stage || "N/A"}</td>
        <td>11/12</td>
        <td>{st.phone || "N/A"}</td>
        <td>{st.TotalAverage || "N/A"}</td>



    </tr>

  ))


}

  return (
    <div className="overflow-auto " style={{ height: "540px" }}>
    <table cellPadding={10}>
      <thead className="bg-primary text-white">
        <tr className="row-cols-5 rounded-3">
          <th className="col">Id</th>
          <th className="col">Name</th>
          <th className="col">Stage</th>
          <th className="col">Attendance</th>
          <th className="col">Phone.nim</th>
          <th className="col">Grade</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  </div>
  )
}

export default AdminStudent