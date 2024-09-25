// src/components/UpdateMembership.js
import React, { useState } from 'react';

const UpdateMembership = () => {
  const [membershipNumber, setMembershipNumber] = useState('');
  const [extendMembership, setExtendMembership] = useState('6'); // default extension to 6 months
  const [cancelMembership, setCancelMembership] = useState(false);
  const [action, setAction] = useState('extend'); // default action to extend

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!membershipNumber) {
      alert('Membership Number is required.');
      return;
    }

    if (action === 'extend') {
      alert(`Membership extended for ${extendMembership} months.`);
      // Implement API call or logic to extend membership
    } else if (action === 'cancel') {
      alert('Membership has been canceled.');
      // Implement API call or logic to cancel membership
    }
  };

  return (
    <div className="update-membership">
      <h2>Update Membership</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Membership Number:</label>
          <input
            type="text"
            value={membershipNumber}
            onChange={(e) => setMembershipNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Select Action:</label>
          <select onChange={(e) => setAction(e.target.value)} value={action}>
            <option value="extend">Extend Membership</option>
            <option value="cancel">Cancel Membership</option>
          </select>
        </div>

        {action === 'extend' && (
          <div>
            <label>Extend Membership By:</label>
            <select
              value={extendMembership}
              onChange={(e) => setExtendMembership(e.target.value)}
            >
              <option value="6">6 months</option>
              <option value="12">1 year</option>
              <option value="24">2 years</option>
            </select>
          </div>
        )}

        {action === 'cancel' && (
          <div>
            <p>Are you sure you want to cancel your membership?</p>
          </div>
        )}

        <button type="submit">
          {action === 'extend' ? 'Extend Membership' : 'Cancel Membership'}
        </button>
      </form>
    </div>
  );
};

export default UpdateMembership;
