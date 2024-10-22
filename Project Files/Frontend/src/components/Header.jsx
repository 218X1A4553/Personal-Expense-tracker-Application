import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="main-header">
      <Link className="header-link" to="/home">Home</Link>
      <Link className="header-link" to="/income">Add Income</Link>
      <Link className="header-link" to="/expense">Add Expense</Link>
      <Link className="header-link" to="/transactions">View Transactions</Link>
      <button className="header-link logout-button" onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Header;
