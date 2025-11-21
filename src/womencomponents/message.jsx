import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import './message.css'
function Message() {
  const [items, setItems] = useState([]);
  const [replyData, setReplyData] = useState({});
  const [loading, setLoading] = useState(false);
  const [messagesent, setmessagesent] = useState(false);

  // useEffect(() => {
  //   fetch("http://localhost:3000/reply-email")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched items:", data);
  //       setItems(data);
  //     })
  //     .catch((err) => console.error("Fetch error:", err));
  // }, []);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/usermessages?page=${page}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched items:", data);
        setItems(data.totalproduct);
        setTotalPages(data.totalPage);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [page]);

  const handleReplyChange = (id, field, value) => {
    setReplyData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const sendReply = async (email, id) => {
    const subject = replyData[id]?.subject || "";
    const message = replyData[id]?.message || "";

    if (!email) {
      alert("No recipient email found!");
      return;
    }

    if (!subject || !message) {
      alert("Please fill in both subject and message.");
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/reply-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject,
          message
        }),
      });

      const data = await res.json();
      setmessagesent(true);
      setTimeout(() => {
        setmessagesent(false);
      }, 5000);
      alert(data.message);
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send email.");
    } finally {
      setLoading(false);
      setReplyData({});
    }
  };

  return (
    <>
      <Header />
      <div className="message-container">
        {messagesent && (
          <div className="order-popup">
            <p>Your message to user has been sent successfully!</p>
          </div>
        )}
        <h2>Messages From Users</h2>

        {items.length > 0 ? (
          items.map((item) => (
            <div key={item._id} className="message-card">
              <p><strong>From:</strong> {item.email}</p>
              <p><strong>Subject:</strong> {item.subject}</p>
              <p><strong>Message:</strong> {item.message}</p>

              <input
                type="text"
                placeholder="Reply Subject"
                value={replyData[item._id]?.subject || ""}
                onChange={(e) => handleReplyChange(item._id, "subject", e.target.value)}
              />
              <textarea
                placeholder="Reply Message"
                value={replyData[item._id]?.message || ""}
                onChange={(e) => handleReplyChange(item._id, "message", e.target.value)}
              />
              <button onClick={() => sendReply(item.email, item._id)} disabled={loading}>
                {loading ? "Replying..." : "Send Reply"}</button>
            </div>
          ))
        ) : (
          <p>No messages to display</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
        <span>
          Page <span className="active-page">{page}</span> of {totalPages}
        </span>

        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>
      <Footer />
    </>
  );
}

export default Message;
