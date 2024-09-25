
// src/components/Registration.js
import React, { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [membershipType, setMembershipType] = useState('6'); // default to 6 months

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!name || !email || !phone) {
      alert('All fields are required.');
      return;
    }

    // Perform registration logic (e.g., API call)
    alert(`Registration successful for ${name} with ${membershipType} months membership.`);
    
    // Clear fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setMembershipType('6');
  };

  return (
    <div className="registration">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Membership Type:</label>
          <select
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
          >
            <option value="6">6 months</option>
            <option value="12">1 year</option>
            <option value="24">2 years</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
