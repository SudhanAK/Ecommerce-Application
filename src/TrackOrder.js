import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    if (orderId.trim()) {
       setStatus(`Your Order #${orderId} is currently being shipped.`);
    } else {
      setStatus("⚠️ Please enter a valid Order ID.");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const boxStyle = {
    background: "#fff",
    padding: "40px 30px",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    transition: "transform 0.2s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#a90024",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
    transition: "background 0.3s ease",
  };

  const homeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#444",
  };

  const statusStyle = {
    marginTop: "15px",
    marginBottom: "10px",
    color: "#333",
    fontSize: "15px",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ marginBottom: "20px", color: "#a90024" }}>
            Track Your Order
        </h2>

        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleTrack} style={buttonStyle}>
          Track
        </button>

        <div style={statusStyle}>{status}<br></br></div>

        <button onClick={() => navigate("/home")} style={homeButtonStyle}>
          ⬅ Go to Home
        </button>
      </div>
    </div>
  );
}

export default TrackOrder;
