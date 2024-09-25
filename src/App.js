import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BookIssue from './components/BookIssue';
import BookReturn from './components/BookReturn';
import AddMembership from './components/AddMembership';
import UpdateMembership from './components/UpdateMembership';
import FinePayment from './components/FinePayment';
import Logout from './components/Logout';
import Registration from './components/Registration'; // Import the Registration component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book-issue" element={<BookIssue />} />
          <Route path="/book-return" element={<BookReturn />} />
          <Route path="/add-membership" element={<AddMembership />} />
          <Route path="/update-membership" element={<UpdateMembership />} />
          <Route path="/fine-payment" element={<FinePayment />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} /> {/* Add Registration Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
