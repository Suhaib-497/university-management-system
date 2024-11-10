import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../Config/Firebase";
const AddGrade = ({ on, handleClose, stId }) => {
  const navigate = useNavigate();

  const [grades, setGrades] = useState({
    Seminar: [{ Value: "" }],
    Quiz: [{ value: "" }],
    Projects: [{ value: "" }],
    Midterm: [{ value: "" }],
    Final: [{ value: "" }],
  });

  const [averages, setAverages] = useState({
    Seminar: 0,
    Quiz: 0,
    Projects: 0,
    Midterm: 0,
    Final: 0,
  });

  // const [id, setId] = useState();
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");
  const [current_Student, setCurrent_Student] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(studentCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCurrent_Student(
        data.docs.find((doc) => doc.id === stId)?.data() || {}
      );
    };
    getdata(); // Make sure to call the function
  }, []);

  const updateUser = async (username) => {
    const q = query(studentCollectionRef, where("userName", "==", username));

    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (docsnap) => {
          const studentDoc = doc(db, "students", docsnap.id);

          const newField = {
            grades,
            averages,
            TotalAverage: TotalAvg,
          };

          await updateDoc(studentDoc, newField);
          console.log("updated succes");
          navigate("/FtExams");
        });
      } else {
        console.log("no student found");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleCreate = (e, name) => {
    e.preventDefault();
    if (grades[name].length < 4) {
      const newGrade = grades[name].length < 4 && [
        ...grades[name],
        { value: "" },
      ];

      setGrades({ ...grades, [name]: newGrade });
    } else {
      console.log("cant add more");
    }
  };

  const handleDelete = (e, name, index) => {
    e.preventDefault();
    const Delete = grades[name].filter((_, i) => i !== index);

    setGrades({ ...grades, [name]: Delete });
  };

  const handleChange = (e, name, index) => {
    const updated = grades[name].map((sm, i) =>
      i === index ? { value: e.target.value } : sm
    );
    setGrades({ ...grades, [name]: updated });
  };

  useEffect(() => {
    const CalculateAverage = (name) => {
      const total = grades[name].reduce(
        (st, current) => st + Number(current.value || 0),
        0
      );
      return total / grades[name].length || 0;
    };

    const updatedAverage = {
      Seminar: CalculateAverage("Seminar"),
      Quiz: CalculateAverage("Quiz"),
      Projects: CalculateAverage("Projects"),
      Midterm: CalculateAverage("Midterm"),
      Final: CalculateAverage("Final"),
    };

    if (
      updatedAverage.Seminar !== averages.Seminar ||
      updatedAverage.Quiz !== averages.Quiz ||
      updatedAverage.Projects !== averages.Projects ||
      updatedAverage.Midterm !== averages.Midterm ||
      updatedAverage.Final !== averages.Final
    ) {
      setAverages(updatedAverage);
    }
  }, [grades, averages]);

  const TotalAverage = () => {
    const totalAverage =
      averages.Seminar +
      averages.Quiz +
      averages.Final +
      averages.Midterm +
      averages.Projects;
    return totalAverage / 5 || 0;
  };

  const TotalAvg = TotalAverage();

  const Render = (name, grade) => {
    return grade[name].map((Sm, index) => (
      <div key={index} className="w-100">
        <div className="d-flex flex-row justify-content-between">
          <label htmlFor="Id">{`${name} ${index + 1}`}</label>
          <div className="">
            <button
              className="border-0 bg-transparent m-0 p-0 "
              onClick={(e) => handleCreate(e, name)}
            >
              {" "}
              <AddIcon className="text-info fs-5" />{" "}
            </button>
            <button
              className=" border-0 bg-transparent m-0 p-0"
              onClick={(e) => handleDelete(e, name, index)}
            >
              {" "}
              <ClearIcon className="text-info fs-5" />{" "}
            </button>
          </div>
        </div>

        <input
          type="number"
          placeholder={`${ name}`}
          className="form-control bg-secondary border-primary border-1"
          name="seminar"
          value={Sm.value || ""}
          onChange={(e) => handleChange(e, name, index)}
          min={"0"}
          max={"100"}
        />
      </div>
    ));
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    updateUser(name);

    console.log("succes");
    return navigate("/FtExams");
  };
  const currentData = {
    userNamee: current_Student.userName || '',
    Seminar: current_Student.averages?.Seminar || 'N/A',
    Quiz: current_Student.averages?.Quiz || 'N/A',
    Projects: current_Student.averages?.Projects || 'N/A',
    Midterm: current_Student.averages?.Midterm || 'N/A',
    Final: current_Student.averages?.Final || 'N/A',
  };
  
  return (
    <div
      className={`${
        on ? "d-block" : "d-none"
      } position-fixed top-0 bottom-0 start-0 end-0`}
      style={{ background: "rgba(90,119,223,25%)" }}
    >
      <div className=" d-flex  justify-content-center align-items-center  h-100 ">
        <div className="bg-white col-7 p-3 rounded-2">
          <form
            action=""
            method="post"
            className="form d-flex flex-column  gap-4"
            onSubmit={SubmitForm}
          >
            <h5>Add Grades</h5>

            <div className="d-flex flex-row justify-content-evenly">
              <div className="">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder={` "Full Name"`}
                  className="form-control bg-secondary border-primary border-1"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex flex-row gap-4 justify-content-center align-items-center ">
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center ">
                {Render("Seminar", grades)}
                <div>
                  <label htmlFor="" className="fw-bold ">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${averages.Seminar}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center ">
                {Render("Quiz", grades)}
                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${averages.Quiz}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center  ">
                {Render("Projects", grades)}

                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${averages.Projects}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center ">
                {Render("Midterm", grades)}
                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${averages.Midterm}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-2 justify-content-center align-items-center ">
                {Render("Final", grades)}

                <div>
                  <label htmlFor="" className="fw-bold ">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${averages.Final}`}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <div>
                <label htmlFor="" className="fw-bold ">
                  Total Average
                </label>
                <input
                  type="text "
                  className="col-2 "
                  readOnly
                  placeholder={TotalAverage()}
                />
              </div>

              <div className="d-flex flex-row justify-content-end gap-2">
                <button className="btn  btn-primary" type="button" onClick={handleClose}>
                  Close
                </button>
                <input
                  type="submit"
                  className="btn  btn-primary"
                  value={"Submit"}
                  onClick={handleClose}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGrade;
