import React from "react";
import HeaderUser from './headeruser';
import FooterUser from './footeruser';
import "./About.css"; 

function AboutUser() {
  return (
    <>
      <HeaderUser />

      <div className="about-container">

        {/* Hero Section */}
        <section className="hero-section">
          <h1>About Our Brand</h1>
          <p>Crafting fashion that defines your style and personality.</p>
        </section>

        {/* Brand Story */}
        <section className="story-section">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, our brand is dedicated to delivering premium-quality
              clothing that blends comfort, style, and sustainability. Each piece
              is designed to inspire confidence and make you feel your best.
            </p>
          </div>
          <div className="story-image">
            <img src="/image-5.jpg" alt="Fashion" />
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where fashion is more than just clothing — it’s a
            statement. Our mission is to provide timeless designs that elevate your
            everyday wardrobe.
          </p>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <div className="team-card">
              <img src="https://wallup.net/wp-content/uploads/2016/02/20/290059-Gerard_Butler-men-actor-suits-tie-blue_eyes-748x468.jpg" alt="Founder" />
              <h3>Alex Johnson</h3>
              <p>Founder & Designer</p>
            </div>
            <div className="team-card">
              <img src="https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg" alt="Marketing" />
              <h3>Emma Roberts</h3>
              <p>Marketing Lead</p>
            </div>
            <div className="team-card">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/007/421/351/small/confident-male-ceo-in-formal-outfit-has-good-business-reputation-looks-smart-at-work-isolated-over-grey-studio-backgrounf-with-copy-space-for-your-promotion-charismatic-employer-poses-indoor-photo.jpg" alt="Operations" />
              <h3>Michael Lee</h3>
              <p>Operations Manager</p>
            </div>
          </div>
        </section>
      </div>

      <FooterUser />
    </>
  )
}

export default AboutUser;
