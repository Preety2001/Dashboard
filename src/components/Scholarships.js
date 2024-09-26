// src/components/Scholarships.js

import React, { useState } from 'react';
import PopupForScholarships from './PopupForScholarships'; // Make sure this file exists

const Scholarships = ({ onBackToDashboard }) => {
  const [showPopup, setShowPopup] = useState(false);
  const scholarships = ['Scholarship 1', 'Scholarship 2', 'Scholarship 3', 'Scholarship 4', 'Scholarship 5'];

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="scholarships-container">
      <h1>Scholarships</h1>
      <table className="scholarships-table">
        <thead>
          <tr>
            <th>Scholarship</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((scholarship, index) => (
            <tr key={index}>
              <td>
                {scholarship} <button onClick={handleShowPopup}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back to Dashboard Button */}
      <button className="btn btn-primary back-btn" onClick={onBackToDashboard}>
        Back to Dashboard
      </button>

      {/* Popup */}
      {showPopup && <PopupForScholarships onClose={handleClosePopup} />}
    </div>
  );
};

export default Scholarships;
