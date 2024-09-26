import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component

const FeesInfo = ({ onBackToDashboard }) => {
  const [showPopup, setShowPopup] = useState(false);

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

  const handleDepartmentClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fees-info-container">
      <h1>Fees Information</h1>
      <table className="fees-info-table">
        <thead>
          <tr>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>
                <button onClick={handleDepartmentClick}>
                  {dept}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back to Dashboard Button */}
      <button 
        className="btn btn-primary back-btn" 
        onClick={onBackToDashboard} 
        style={{ position: 'fixed', bottom: '20px', right: '20px', borderRadius: '50%', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="bi bi-arrow-left"></i> Back to Dashboard
      </button>

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default FeesInfo;
