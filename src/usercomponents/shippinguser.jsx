import React from "react";
import HeaderUser from "./headeruser";
import FooterUser from "./footeruser";
import "./shipping.css";

function ShippingUser() {
  return (
    <>
      <HeaderUser />

      <section className="shipping-hero">
        <div className="hero-content">
          <h1>Shipping & Delivery</h1>
          <p>Fast, reliable, and hassle-free delivery for all your orders.</p>
        </div>
      </section>

      <section className="shipping-details">
        <div className="shipping-card">
          <h2>Standard Shipping</h2>
          <p>
            Enjoy free standard shipping on all orders over $50. Delivery time:
            3-7 business days.
          </p>
        </div>

        <div className="shipping-card">
          <h2>Express Shipping</h2>
          <p>
            Need it fast? Choose express shipping at checkout. Delivery time:
            1-3 business days.
          </p>
        </div>

        <div className="shipping-card">
          <h2>International Shipping</h2>
          <p>
            We ship worldwide! Delivery times vary by location. Customs fees may
            apply.
          </p>
        </div>
      </section>

      <section className="shipping-policies">
        <h2>Returns & Exchanges</h2>
        <p>
          Changed your mind? No problem! You can return or exchange items within
          30 days of delivery. Items must be unused and in original packaging.
        </p>
      </section>

      <FooterUser />
    </>
  );
}

export default ShippingUser;
