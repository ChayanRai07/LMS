// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Navigate based on role if needed, currently navigating to dashboard
      navigate('/dashboard');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>

      <div className="registration-link">
        <p>Don't have an account?</p>
        <Link to="/register" className="register-button">Register Here</Link>
      </div>
    </div>
  );
}

export default Login;
