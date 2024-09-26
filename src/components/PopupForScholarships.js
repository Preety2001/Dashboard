import React, { useState } from 'react';

const PopupForScholarships = ({ scholarship, onClose }) => {
  const [description, setDescription] = useState('');
  const [advertisement, setAdvertisement] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAdvertisementChange = (e) => {
    setAdvertisement(e.target.files[0]);
  };

  const handleSaveChanges = () => {
    // Implement your save logic here
    console.log('Saved Description:', description);
    console.log('Saved Advertisement:', advertisement);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Scholarship {scholarship}</h2>
        <table className="popup-table">
          <tbody>
            <tr>
              <td>Scholarship Description</td>
              <td>
                <textarea
                  value={description}
                  onChange={handleDescriptionChange}
                  rows="4"
                  cols="30"
                  placeholder="Enter description"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Advertisement</td>
              <td>
                <input
                  type="file"
                  onChange={handleAdvertisementChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="popup-actions">
                <button className="btn btn-success" onClick={handleSaveChanges}>
                  Save Changes
                </button>
                <button className="btn btn-secondary" onClick={onClose}>
                  Close
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopupForScholarships;
