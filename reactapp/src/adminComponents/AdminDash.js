import React, { useState } from 'react';
import DashboardComp from './DashboardComp';

import Branch from './Branch';
import ProjectTable from './ProjectTable';
import EmpTable from './EmpTable';
import { Route } from 'react-router-dom';

// import CompanyLogo from './CompanyLogo'; // You may need to import your company logo component

function AdminDash() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  const renderMainContent = () => {
    // Render different content based on the selectedNavItem state
    switch (selectedNavItem) {
      case 'dashboard':
        return <Route path='/branch' element={<Branch/>}/>
      case 'branches':
        return <Branch/>;
        case 'projects':
        return <ProjectTable />;
        case 'users':
        return <EmpTable />;
      // Add more cases for each nav item
      default:
        return <DashboardComp />;
    }
  };

  return (
    <div className="card" style={{ height: "100vh" }}>
      <div className="card-header" style={{ height: "5%", display: "flex", justifyContent: "space-between" }}>
        <div>
          Beast Technologies {/* Replace with your company logo component */}
        </div>
        <div>
          Admin Name {/* Replace with the actual admin name */}
        </div>
      </div>
      <div className="card-body row" style={{ height: "90%" }}>
        <div className="col-md-2">
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li onClick={() => handleNavItemClick('dashboard')} style={{ marginBottom: "10px", fontSize: "16px", cursor: "pointer" }}>Dashboard</li>
              <li onClick={() => handleNavItemClick('branches')} style={{ marginBottom: "10px", fontSize: "16px", cursor: "pointer" }}>Branches</li>
              <li onClick={() => handleNavItemClick('projects')} style={{ marginBottom: "10px", fontSize: "16px", cursor: "pointer" }}>Projects</li>
              <li onClick={() => handleNavItemClick('users')} style={{ marginBottom: "10px", fontSize: "16px", cursor: "pointer" }}>Users</li>
              {/* Add more nav items as needed */}
            </ul>
          </nav>
          <button onClick={() => handleNavItemClick('signout')}>Log out</button>
        </div>
        <div className="col-md-10 bg bg-secondary">
          {renderMainContent()}
        </div>
      </div>
      <div className="card-footer" style={{ height: "5%" }}>
        This is the footer
      </div>
    </div>
  );
}

export default AdminDash;
