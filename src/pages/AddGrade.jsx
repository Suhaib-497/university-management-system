import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
const AddGrade = ({ on, handleClose }) => {
  const [average, setAverage] = useState(0);
  const [countSeminar, setCountSeminar] = useState(1);
  const [addSeminar, setAddSeminar] = useState([
    {
      Seminar: "",
    },
  ]);
  const [countQuiz, setCountQuiz] = useState(1);
  const [addQuiz, setAddQuiz] = useState([
    {
      Quiz: "",
    },
  ]);
  const [countProjects, setCountProjects] = useState(1);
  const [addProjects, setAddProjects] = useState([
    {
      Projects: "",
    },
  ]);
  const [countMidterm, setCountMidterm] = useState(1);
  const [addMidterm, setAddMidterm] = useState([
    {
      Projects: "",
    },
  ]);
  const [countFinal, setCountFinal] = useState(1);
  const [addFinal, setAddFinal] = useState([
    {
      Projects: "",
    },
  ]);
  const [id, setId] = useState();
  const [name, setName] = useState("");

  console.log(id);

  const Create = (e, name, add, setAdd, setCount, count) => {
    e.preventDefault();

    count < 5 && setAdd([...add, { [name]: "" }]);
    count < 5 && setCount(count + 1);
  };

  const Delete = (e, index, add, setAdd, setCount, count) => {
    e.preventDefault();
    const SeminarDl = add.filter((_, i) => i !== index);

    setAdd(SeminarDl);
    setCount(count - 1);
  };

  const HandlingChange = (e, name, index, add, setAdd) => {
    const updated = add.map((sm, i) =>
      i === index ? { [name]: e.target.value } : sm
    );
    setAdd(updated);
  };

  const Average = (name, add, count) => {
    let Total = 0;
    let Averages;
    add.map((sm) => {
      const Values = Number(sm[name]);

      Total += Values;
      Averages = Total / count;
    });
    return Averages;
  };
  const Render = (name, add, setAdd, setCount, count) => {
    return add.map((Sm, index) => (
      <div key={index} className="w-100">
        <div className="d-flex flex-row justify-content-between">
          <label htmlFor="Id">{`${name} ${index + 1}`}</label>
          <div className="">
            <button
              className="border-0 bg-transparent m-0 p-0 "
              onClick={(e) => Create(e, name, add, setAdd, setCount, count)}
            >
              {" "}
              <AddIcon className="text-info fs-5" />{" "}
            </button>
            <button
              className=" border-0 bg-transparent m-0 p-0"
              onClick={(e) => Delete(e, index, add, setAdd, setCount, count)}
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
          value={Sm.Seminar}
          onChange={(e) => HandlingChange(e, name, index, add, setAdd)}
        />
      </div>
    ));
  };
  return (
    <div
      className={`${
        on ? "d-block" : "d-none"
      } position-fixed top-0 bottom-0 start-0 end-0`}
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 1000 }}
    >
      <div className=" d-flex  justify-content-center align-items-center  h-100 ">
        <div className="bg-white col-7 p-3 rounded-2">
          <form action="" className="form d-flex flex-column gap-4">
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
              <div className="d-flex flex-column gap-4 justify-content-center align-items-center ">
                {Render(
                  "Seminar",
                  addSeminar,
                  setAddSeminar,
                  setCountSeminar,
                  countSeminar
                )}
                <div>
                  <label htmlFor="" className="fw-bold ">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${Average(
                      "Seminar",
                      addSeminar,
                      countSeminar
                    )}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-4 justify-content-center align-items-center ">
                {Render("Quiz", addQuiz, setAddQuiz, setCountQuiz, countQuiz)}
                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${Average("Quiz", addQuiz, countQuiz)}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-4 justify-content-center align-items-center  ">
                {Render(
                  "Projects",
                  addProjects,
                  setAddProjects,
                  setCountProjects,
                  countProjects
                )}

                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${Average(
                      "Projects",
                      addProjects,
                      countProjects
                    )}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-4 justify-content-center align-items-center ">
                {Render(
                  "Midterm",
                  addMidterm,
                  setAddMidterm,
                  setCountMidterm,
                  countMidterm
                )}
                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${Average(
                      "Midterm",
                      addMidterm,
                      countMidterm
                    )}`}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-4 justify-content-center align-items-center ">
                {Render(
                  "Final",
                  addFinal,
                  setAddFinal,
                  setCountFinal,
                  countFinal
                )}

                <div>
                  <label htmlFor="" className="fw-bold">
                    Average
                  </label>
                  <input
                    type="text "
                    className="col-4 "
                    readOnly
                    placeholder={`${Average("Final", addFinal, countFinal)}`}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-end gap-4">
              <button className="btn  btn-primary">Close</button>
              <button className="btn  btn-primary">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGrade;
