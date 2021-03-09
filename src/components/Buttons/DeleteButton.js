import services from "../../services/services";
import Modali, { useModali } from "modali";

export default function DeleteButton(employee) {
  const deleteEmployees = () => {
    const employeeUpdate = {
      is_delete: 1,
    };
    services
      .update(employee.employee.id, employeeUpdate)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
    title: "Are you sure?",
    message: "Deleting this user will be permanent.",
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
        Hapus
      </button>
      <Modali.Modal {...completeModal}></Modali.Modal>
    </>
  );
}
