import React, { useState } from 'react';
import FeesInfo from './FeesInfo';
import Departments from './Departments'; // Import the Departments component
import Scholarships from './Scholarships'; // Import the Scholarships component
// import Header from './header';

const dashboardData = [
  {
    key: 1,
    title: "View Profile",
    icon: <i className="bi bi-person-fill"></i>, // Bootstrap Icon
  },
  {
    key: 2,
    title: "Fees Info",
    icon: <i className="bi bi-cash"></i>, // Bootstrap Icon for Fees
  },
  {
    key: 3,
    title: "Departments",
    icon: <i className="bi bi-building"></i>, // Bootstrap Icon for Departments
  },
  {
    key: 4,
    title: "Scholarships",
    icon: <i className="bi bi-award"></i>, // Bootstrap Icon for Scholarships
  },
  {
    key: 5,
    title: "Events",
    icon: <i className="bi bi-calendar-event"></i>, // Bootstrap Icon for Events
  },
  {
    key: 6,
    title: "Timeline",
    icon: <i className="bi bi-clock-history"></i>, // Bootstrap Icon for Timeline
  },
];

const Dashboard = ({ handleLogout, onViewProfile, onViewFeesInfo, onViewDepartments, onViewScholarships }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (title) => {
    if (title === "View Profile") {
      onViewProfile();
    } else if (title === "Fees Info") {
      onViewFeesInfo();
    } else if (title === "Departments") {
      setSelectedSection("Departments");
    } else if (title === "Scholarships") {
      setSelectedSection("Scholarships");
    } else {
      setSelectedSection(title);
    }
  };

  const handleBackToDashboard = () => {
    setSelectedSection(null);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">DASHBOARD</h1>
      {selectedSection ? (
        // Render the selected section
        selectedSection === "FeesInfo" ? (
          <FeesInfo onBackToDashboard={handleBackToDashboard} />
        ) : selectedSection === "Departments" ? (
          <Departments onBackToDashboard={handleBackToDashboard} />
        ) : selectedSection === "Scholarships" ? (
          <Scholarships onBackToDashboard={handleBackToDashboard} />
        ) : (
          <div>Content for {selectedSection} goes here.</div>
        )
      ) : (
        <div className="skills">
          <div className="items">
            {dashboardData.map((data) => (
              <div key={data.key} className="item">
                {/* Display the icon */}
                <div className="icon-container">{data.icon}</div>
                <h5 className="card-title">{data.title}</h5>
                <button
                  className="btn btn-warning"
                  onClick={() => handleSectionClick(data.title)}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
