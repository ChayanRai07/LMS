import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for styles

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Library Management Dashboard</h2>
      <nav className="dashboard-nav">
        <ul className="dashboard-menu">
          <li className="menu-item"><Link to="/book-issue">📚 Issue Book</Link></li>
          <li className="menu-item"><Link to="/book-return">🔙 Return Book</Link></li>
          <li className="menu-item"><Link to="/add-membership">➕ Add Membership</Link></li>
          <li className="menu-item"><Link to="/update-membership">🔄 Update Membership</Link></li>
          <li className="menu-item"><Link to="/fine-payment">💰 Fine Payment</Link></li>
        </ul>
      </nav>
      <Link to="/logout" className="logout-link">🚪 Logout</Link> {/* Moved logout link here */}
    </div>
  );
}

export default Dashboard;
