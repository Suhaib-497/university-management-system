import React from "react";
import { useState } from "react";

const FtStudent = () => {
  const [countRow, setCountRow] = useState(100);

  function CreateRow() {
    setCountRow((prev) => prev + 1);
  }

  function renderRows() {
    const Row = [];
    for (let i = 0; i < countRow; i++) {
      Row.push(
        <tr key={i} className={i % 2 == 1 && "bg-light"}>
          <td>Kristin Watson</td>
          <td>Programming-1</td>
          <td>9/24</td>
          <td>11/12</td>
          <td>5/6</td>
          <td>70/100</td>
        </tr>
      );
    }
    return Row;
  }
  return (
    <div className=" overflow-auto " style={{height:"540px"}} >
      <table cellPadding={10}  >
        <thead className="bg-primary text-white">
          <tr className="row-cols-5 rounded-3  ">
            <th className="col ">Name</th>
            <th className="col">Group</th>
            <th className="col">Homeworks</th>
            <th className="col">Attendance</th>
            <th className="col">Projects</th>
            <th className="col">Grade</th>
          </tr>
        </thead>
        <tbody className="row-col ">
          {renderRows()}
          
          
          
          </tbody>
          
      </table>
    </div>
  );
};

export default FtStudent;
