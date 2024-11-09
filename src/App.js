import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import FeesInfo from './components/FeesInfo';
import Departments from './components/Departments';
import Scholarships from './components/Scholarships';
import Header from './components/Header'; // Import the Header component


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [viewFeesInfo, setViewFeesInfo] = useState(false);
  const [viewDepartments, setViewDepartments] = useState(false);
  const [viewScholarships, setViewScholarships] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
    setDropdownVisible(false);
  };

  const handleViewProfile = () => {
    setViewProfile(true);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setViewScholarships(false);
    setDropdownVisible(false);
  };

  const handleViewFeesInfo = () => {
    setViewFeesInfo(true);
    setViewProfile(false);
    setViewDepartments(false);
    setViewScholarships(false);
    setDropdownVisible(false);
  };

  const handleViewDepartments = () => {
    setViewDepartments(true);
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewScholarships(false);
    setDropdownVisible(false);
  };

  const handleViewScholarships = () => {
    setViewScholarships(true);
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setDropdownVisible(false);
  };

  const handleBackToDashboard = () => {
    setViewProfile(false);
    setViewFeesInfo(false);
    setViewDepartments(false);
    setViewScholarships(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseLeaveDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="App">
      {/* Only show the header if the user is logged in */}
      {isLoggedIn && (
        <Header 
          loggedInUser={loggedInUser}
          toggleDropdown={toggleDropdown}
          dropdownVisible={dropdownVisible}
          handleMouseLeaveDropdown={handleMouseLeaveDropdown}
          handleViewProfile={handleViewProfile}
          handleLogout={handleLogout}
        />
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
