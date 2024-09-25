// src/components/FinePayment.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Ensure this import is correct
import './FinePayment.css'; // Ensure this CSS file is created

function FinePayment() {
  const [finePaid, setFinePaid] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [fineAmount] = useState(50); // Set your fine amount here; adjust as needed
  const [showQRCode, setShowQRCode] = useState(false);
  const hasDueFine = fineAmount > 0; // Logic to check if user has a due fine

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if there is a fine and neither payment nor receipt has been provided
    if (hasDueFine && !finePaid && !receipt) {
      alert('You must either confirm payment or upload a receipt before submitting.');
      return; // Prevent submission
    }

    // Logic to handle payment submission can go here
    alert('Payment details submitted successfully');
  };

  const handleReceiptChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  return (
    <div className="fine-payment-container">
      <h2>Fine Payment</h2>
      <p>Your fine amount: <strong>${fineAmount}</strong></p>
      
      <form onSubmit={handleSubmit}>
        {hasDueFine ? (
          <>
            <div className="section">
              <h3>Make Payment by QR</h3>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="finePaid"
                  checked={finePaid}
                  onChange={(e) => setFinePaid(e.target.checked)}
                />
                <label htmlFor="finePaid">I confirm that I have paid the fine online</label>
              </div>
              {finePaid && <p>Your payment will be processed immediately.</p>}
              <button type="button" onClick={() => setShowQRCode(true)}>Generate QR Code</button>
              {showQRCode && (
                <div className="qr-code">
                  <h4>Scan to Pay</h4>
                  <QRCodeCanvas value={`Payment of $${fineAmount}`} />
                </div>
              )}
            </div>
            <div className="section">
              <h3>Upload Receipt</h3>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleReceiptChange}
              />
              {receipt && <p>Uploaded: {receipt.name}</p>}
            </div>
          </>
        ) : (
          <div className="section">
            <h3>No Dues</h3>
            <p>You have no pending fines. Thank you!</p>
            <h4>Upload Receipt</h4>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleReceiptChange}
            />
            {receipt && <p>Uploaded: {receipt.name}</p>}
          </div>
        )}

        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
    </div>
  );
}

export default FinePayment;
