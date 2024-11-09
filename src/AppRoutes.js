import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import FeesInfo from './components/FeesInfo';
import Departments from './components/Departments';
import Scholarships from './components/Scholarships';

const AppRoutes = ({ isLoggedIn, handleLoginSuccess, loggedInUser }) => {
  return (
    <Routes>
      {/* Redirect to Dashboard if already logged in */}
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginForm onLoginSuccess={handleLoginSuccess} />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/profile" element={isLoggedIn ? <Profile loggedInUser={loggedInUser} /> : <Navigate to="/" />} />
      <Route path="/fees-info" element={isLoggedIn ? <FeesInfo /> : <Navigate to="/" />} />
      <Route path="/departments" element={isLoggedIn ? <Departments /> : <Navigate to="/" />} />
      <Route path="/scholarships" element={isLoggedIn ? <Scholarships /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
