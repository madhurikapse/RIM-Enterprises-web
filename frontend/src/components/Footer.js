import React, { useState } from 'react';
import '../style/Footer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../AxiosConfig';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error('Please enter your name and email.');
      return;
    }

    try {
      
      const { data } = await Api.post('/subscribe', {
  firstName: name, // ✅ fix here
  email,
});


      if (data.success) {
        toast.success('Thanks for contacting Rim Enterprises!');
        
        const whatsappMessage = `📩 New Client Enquiry:\n👤 Name: ${name}\n📧 Email: ${email}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/27658931828?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');

        // Clear input fields after message
        setName('');
        setEmail('');
      } else {
        toast.error(data.message || 'Submission failed. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      {/* Company Info */}
      <div className="footer-section company-info">
        <h3>📍 Contact Rim Enterprises</h3>
       <p>
  <strong>Phone:</strong>{' '}
  <a href="tel:+27658931828" className="footer-contact-link">
    +27 658931828
  </a>
</p>
<p>
  <strong>Email:</strong>{' '}
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=riment1001@gmail.com&su=Booking%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
>
  Open in Gmail
</a>

</p>

        <p>
          <strong>Address:</strong>
          <br />
          18 San Bernadino, Langerveld Road,
          <br />
          Midrand 1686, South Africa
        </p>
        <p><strong>Working Hours:</strong></p>
        <ul>
          <li>Mon - Fri: 9:00 AM – 6:00 PM</li>
          <li>Sat - Sun: Closed</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li><a href="/services">Managed IT Services</a></li>
          <li><a href="/cloud">Cloud & Infrastructure</a></li>
          <li><a href="/security">Cybersecurity</a></li>
          <li><a href="/projects">Case Studies</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Enquiry Form */}
      <div className="footer-section">
        <h3>📬 Contact Us</h3>
        <p>Need help or a quote? Leave your details below.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Enter your name"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Enter your email"
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="social-media-box">
          <a
            href="https://wa.me/27658931828"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
