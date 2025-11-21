import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./location.css";

function Store() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="store-hero">
        <div className="hero-content">
          <h1>Our Stores</h1>
          <p>Visit our stores and experience premium fashion in person.</p>
        </div>
      </section>

      {/* Store Locations */}
      <section className="store-list">
        <div className="store-card">
          <h2>New York</h2>
          <p>123 Fashion Ave, New York, NY 10001</p>
          <p>Mon - Sat: 10am - 8pm</p>
          <p>Sun: 11am - 6pm</p>
        </div>

        <div className="store-card">
          <h2>Los Angeles</h2>
          <p>456 Style St, Los Angeles, CA 90001</p>
          <p>Mon - Sat: 10am - 8pm</p>
          <p>Sun: 11am - 6pm</p>
        </div>

        <div className="store-card">
          <h2>Chicago</h2>
          <p>789 Trendy Blvd, Chicago, IL 60601</p>
          <p>Mon - Sat: 10am - 8pm</p>
          <p>Sun: 11am - 6pm</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="store-map">
        <h2>Find Us on the Map</h2>
        <iframe
          title="Store Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.639563041986!2d-73.98513068459378!3d40.7588961793266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854a8e58ffb%3A0x5a88efb3a9f4c2e3!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1691981386000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}

export default Store;
