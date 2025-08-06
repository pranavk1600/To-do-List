import { useState } from "react";

function Input1() {
  const [use, setuse] = useState(""); 
  const [datee, setdatee] = useState("");
  const [tasks, setTasks] = useState([]); 
   const [error, setError] = useState("");

  const pk = (event) => {
    setuse(event.target.value);
  };

  const kg = (event) => {
    setdatee(event.target.value);
  };

  const jk = () => {
      const isDuplicate = tasks.some((element) => element.text === use);
      if (isDuplicate) {
        setError("Duplicate task already exists.");
      } else {
        const newTask = { text: use, date: datee };
        setTasks([...tasks, newTask]);
        setuse("");
        setdatee("");
        setError("");
      }
    };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-3">
            <input
              type="text"
              placeholder="To-do list type"
              onChange={pk}
              className="form-control w-75"
              value={use}
            />
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-center mb-3">
            <input type="date" className="form-control w-75" onChange={kg} value={datee}/>
          </div>
          <div className="col-lg-2 col-md-12 d-flex justify-content-center mb-3">
            <button type="button" className="btn btn-success w-75" onClick={jk}>
              Add
            </button>
          </div>
        </div>

        {error && (
          <div className="row mb-3 ">
            <div className="col text-center">
              <div className="alert alert-danger p-2">{error}</div>
            </div>
          </div>
        )}

        {/* New section in onchange button output */}
        <div className="row mb-4">
          <div className="col-6 d-flex justify-content-center">
            <h4>Your target: {use}</h4>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <h4>Selected Date: {datee}</h4>
          </div>
        </div>
        {/* new section in add buuton output */}
        {tasks.map((element, index) => (
          <div className="row mb-3" key={index}>
            <div className="row w-100">
              <div className="col-6 border rounded ">
                <h4>{element.text}</h4>
              </div>
              <div className="col-4 border rounded ">{element.date}</div>
              <div className="col-2 ">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Input1;
