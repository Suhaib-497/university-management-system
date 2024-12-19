

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Config/Firebase";

const FtStudent = () => {
  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(studentCollectionRef);
      const studentsList = data.docs.map((doc) => {
        console.log(doc.data());
        return { ...doc.data(), id: doc.data().customId || doc.data().id };
      });
      setStudents(studentsList);
    };

    getData();
  }, []);

  function renderRows() {
    return students.map((st, index) => (
      <tr key={index} className={index % 2 === 1 && "bg-light" }>
        <td>{st.id || "N/A"}</td>
        <td>{st.userName || "N/A"}</td>
        <td>{st.role || "N/A"}</td>
        <td>11/12</td>
        <td>{st.grades?.Projects?.Value || "N/A"}</td>
        <td>{st.TotalAverage || "N/A"}</td>
      </tr>
    ));
  }

  return (
    <div className="overflow-auto" style={{ height: "540px" }}>
      <table cellPadding={10}>
        <thead className="bg-primary text-white">
          <tr className="row-cols-5 rounded-3">
            <th className="col">Id</th>
            <th className="col">Name</th>
            <th className="col">Role</th>
            <th className="col">Attendance</th>
            <th className="col">Projects</th>
            <th className="col">Grade</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default FtStudent;

