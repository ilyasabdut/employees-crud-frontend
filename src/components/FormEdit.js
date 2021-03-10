import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import services from "../services/services";
import Modali, { useModali } from "modali";

export default function FormEdit() {
  //   const [resp, setPositionsData] = useState([]);
  //   const [currentPosition, setCurrentPosition] = useState(0)

  //   const changePosition = (newPosition) => {
  //     setCurrentPosition(newPosition)
  //   }

  //   useEffect(() => {
  //     retrievePositions();
  //   }, []);

  //   const retrievePositions = () => {
  //     services
  //       .getPositions()
  //       .then((response) => {
  //         setPositionsData(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  const { id } = useParams();

  const getEmployee = (id) => {
    services
      .get(id)
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(id);
  }, [id]);

  const initialEmployeesState = {
    id: null,
    name: null,
    birth_date: null,
    position_id: null,
    id_number: null,
    gender: null,
    is_delete: 0,
  };

  const [employees, setEmployees] = useState(initialEmployeesState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployees({ ...employees, [name]: value });
  };

  const updateEmployees = () => {
    services
      .update(id, employees)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
    title: "Konfirmasi",
    message: "Apakah anda akan menyimpan data ini?",
    buttons: [
      <Modali.Button
        label="No"
        isStyleCancel
        onClick={() => toggleCompleteModal()}
      />,
      <Modali.Button
        label="Yes"
        isStyleDestructive
        onClick={() => updateEmployees()}
      />,
    ],
  });

  return (
    <div className="container">
      <NavBar></NavBar>

      <div className="card">
        <div className="card-header">Edit Data Karyawan</div>

        <div className="card-body">
          <form>
            <div className="form-group row">
              <label htmlFor="name" className="col-sm-6 col-form-label">
                Nama
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={employees.name}
                  onChange={handleInputChange}
                  name="name"
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="birth_date" className="col-sm-6 col-form-label">
                Tanggal Lahir
              </label>
              <div className="col-sm-6">
                <input
                  type="date"
                  className="form-control"
                  id="birth_date"
                  value={employees.birth_date}
                  onChange={handleInputChange}
                  name="birth_date"
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="position_id" className="col-sm-6 col-form-label">
                Jabatan
              </label>
              <div className="col-sm-6">
                <input
                  type="number"
                  className="form-control"
                  id="position_id"
                  value={employees.position_id}
                  onChange={handleInputChange}
                  name="position_id"
                ></input>
              </div>
            </div>

            {/* <div className="form-group row">
              <label htmlFor="position_id" className="col-sm-6 col-form-label">
                Jabatan
              </label>
              <div className="col-sm-6">
                <select
                  className="custom-select"
                  id="position_id"
                  name="position_id"
                  onChange={(event) => changePosition(event.target.value)}
                  value={currentPosition}
                          >
                  {resp &&
                    resp.map((position, index) => (
                      <option value={1} key={index}>
                        {position.name}
                      </option>
                    ))}
                </select>
              </div>
            </div> */}

            <div className="form-group row">
              <label htmlFor="id_number" className="col-sm-6 col-form-label">
                NIP
              </label>
              <div className="col-sm-6">
                <input
                  type="number"
                  className="form-control"
                  id="id_number"
                  value={employees.id_number}
                  onChange={handleInputChange}
                  name="id_number"
                ></input>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-6 pt-0">
                  Jenis Kelamin
                </legend>
                <div className="col-sm-6">
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender1"
                      value={1}
                      onChange={handleInputChange}
                    ></input>
                    <label className="form-check-label" htmlFor="gender1">
                      Pria
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value={2}
                      onChange={handleInputChange}
                    ></input>
                    <label className="form-check-label" htmlFor="gender2">
                      Wanita
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 offset-md-4">
                <Link to="/">
                  <button className="btn btn-primary btn-md mr-1">
                    Kembali
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-md"
                  onClick={toggleCompleteModal}
                >
                  Simpan
                </button>
                <Modali.Modal {...completeModal}>
                  {submitted === true && (
                    <div className="alert alert-primary" role="alert">
                      Employee record created
                    </div>
                  )}
                </Modali.Modal>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
