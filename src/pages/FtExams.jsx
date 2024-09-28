import React, { useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import AddGrade from "../pages/AddGrade";
import { Link } from "react-router-dom";

const FtExams = () => {
  const [on, setOn] = useState(false);
  console.log(on);

  const [Rows, setRows] = useState([
    {
      Id: "1",
      Name: "Kristin Watson",
      Seminar: "Programming-1",
      Report: "9/24",
      Quiz: "11/12",
      Projects: "5/6",
      Midterm: "70/100",
      Final: "ff",
      Average: "Av",
    },
  ]);

  function CreateRow() {
    const newRow = {
      Id: (Rows.length + 1).toString(), // Update the ID based on the current number of rows
      Name: "Kristin Watson",
      Seminar: "Programming-1",
      Report: "9/24",
      Quiz: "11/12",
      Projects: "5/6",
      Midterm: "70/100",
      Final: "ff",
      Average: "Av",
    };
    setRows([...Rows, newRow]); // Properly update the state with the new row
  }

  function DeleteRow(index) {
    const DeleteR = Rows.filter((_, i) => i !== index); // Filter correctly to exclude the row
    setRows(DeleteR);
  }

  function renderRows() {
    return Rows.map((row, i) => (
      <tr key={i} className={i % 2 === 1 ? "bg-light" : ""}>
        <td>{row.Id}</td>
        <td>{row.Name}</td>
        <td>{row.Seminar}</td>
        <td>{row.Report}</td>
        <td>{row.Quiz}</td>
        <td>{row.Projects}</td>
        <td>{row.Midterm}</td>
        <td>{row.Final}</td>
        <td>{row.Average}</td>
        <td>
          <button
            className="border-0 bg-transparent"
            onClick={() => DeleteRow(i)}
          >
            <DeleteForeverRoundedIcon />
          </button>
        </td>
        <td>
          <button className="border-0 bg-transparent">
            <BorderColorRoundedIcon />
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div
      className="d-flex flex-column align-items-center gap-4 overflow-auto"
      style={{ height: "540px" }}
    >
        <AddGrade on={on} />
      <button
        className="btn btn-light align-self-end rounded-pill"
        onClick={() => setOn((prev) => !prev)}
      >
        Add Grade
      </button>
      
      <table cellPadding={10}>
        <thead className="bg-primary text-white">
          <tr className="row-cols-6 rounded-3">
            <th className="col">Id</th>
            <th className="col">Name</th>
            <th className="col">Seminar</th>
            <th className="col">Report</th>
            <th className="col">Quiz</th>
            <th className="col">Projects</th>
            <th className="col">Midterm</th>
            <th className="col">Final</th>
            <th className="col">Average</th>
            <th className="col">Select</th>
            <th className="col"></th>
          </tr>
        </thead>
        <tbody className="row-col">{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default FtExams;
