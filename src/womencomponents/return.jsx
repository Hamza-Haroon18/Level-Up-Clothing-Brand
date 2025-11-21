import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./return.css";

function ReturnsPolicy() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="returns-hero">
        <div className="hero-content">
          <h1>Returns & Exchanges</h1>
          <p>Easy, fast, and hassle-free returns for all your orders.</p>
        </div>
      </section>

      {/* Returns & Exchange Content */}
      <section className="returns-content">
        <div className="returns-section">
          <h2>1. Eligibility</h2>
          <p>
            Returns are accepted within 30 days of delivery. Products must be unused, with original tags and packaging. Sale items may have different return policies — please check at checkout.
          </p>
        </div>

        <div className="returns-section">
          <h2>2. How to Return</h2>
          <p>
            Contact our customer support team to initiate a return. You will receive a return shipping label and instructions on how to send the item back.
          </p>
        </div>

        <div className="returns-section">
          <h2>3. Refunds</h2>
          <p>
            Once the returned item is received and inspected, refunds will be processed within 5-7 business days to the original payment method.
          </p>
        </div>

        <div className="returns-section">
          <h2>4. Exchanges</h2>
          <p>
            If you wish to exchange an item for a different size or color, please mention this when initiating the return. Exchanges are subject to product availability.
          </p>
        </div>

        <div className="returns-section">
          <h2>5. Non-Returnable Items</h2>
          <p>
            Gift cards, final sale items, and personalized products cannot be returned or exchanged.
          </p>
        </div>

        <div className="returns-section">
          <h2>6. Shipping Costs</h2>
          <p>
            Return shipping costs may apply unless the item was defective or incorrectly shipped. Original shipping fees are non-refundable.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ReturnsPolicy;
