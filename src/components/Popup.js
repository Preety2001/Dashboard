import React, { useState } from 'react';

const Popup = ({ onClose }) => {
  const [admissionFees, setAdmissionFees] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,7}$/.test(value)) {
      setAdmissionFees(value);
    }
  };

  const handleSaveChanges = () => {
    // Implement your save logic here
    console.log('Saved Admission Fees:', admissionFees);
    alert('Changes saved successfully!');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Admission Fees</h2>

        <input
          type="text"
          value={admissionFees}
          onChange={handleChange}
          maxLength={7}
          placeholder="Enter fees"
          className="admission-fees-input"
          style={{ width: '100px', textAlign: 'center' }}
        />

        <div className="popup-buttons" style={{ marginTop: '20px' }}>
          <button className="btn btn-success" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
