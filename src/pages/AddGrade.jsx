import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
const AddGrade = ({ on, handleClose, AddignNEwGrade }) => {
  const navigate = useNavigate();

  const [grades, setGrades] = useState({
    Seminar: [{ Value: "", Average: 0 }],
    Quiz: [{ value: "", Average: 0 }],
    Projects: [{ value: "", Average: 0 }],
    Midterm: [{ value: "", Average: 0 }],
    Final: [{ value: "", Average: 0 }],
  });

  const [id, setId] = useState();
  const [name, setName] = useState("");

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
      const totalAvg = total / grades[name].length || 0;

      const UpdateAvg = grades[name].map((grade) => ({
        ...grade,
        Average: totalAvg,
      }));

      ["Seminar", "Quiz", "Projects", "Midterm", "Final"].forEach((category) =>
        CalculateAverage(category)
      );

      setGrades({ ...grades, [name]: UpdateAvg });
      return totalAvg;
    };
  }, [grades]);

  const TotalAverage = () => {
    const totalAverage =
      grades["Seminar"][0].Average +
      grades["Quiz"][0].Average +
      grades["Projects"][0].Average +
      grades["Midterm"][0].Average +
      grades["Final"][0].Average;
    return totalAverage || 0;
  };

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
          placeholder="Seminar"
          className="form-control bg-secondary border-primary border-1"
          name="seminar"
          value={Sm.value}
          onChange={(e) => handleChange(e, name, index)}
        />
      </div>
    ));
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    const NewGrade = {
      id,
      name,
      grades,
    };
    AddignNEwGrade(NewGrade);
    toast.success("New Grade Added");
    return navigate("/FtExams");
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
                <label htmlFor="Id">Id</label>
                <input
                  type="number"
                  placeholder=" Id"
                  className="form-control bg-secondary border-primary border-1"
                  name="Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
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
                    placeholder={`${grades["Seminar"][0].Average}`}
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
                    placeholder={`${grades["Quiz"][0].Average}`}
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
                    placeholder={`${grades["Projects"][0].Average}`}
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
                    placeholder={`${grades["Midterm"][0].Average}`}
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
                    placeholder={`${grades["Final"][0].Average}`}
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
                <button className="btn  btn-primary" onClick={handleClose}>
                  Close
                </button>
                <input
                  type="submit"
                  className="btn  btn-primary"
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
