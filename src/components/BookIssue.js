import React, { useState } from 'react';

function BookIssue() {
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('J.K. Rowling');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book || !issueDate || !returnDate) {
      alert('All fields are required');
      return;
    }
    alert('Book issued successfully');
  };

  return (
    <div>
      <h2>Issue a Book</h2>
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
          type="date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
        />
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
}

export default BookIssue;
