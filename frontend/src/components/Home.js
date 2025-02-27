import React from "react";
import "../style/Home.css"; // Import CSS

const HomePage = () => {
  return (
    <div className="image-container">
      
      {/* Full Image */}
      <img
        src="https://www.pwc.co.za/en/assets/images/gettyimages-1186957519.jpg"
        alt="CEO Survey"
      />

      {/* Text Overlay on Image */}
      <div className="text-overlay">
        <h1>RIM Enterprises 28th Annual Global CEO Survey</h1>
        <h1>• Tailored Solutions</h1>
        <h1>• Comprehensive Services</h1>
      </div>

    </div>
  );
};

export default HomePage;
