import React from "react";
import "../style/Feature.css";

const Feature = () => {
  const features = [
    {
      img: "https://www.pwc.co.za/en/assets/images/GettyImages-1824716878-1600px.jpg",
      title: "Africa Entertenmnet and  Media Outlet 2024 to 2028",
      text: "Resilience and reinvention"
    },
    {
      img: "https://www.pwc.co.za/en/assets/images/AdobeStock_494618834-1600px.jpg",
      title: "Africa Anual Review 2024",
      text: "A year of building trust and solving together."
    },
    {
      img: "https://www.pwc.co.za/en/assets/images/Heroes/hero-za-careers-lady-on-laptop-smiling.jpg.pwcimage.150.100.jpg",
      title: "Global Digital Trust Insight Survay 2025",
      text: "South Africa and Africa Report."
    }
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <img src={feature.img} alt={feature.title} className="feature-img" />
          <h1 className="feature-title">{feature.title}</h1>
          <p className="feature-text">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Feature;