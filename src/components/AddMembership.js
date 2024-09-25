import React, { useState } from 'react';

function AddMembership() {
  const [membership, setMembership] = useState('6 months');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Membership added successfully');
  };

  return (
    <div>
      <h2>Add Membership</h2>
      <form onSubmit={handleSubmit}>
        <select value={membership} onChange={(e) => setMembership(e.target.value)}>
          <option value="6 months">6 months</option>
          <option value="1 year">1 year</option>
          <option value="2 years">2 years</option>
        </select>
        <button type="submit">Add Membership</button>
      </form>
    </div>
  );
}

export default AddMembership;
