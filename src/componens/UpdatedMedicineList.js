import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa"; // Import FaPlus and FaTrash icons from react-icons/fa
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./UpdatedMedicineList.css"; // Import CSS file for styling

function UpdatedMedicineList() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [medicines, setMedicines] = useState(state ? state.medicines || [] : []);

  const handleDelete = (index) => {
    const updatedMedicines = [...medicines];
    updatedMedicines.splice(index, 1);
    setMedicines(updatedMedicines);
  };

  const handleAddMedicine = () => {
    navigate("/medicinelists"); // Navigate to MedicineLists.js page
  };

  return (
    <div>
      <div className="medicine-header">
        <h2>Updated Medicine List</h2>
        <FaPlus className="plus-sign" onClick={handleAddMedicine} /> {/* Add onClick event to handleAddMedicine */}
      </div>
      <table className="medicine-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th> {/* New column for delete option */}
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.company}</td>
              <td>{medicine.medicineName}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.price}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(index)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpdatedMedicineList;