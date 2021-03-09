import axios from "axios";

export default axios.create({
  baseURL: "http://employees-crud-backend.test/api",
  headers: {
    "Content-type": "application/json",
  },
});

