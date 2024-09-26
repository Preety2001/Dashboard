import React, { useState } from 'react';

const PopupForDepartments = ({ department, onClose }) => {
  const [summary, setSummary] = useState('');
  const [schema, setSchema] = useState(null);
  const [importantDay, setImportantDay] = useState('');

  const handleSummaryChange = (e) => setSummary(e.target.value);
  const handleSchemaChange = (e) => setSchema(e.target.files[0]);
  const handleImportantDayChange = (e) => setImportantDay(e.target.value);

  const handleSaveChanges = () => {
    // Handle saving changes here
    console.log("Summary:", summary);
    console.log("Schema:", schema ? schema.name : 'No file uploaded');
    console.log("Important Day:", importantDay);
    // Implement save logic
    alert('Changes saved successfully!');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Edit Department: {department}</h2>
        <table className="popup-table">
          <tbody>
            {/* Row 1: Summary */}
            <tr>
              <td>Summary</td>
              <td>
                <textarea
                  value={summary}
                  onChange={handleSummaryChange}
                  placeholder="Enter summary"
                  rows="2"
                  maxLength={100} // Adjust size as needed
                />
              </td>
            </tr>

            {/* Row 2: Schema (File upload) */}
            <tr>
              <td>Schema</td>
              <td>
                <input type="file" onChange={handleSchemaChange} />
              </td>
            </tr>

            {/* Row 3: Important Days (Dropdown) */}
            <tr>
              <td>Important Days</td>
              <td>
                <select value={importantDay} onChange={handleImportantDayChange}>
                  <option value="">Select a day</option>
                  <option value="Day 1">Day 1</option>
                  <option value="Day 2">Day 2</option>
                  <option value="Day 3">Day 3</option>
                </select>
              </td>
            </tr>

            {/* Row 4: Photos */}
            <tr>
              <td>Photos</td>
              <td colSpan="2">
                <input type="file" />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Row 5: Save and Close */}
        <div className="popup-actions">
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

export default PopupForDepartments;
