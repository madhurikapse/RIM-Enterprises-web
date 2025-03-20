import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact RIM Enterprises</h1>
      <p>
        Have questions or need assistance? Reach out to us, and our team will be happy to help!
      </p>

      <h2>Our Office</h2>
      <p>18 San Berbadino Langerveld Road Midrane 1686</p>
      <p>Email:rimenterprises@hotmail.com or riment1001@gmail.com</p>
      <p>Phone: +27 65 893 1828</p>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        
        <label>Message:</label>
        <textarea placeholder="Write your message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
