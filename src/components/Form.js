import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../services/services";

export default function Form(employee) {
  const [resp, setPositionsData] = useState([]);

  useEffect(() => {
    retrievePositions();
  }, []);

  const retrievePositions = () => {
    services
      .getPositions()
      .then((response) => {
        setPositionsData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Add Data Karyawan</div>

        <div className="card-body">
          <form>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-6 col-form-label">
                Nama
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-6 col-form-label">
                Tanggal Lahir
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                ></input>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-6 col-form-label">
                Jabatan
              </label>
              <div className="col-sm-6">
                <select className="custom-select" id="inputGroupSelect01">
                  <option defaultValue>==Pilih Jabatan==</option>
                  {resp &&
                    resp.map((position, index) => (
                      <option value={position.id} key={index}>{position.name}</option>
                    ))}
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-6 col-form-label">
                NIP
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
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
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      defaultChecked
                    ></input>
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Pria
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    ></input>
                    <label className="form-check-label" htmlFor="gridRadios2">
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
                <button className="btn btn-primary btn-md mr-1">Simpan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
