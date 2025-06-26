import React from "react";
import "../style/Home.css";

const HomePage = () => {
  return (
    <div className="container">
      <img src="/assets/logo.jpeg" alt="Logo" className="logo" />
      <h1 className="title">RIM Enterprises</h1>
      <p className="subtitle">
        RIM Enterprises offers Managed IT Services you can trust
      </p>
    </div>
  );
};

export default HomePage;
