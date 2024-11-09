import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import FeesInfo from './components/FeesInfo';
import Departments from './components/Departments';
import Scholarships from './components/Scholarships';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [viewFeesInfo, setViewFeesInfo] = useState(false);
  const [viewDepartments, setViewDepartments] = useState(false);
  const [viewScholarships, setViewScholarships] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // New state for controlling dropdown visibility

  const [loggedInUser, setLoggedInUser] = useState({
    adminName: '',
    fullName: '',
    email: '',
    adminID: ''
  });

  const handleLoginSuccess = (name, id, emailAddress, fullAdminName) => {
    setIsLoggedIn(true);
    setLoggedInUser({
      adminName: name,
      fullName: fullAdminName,
      email: emailAddress,
      adminID: id
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setViewScholarships(false);
    setDropdownVisible(false); // Hide dropdown on logout
  };

  const handleViewProfile = () => {
    setViewProfile(true);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setViewScholarships(false);
    setDropdownVisible(false); // Hide dropdown when navigating
  };

  const handleViewFeesInfo = () => {
    setViewFeesInfo(true);
    setViewProfile(false);
    setViewDepartments(false);
    setViewScholarships(false);
    setDropdownVisible(false); // Hide dropdown when navigating
  };

  const handleViewDepartments = () => {
    setViewDepartments(true);
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewScholarships(false);
    setDropdownVisible(false); // Hide dropdown when navigating
  };

  const handleViewScholarships = () => {
    setViewScholarships(true);
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setDropdownVisible(false); // Hide dropdown when navigating
  };

  const handleBackToDashboard = () => {
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setViewScholarships(false);
  };

  // Toggle dropdown visibility on click
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Hide dropdown when the mouse leaves the dropdown area
  const handleMouseLeaveDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="App">
      {/* Only show the header if the user is logged in */}
      {isLoggedIn && (
        <header className="header">
          <div className="header-logo">
            <img src="iba.png" alt="Logooooooo" /> {/* Ensure the path is correct */}
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
      )}

      {/* Content rendering based on conditions */}
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : viewProfile ? (
        <Profile
          adminName={loggedInUser.adminName}
          fullName={loggedInUser.fullName}
          email={loggedInUser.email}
          adminID={loggedInUser.adminID}
          onBackToDashboard={handleBackToDashboard}
        />
      ) : viewFeesInfo ? (
        <FeesInfo onBackToDashboard={handleBackToDashboard} />
      ) : viewDepartments ? (
        <Departments onBackToDashboard={handleBackToDashboard} />
      ) : viewScholarships ? (
        <Scholarships onBackToDashboard={handleBackToDashboard} />
      ) : (
        <Dashboard 
          handleLogout={handleLogout} 
          onViewProfile={handleViewProfile} 
          onViewFeesInfo={handleViewFeesInfo} 
          onViewDepartments={handleViewDepartments} 
          onViewScholarships={handleViewScholarships} 
        />
      )}
    </div>
  );
};

export default App;
