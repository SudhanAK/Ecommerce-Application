import React, { useState } from 'react';

function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const handleTrack = () => {
    if (orderId.trim()) {
      // You can replace this with real API logic
      setStatus(` Order #${orderId} is currently being shipped.`);
    } else {
      setStatus('Please enter a valid Order ID.');
    }
  };

  const containerStyle = {
    height: '100vh',
    background: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const boxStyle = {
    background: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    width: '350px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#a90024',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const statusStyle = {
    marginTop: '20px',
    color: '#333',
    fontSize: '15px',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2> Track Your Order</h2>
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleTrack} style={buttonStyle}>Track</button>
        <div style={statusStyle}>{status}</div>
      </div>
    </div>
  );
}

export default TrackOrder;
