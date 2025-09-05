import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const [name, setName] = useState('Sudhan');
  const [email, setEmail] = useState('sudhan@gmail.com');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();  

  const handleSave = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleLogout = () => {
    navigate('/');  
  };

  return (
    <div className="settings-page">
      <h1>⚙️ Settings</h1>
      <form onSubmit={handleSave} className="settings-form">
        <label>
          Full Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          New Password
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" style={{ background: 'green' }}>
          Save Changes
        </button>
        {success && <p className="success-msg">Settings saved successfully </p>}
        <button type="button" onClick={handleLogout} style={{ background: 'red' }}>
          LOG OUT
        </button>
      </form>
    </div>
  );
}

export default Settings;
