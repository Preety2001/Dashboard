import React, { useState, useEffect, useRef } from 'react';
import logo from '../logo-white.png'; // Adjust path based on the location of your logo file


const Header = ({ onLogout, onViewProfile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Dropdown Menu Section */}
      <div className="header-dropdown" ref={dropdownRef}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          &#9776; {/* Hamburger icon */}
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={onViewProfile}>
              Profile
            </button>
            <button className="dropdown-item" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
