import React from "react";
import GridOverlay from "../UI/GridOverlay";
function Contact() {
  return (
    <section id="contact" className="contact">
      <GridOverlay />
      <div className="contact-container">
        <h3 className="subheading">Get in touch</h3>
        <h1>Lets build something cool together.</h1>
        <div className="contact-info-box">
          <div className="contact-box">
            <span>Phone Number</span>
            <div className="phone">801-856-6823</div>
          </div>
          <div className="contact-box">
            <span>Email</span>
            <div className="email">dmitriys801@gmail.com</div>
          </div>
          <div className="contact-box">
            <span>Address</span>
            <div className="address">
              480 Brandt Ct, Salt Lake City, UT 84107
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
