import React from 'react';

const MainLayout = ({ showHeading, children }) => {
  return (
    <div>
      {showHeading && <h1 className="dashboard-title">DASHBOARD</h1>}
      {children}
    </div>
  );
};

export default MainLayout;
