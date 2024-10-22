import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';
import TransactionsPage from './components/TransactionsPage';
import TransactionEditPage from './components/TransactionEditPage';
import CreateUserPage from './components/CreateUserPage';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && location.pathname !== '/createuser' && <Header />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expense" element={<ExpensePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/edit/:id" element={<TransactionEditPage />} />
        <Route path="/createuser" element={<CreateUserPage />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
