import { useState, useEffect } from "react";
import HeaderUser from "./headeruser";
import FooterUser from "./footeruser";
import './contact.css'
function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [adminReplies, setAdminReplies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messagesent, setmessagesent] = useState(false);


  // useEffect(() => {
  //   const email = sessionStorage.getItem("userEmail");
  //   if (email) {
  //     setUserEmail(email);

  //     fetch("http://localhost:3000/reply-email")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const filtered = data.filter((reply) => reply.email === email);
  //         setAdminReplies(filtered);
  //       })
  //       .catch((err) => console.error("Fetch error:", err));
  //   }
  // }, []);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
      fetch(`http://localhost:3000/admin-replies?page=${page}&limit=5&email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched items:", data);
          setAdminReplies(data.totalproduct);
          setTotalPages(data.totalPage);
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [page]);

  const sendEmail = async () => {
    if (!subject || !message) {
      alert("Please fill in both subject and message.");
      return;
    }

    if (loading) return;
    setLoading(true);
    setmessagesent(true);
    setTimeout(() => {
      setmessagesent(false);
    }, 5000);

    const res = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        subject,
        message,
      }),
    });

    const data = await res.json();
    alert(data.message);

    setSubject("");
    setMessage("");
    setShowMessage(false);
  };

  return (
    <>
      <HeaderUser />
      <div className="contact-container">
        {messagesent && (
          <div className="order-popup">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
        <h2>Contact Admin</h2>
        <p>From: {userEmail || "Not logged in"}</p>

        <button onClick={() => setShowMessage((prev) => !prev)}>
          {showMessage ? "Hide Message Form" : "Write a Message"}
        </button>

        {showMessage && (
          <div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendEmail} disabled={loading}>
              {loading ? "Sending..." : "Send to Admin"}
            </button>

          </div>
        )}

        <h3>Admin Replies</h3>
        {adminReplies.length > 0 ? (
          adminReplies.map((reply, index) => (
            <div key={index} className="reply-box">
              <p><strong>Subject: </strong> {reply.subject}</p>
              <p><strong>Message: </strong>{reply.message}</p>
              <small>{new Date(reply.createdAt).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>No replies yet.</p>
        )}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
        <span>
          Page <span className="active-page">{page}</span> of {totalPages}
        </span>

        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>Next</button>
      </div>
      <FooterUser />
    </>
  );
}

export default Contact;
