import React from "react";
import "../style/Service.css"; // Ensure you have styles for this page

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        At RIM Enterprises, we provide cutting-edge ICT solutions to help businesses grow and thrive.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Cloud Solutions:</strong> Secure and scalable cloud services to enhance collaboration and efficiency.</li>
        <li><strong>Cybersecurity:</strong> Advanced security tools and strategies to protect businesses from cyber threats.</li>
        <li><strong>IT Support & Consulting:</strong> Proactive IT management, technical support, and consulting services.</li>
        <li><strong>Custom Software Development:</strong> Tailored software solutions designed to streamline business operations.</li>
        <li><strong>Network & Infrastructure Management:</strong> Reliable and secure network setup, optimization, and maintenance.</li>
        <li><strong>Data Management & Analytics:</strong> Smart data-driven insights to improve business decision-making.</li>
        <li><strong>Enterprise Resource Planning (ERP):</strong> Integrated ERP solutions to enhance productivity and efficiency.</li>
        <li><strong>Artificial Intelligence & Automation:</strong> AI-driven solutions to optimize workflows and business processes.</li>
        <li><strong>Business Process Outsourcing (BPO):</strong> Outsourcing solutions to improve customer experience and operational efficiency.</li>
        <li><strong>IT Infrastructure & Hardware Solutions:</strong> Setup, maintenance, and support for business IT infrastructure.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Expertise:</strong> A team of experienced professionals in ICT services.</li>
        <li><strong>Tailored Solutions:</strong> Customized IT strategies to meet your business needs.</li>
        <li><strong>Reliability:</strong> High-quality service ensuring smooth and uninterrupted IT operations.</li>
        <li><strong>Customer-Centric Approach:</strong> Your success is our priority.</li>
      </ul>

      <h2>What Our Clients Say</h2>
      <blockquote>
        "RIM Enterprises transformed our IT infrastructure, making our operations seamless and efficient."
        – John Black, Manager
      </blockquote>
      <blockquote>
        "Their cybersecurity solutions saved our business from a major security breach! Highly recommend their services."
        – Andre Kitzinger, Managing Director
      </blockquote>

      <h2>Get in Touch</h2>
      <p>
        Ready to upgrade your IT solutions? Contact us today and let's discuss how we can help your business thrive!
      </p>
    </div>
  );
};

export default Services;
