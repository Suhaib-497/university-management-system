import  { useEffect, useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import AddGrade from "../pages/AddGrade";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";


const FtExams = () => {




  const [on, setOn] = useState(false);
  console.log(on);

  // const [Rows, setRows] = useState([
  //   {
  //     Id: "1",
  //     Name: "Kristin Watson",
  //     Seminar: "Programming-1",
  //     Report: "9/24",
  //     Quiz: "11/12",
  //     Projects: "5/6",
  //     Midterm: "70/100",
  //     Final: "ff",
  //     Average: "Av",
  //   },
  // ]);

  

  // function AddignNEwGrade(newGrade) {
  //   const newRow = {
  //     Id: (Rows.length + 1).toString(), // Update the ID based on the current number of rows
  //     Name: newGrade.name,
  //     Seminar: newGrade.Seminar.Average,
  //     Report: "9/24",
  //     Quiz: "11/12",
  //     Projects: "5/6",
  //     Midterm: "70/100",
  //     Final: "ff",
  //     Average: "Av",
  //   };
  //   setRows([...Rows, newRow]); // Properly update the state with the new row
  // }

  const  DeleteRow=async (id)=> {
    const stDoc=doc(db,"students",id);
    await deleteDoc(stDoc)
    // const DeleteR = Rows.filter((_, i) => i !== index); // Filter correctly to exclude the row
    // setRows(DeleteR);

    setStudents(students.filter(student=>student.id !==id));
  }

  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");
    
   useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(studentCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getdata(); // Make sure to call the function
  }, []);

  function renderRows() {
    return students.map((row, i) => (
      <tr key={i} className={i % 2 === 1 ? "bg-light" : ""}>
        <td>{row.id}</td>
        <td>{row.userName}</td>
        <td>{row.averages?.Seminar || "N/A"}</td>
        
        <td>{row.averages?.Quiz || "N/A"}</td>
        <td>{row.averages?.Projects || "N/A"}</td>
        <td>{row.averages?.Midterm || "N/A"}</td>
        <td>{row.averages?.Final || "N/A"}</td>
        <td>{row.Average || "N/A"}</td>
       
        
        <td>
          <button
            className="border-0 bg-transparent"
            onClick={() => DeleteRow(row.id)}
          >
            <DeleteForeverRoundedIcon />
          </button>
        </td>
        <td>
          <button className="border-0 bg-transparent"   >
          {/* <AddGrade on={on} handleClose={handleClose}  stId={row.id}/> */}
            <BorderColorRoundedIcon />
          </button>
        </td>
      </tr>
    ));
  }

  const handleClose = () => {
    setOn((prev) => !prev);
  };
 

  return (
    <div
      className="d-flex flex-column align-items-center gap-4 overflow-auto"
      style={{ height: "540px" }}
    >
      <AddGrade on={on} handleClose={handleClose} />
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
