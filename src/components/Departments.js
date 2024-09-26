import React, { useState } from 'react';
import PopupForDepartments from './PopupForDepartments'; // Import the correct popup component

const Departments = ({ onBackToDashboard }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    setShowPopup(true); // Show the popup when a department is clicked
  };

  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };

  const departments = [
    'Department 1',
    'Department 2',
    'Department 3',
    'Department 4',
    'Department 5',
    'Department 6',
    'Department 7',
    'Department 8',
    'Department 9',
    'Department 10',
  ];

  return (
    <div className="departments-container">
      <h1>Departments</h1>
      <table className="departments-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>{dept}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleDepartmentClick(dept)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditionally show the popup when a department is clicked */}
      {showPopup && <PopupForDepartments department={selectedDepartment} onClose={closePopup} />}

      {/* Back to Dashboard Button */}
      <button
        className="btn btn-primary back-btn"
        onClick={onBackToDashboard}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <i className="bi bi-arrow-left"></i> Back to Dashboard
      </button>
    </div>
  );
};

export default Departments;
