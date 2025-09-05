import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      navigate('/home');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="logo.png" alt="Logo" className="login-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p style={{ marginTop: '15px' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#d6002f' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
