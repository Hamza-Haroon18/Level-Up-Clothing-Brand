import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "#f4f6f9",
      color: "#333"
    }}>
      <h1 style={{ fontSize: "80px", marginBottom: "10px", color: "#3949ab" }}>404</h1>
      <h2 style={{color:"black"}}>Oops! Page Not Found</h2>
      <p style={{ marginTop: "8px", marginBottom: "20px" }}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" style={{
        background: "linear-gradient(135deg, #3949ab, #1a237e)",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "500"
      }}>
        Go Back Home
      </Link>
    </div>
  );
}
