import React from "react";
import "../style/Home.css";

const HomePage = () => {
  return (
    <div className="container">
      <img src="/assets/logo.jpeg" alt="Logo" className="logo" />
      <h1 className="title">Rim Enterprises</h1>
      <p className="subtitle">
        Compudynamics South Africa offers Managed IT Services you can trust
      </p>
    </div>
  );
};

export default HomePage;
