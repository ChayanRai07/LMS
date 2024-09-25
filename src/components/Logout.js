import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication data (if applicable)
    localStorage.removeItem('user'); // Assuming user data is stored in localStorage
    // Redirect to the login page
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Logout;
