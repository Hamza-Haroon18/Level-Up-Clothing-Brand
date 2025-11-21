import { useLocation, Link } from "react-router-dom";
import './final.css'

function Final() {
    const location = useLocation();
    const orderNumber = location.state?.orderNumber || "N/A";

    return (
        <div className="final-page">
            <h1>🎉 Thank You for Your Order!</h1>
            <p>Your order has been placed successfully.</p>
            <h2>Order Number: <span style={{ color: "#ff6f61" }}>{orderNumber}</span></h2>

            <p>We’ll send a confirmation email with your order details shortly.</p>

            <Link to="/" className="back-home">Continue Shopping</Link>
        </div>
    );
}

export default Final;
