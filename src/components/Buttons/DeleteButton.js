import React, { useState } from "react";
import services from "../../services/services";
import Modali, { useModali } from "modali";

export default function DeleteButton(employee) {
  const [message, setMessage] = useState("");

  const deleteEmployees = () => {
    const employeeUpdate = {
      is_delete: 1,
    };
    services
      .remove(employee.employee.id, employeeUpdate)
      .then((response) => {
        console.log(response.data);
        setMessage("Data berhasil dihapus");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
    title: "Konfirmasi",
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleCompleteModal()}
      />,
      <Modali.Button
        label="Delete"
        isStyleDestructive
        onClick={() => deleteEmployees()}
      />,
    ],
  });

  return (
    <>
      <button className="btn btn-danger btn-md" onClick={toggleCompleteModal}>
        <i class="fas fa-trash"></i>
      </button>
      <Modali.Modal {...completeModal}>
        <div className="container">
          <p>Apakah anda akan menghapus data ini?</p>
          {message !== "" && (
            <div className="alert alert-primary" role="alert">
              {message}
            </div>
          )}
        </div>
      </Modali.Modal>
    </>
  );
}
