import React, { useState } from 'react';

function BookReturn() {
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('J.K. Rowling');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState('2024-09-01');
  const [returnDate, setReturnDate] = useState('2024-09-15');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book || !serialNo || !issueDate || !returnDate) {
      alert('All fields are required');
      return;
    }
    alert('Book returned successfully');
  };

  return (
    <div>
      <h2>Return a Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          disabled
        />
        <input
          type="text"
          placeholder="Serial No"
          value={serialNo}
          onChange={(e) => setSerialNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Issue Date"
          value={issueDate}
          disabled
        />
        <input
          type="text"
          placeholder="Return Date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <button type="submit">Return Book</button>
      </form>
    </div>
  );
}

export default BookReturn;
