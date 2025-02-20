import React from "react";
import PageBanner from "../Shared/PageBanner"; // Import Page Banner if used
import "./About.css"
import { faDumbbell, faRunning, faShoppingBasket, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutUs() {
  return (
    <div id="wrapper" className="container">

      <PageBanner pageName="About Us" />

      <section className="main-content">
        <div className="text-center">
          <h1 className="section-title">
            <FontAwesomeIcon icon={faDumbbell} /> About <span className="highlight">G-STYLE</span>
          </h1>
          <p>
            Welcome to <strong>G-STYLE</strong> – your ultimate destination for high-quality sportswear, fitness gear, and combat sports equipment.
            Our mission is to empower athletes and fitness enthusiasts with <span className="highlight">top-tier gear</span> that enhances both performance and style.
          </p>
        </div>

        <hr />

        {/* Our Story */}
        <div className="row">
          <div className="text-center">
            <h3>
              <FontAwesomeIcon icon={faRunning} className="icon" /> Our Story
            </h3>
            <p>
              <strong>G-STYLE</strong> was founded by a team of passionate sports lovers who recognized the need for
              <span className="highlight"> high-quality, stylish, and performance-driven </span>
              sports apparel and equipment. Whether you're an athlete, a fighter, or a gym enthusiast, we provide gear that helps you push your limits.
            </p>
          </div>

          {/* What We Offer */}
          <div className="col-md-6">
            <h3>
              <FontAwesomeIcon icon={faShoppingBasket} className="icon" /> What We Offer
            </h3>
            <ul>
              <li>✅ <strong>Men’s & Women’s Activewear</strong> – Designed for maximum comfort and durability.</li>
              <li>✅ <strong>Fitness & Gym Equipment</strong> – Essential gear to elevate your workouts.</li>
              <li>✅ <strong>Boxing & Combat Sports Gear</strong> – Professional-grade equipment for fighters.</li>
              <li>✅ <strong>Casual & Streetwear Collection</strong> – Stylish clothing for everyday athletes.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="row">
          <div className="col-md-12">
            <h3>
              <FontAwesomeIcon icon={faStar} className="icon" /> Why Choose Us?
            </h3>
            <ul>
              <li>🏆 <strong>Premium Quality</strong> – We never compromise on quality.</li>
              <li>🚀 <strong>Innovation & Style</strong> – Blending modern design with top performance.</li>
              <li>👊 <strong>For Fighters, By Fighters</strong> – Crafted with athletes in mind.</li>
              <li>📦 <strong>Fast & Secure Shipping</strong> – Quick and safe delivery of your orders.</li>
              <li>🛡️ <strong>Customer Satisfaction Guarantee</strong> – Hassle-free returns and excellent support.</li>
            </ul>
          </div>
        </div>

        {/* Join the Movement */}
        <div className="text-center mt-4">
          <h3>
            <FontAwesomeIcon icon={faUsers} className="icon" /> Join the G-STYLE Movement!
          </h3>
          <p>
            Whether you're training for a <span className="highlight">competition</span>, hitting the <span className="highlight">gym</span>,
            or just leading an <span className="highlight">active lifestyle</span>, we've got the best gear for you.
          </p>

          <p><strong>📧 Contact us at:</strong> <a href="mailto:support@g-style.com">support@g-style.com</a></p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>

        <hr />

        <p className="text-center"><strong>🚀 Train Hard. Look Good. Stay Strong. 💪 #GSTYLE</strong></p>
      </section>
    </div>
  );
}
