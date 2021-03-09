import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import services from "../services/services";
import Table from "./Table";
import AddButton from "./Buttons/AddButton";

function Home() {
  const [resp, setEmployeesData] = useState([]);

  useEffect(() => {
    retrieveEmployees();
  }, []);

  const retrieveEmployees = () => {
    services
      .getAll()
      .then((response) => {
        setEmployeesData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="Home">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Ilyas Abduttawab</span>
      </nav>

      <div className="container">
        <Link to="/Form">
          <AddButton></AddButton>
        </Link>

        <div className="card">
          <div className="card-header">List Karyawan</div>

          <div className="card-body">
            <table
              id="tableEmployees"
              className="table"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Tanggal Lahir</th>
                  <th>Jabatan</th>
                  <th>NIP</th>
                  <th>Jenis Kelamin</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {resp &&
                    resp.map((employee, index) => (
                      <Table employee={employee} key={index} />
                    ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
