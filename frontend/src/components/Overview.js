import React from "react";
import "../style/Overview.css";

const Overview = () => {
  return (
    <div className="overview-container">
      <h1>Company Overview</h1>
      <p>
        <strong>RIM Enterprises</strong> is a leading ICT service provider committed to delivering high-quality,
        innovative technology solutions. We empower businesses with reliable, customized services
        that streamline operations, improve productivity, and foster growth.
      </p>

      <h2>What We Do</h2>
      <p>
        We specialize in a wide range of services, including:
      </p>
      <ul>
        <li>Cloud Services & Infrastructure</li>
        <li>Cybersecurity Solutions</li>
        <li>Custom Software Development</li>
        <li>IT Consulting and Support</li>
        <li>Digital Transformation</li>
      </ul>

      <h2>Who We Serve</h2>
      <p>
        Our clients range from small startups to large enterprises across industries such as
        healthcare, finance, manufacturing, retail, and more.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Proven track record of successful IT projects</li>
        <li>Client-centric approach with tailored solutions</li>
        <li>Team of certified and experienced professionals</li>
        <li>Commitment to innovation, security, and reliability</li>
      </ul>

      <p className="closing-note">
        At RIM Enterprises, your success is our priority. Let’s build the future together.
      </p>
    </div>
  );
};

export default Overview;
