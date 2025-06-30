import React, { useState } from "react";
import "../style/Contact1.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ NEW WhatsApp number & message
    const phoneNumber = "27658931828"; // New contact number
    const text = `Hello, my name is ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-container">
      <h1>Contact Rim Enterprises</h1>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="Rim Enterprises Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.7541805272926!2d28.11274987536692!3d-25.976586677206026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f3995f68bc3%3A0xd8c80f10c3c4a!2sLangerveld%20Rd%2C%20Glen%20Austin%2C%20Midrand%2C%201686%2C%20South%20Africa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Updated Address Info */}
      <div className="contact-info">
        <h2>Office Address</h2>
        <p>
          18 San Bernadino, Langerveld Road,<br />
          Midrand 1686, South Africa
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:riment1001@gmail.com"
            className="footer-contact-link"
          >
            riment1001@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a
            href="tel:+27658931828"
            className="footer-contact-link"
          >
            +27 658931828
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/27658931828"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
