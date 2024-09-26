import React from 'react';

const Profile = ({ adminName, fullName, email, adminID, onBackToDashboard }) => {
  return (
    <div className="profile-container">
      {/* First section for Admin's Name, Admin ID, and Profile Picture */}
      <div className="profile-card" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: '20px' }}>
        {/* Profile Picture Icon */}
        <div className="profile-icon">
          <i className="bi bi-person-circle" style={{ fontSize: '100px' }}></i>
        </div>

        {/* Admin Name and Admin ID */}
        <div className="profile-info">
          <h2>{adminName}</h2>
          <h4>Admin ID: {adminID}</h4>
        </div>
      </div>

      {/* Second section for Full Name, Email, and Admin ID */}
      <div className="profile-details" style={{ marginTop: '20px', padding: '10px' }}>
        <div>
          <h3>Full Name:</h3>
          <p>{fullName}</p>
        </div>
        
        <div>
          <h3>Email:</h3>
          <p>{email}</p>
        </div>
        
        <div>
          <h3>Admin ID:</h3>
          <p>{adminID}</p>
        </div>
      </div>

      {/* Back to Dashboard Button */}
      <button 
        className="btn btn-primary back-btn" 
        onClick={onBackToDashboard} 
        style={{ position: 'fixed', bottom: '20px', right: '20px', borderRadius: '50%', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <i className="bi bi-arrow-left"></i> Back to Dashboard
      </button>
    </div>
  );
};

export default Profile;
