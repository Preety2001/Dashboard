// Header.js
import React from 'react';

const Header = ({
  loggedInUser,
  toggleDropdown,
  dropdownVisible,
  handleMouseLeaveDropdown,
  handleViewProfile,
  handleLogout,
}) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <img src="iba.png" alt="Logo" /> {/* Ensure the path is correct */}
        </div>
        <div className="header-title">
          <h1>Sukkur IBA Admin Portal</h1>
        </div>
      </div>
      <div 
        className="header-dropdown" 
        onMouseLeave={handleMouseLeaveDropdown} // Hide the dropdown when mouse leaves
      >
        <button className="dropdown-button" onClick={toggleDropdown}>
          &#x2630; {/* You can replace this with a hamburger icon */}
        </button>
        {dropdownVisible && ( // Show dropdown based on state
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleViewProfile}>Profile</button>
            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
