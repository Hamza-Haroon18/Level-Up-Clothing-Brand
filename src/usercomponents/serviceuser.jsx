import React from "react";
import HeaderUser from "./headeruser";
import FooterUser from "./footeruser";
import "./service.css";

function TermsUser() {
  return (
    <>
      <HeaderUser />

      <section className="terms-hero">
        <div className="hero-content">
          <h1>Terms & Conditions</h1>
          <p>Our policies ensure a smooth and transparent shopping experience.</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="terms-section">
          <h2>1. General</h2>
          <p>
            By accessing or using our website, you agree to comply with these
            terms and conditions. Please read them carefully.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Orders & Payment</h2>
          <p>
            All orders are subject to product availability. Payments are secure
            and processed through our trusted payment gateways.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. Shipping & Delivery</h2>
          <p>
            Shipping times are estimated and may vary depending on your location.
            We are not responsible for delays caused by carriers or customs.
          </p>
        </div>

        <div className="terms-section">
          <h2>4. Returns & Exchanges</h2>
          <p>
            Returns are accepted within 30 days of purchase. Products must be
            unused, with original tags and packaging.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Privacy & Security</h2>
          <p>
            Your personal information is handled securely and in accordance with
            our Privacy Policy.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Liability</h2>
          <p>
            We are not liable for any indirect or consequential damages arising
            from the use of our website or products.
          </p>
        </div>
      </section>

      <FooterUser />
    </>
  );
}

export default TermsUser;
