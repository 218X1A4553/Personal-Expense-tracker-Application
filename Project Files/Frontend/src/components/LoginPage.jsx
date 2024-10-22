import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password }, { withCredentials: true });
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert("Wrong username or password! Please try again");
    }
  };

  return (
    <div className="login-container">
      <h1 className="site-title">Personal Expense Tracker</h1>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login-button" type="submit">Login</button>
      </form>
      <button className="register-button" onClick={() => navigate('/createuser')}>Register</button>
    </div>
  );
}

export default LoginPage;
