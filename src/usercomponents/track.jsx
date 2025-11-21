import { useState } from 'react';
import './track.css';

function Track() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [matchedOrder, setMatchedOrder] = useState(null);

  const handleTrack = async () => {
    try {
      const res = await fetch("http://localhost:3000/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderNumber, email, mobile })
      });

      if (!res.ok) {
        alert("No order found. Please check your details.");
        setMatchedOrder(null);
        return;
      }

      const data = await res.json();
      setMatchedOrder(data);
    } catch (err) {
      console.error("Error tracking order:", err);
    }
  };

  return (
    <div className="track-container">
      <div className="track-card">
        <h2>Track Your Order</h2>

        <div className="input-group">
          <label>Order Number</label>
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <button className="track-btn" onClick={handleTrack}>
          Track Order
        </button>

        {matchedOrder && (
          <div className="result-card">
            <h3>Order Found 🎉</h3>
            <p><strong>Order Number:</strong> {matchedOrder.orderNumber}</p>
            <p><strong>Email:</strong> {matchedOrder.email}</p>
            <p><strong>Phone:</strong> {matchedOrder.mobile}</p>
            <p><strong>Status:</strong> <span className="status">{matchedOrder.status}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Track;
