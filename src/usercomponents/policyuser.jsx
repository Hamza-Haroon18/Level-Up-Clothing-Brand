import React from "react";
import HeaderUser from "./headeruser";
import FooterUser from "./footeruser";
import "./Policy.css";

function PolicyUser() {
  return (
    <>
      <HeaderUser />

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>We value your privacy and are committed to protecting your personal data.</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-content">
        <div className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and shipping information when you place an order or subscribe to our newsletter.
          </p>
        </div>

        <div className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to process orders, provide customer support, improve our website, and send promotional offers (with your consent).
          </p>
        </div>

        <div className="privacy-section">
          <h2>3. Data Security</h2>
          <p>
            We implement strict security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        <div className="privacy-section">
          <h2>4. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience, analyze website traffic, and personalize content.
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. Third-Party Services</h2>
          <p>
            We may share your information with trusted third-party service providers for order fulfillment, payment processing, or marketing purposes.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>
            You can request access to, correction, or deletion of your personal information. Contact us at any time for privacy inquiries.
          </p>
        </div>
      </section>

      <FooterUser />
    </>
  );
}

export default PolicyUser;
