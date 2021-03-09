
import { Link } from "react-router-dom";
import DeleteButton from "./Buttons/DeleteButton";

export default function Table({ employee }) {
  const isGender = (employee.gender = 1);
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.birth_date}</td>
      <td>{employee.positionName}</td>
      <td>{employee.id_number}</td>
      {isGender ? <td>Pria</td> : <td>Wanita</td>}
      <td>
        <Link to="/Form">
          <button className="btn btn-primary btn-md mr-1">Edit</button>
        </Link>

        <DeleteButton employee={employee}></DeleteButton>
      </td>
    </tr>
  );
}
