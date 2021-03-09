import axios from "./axios";

const getAll = () => {
  return axios.get("/employees");
};

const getPositions = () => {
  return axios.get("/positions");
};

const createData = (data) => {
  return axios.post("/employees", data);
};

const update = (id, data) => {
  return axios.put(`/employees/${id}`, data);
};

const remove = (id, data) => {
  return axios.put(`/employees/delete/${id}`, data);
};

export default {
  getAll,
  getPositions,
  createData,
  update,
  remove,
};
