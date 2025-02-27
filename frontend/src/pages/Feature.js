import React from "react";
import "../style/Feature.css";

const Feature = () => {
  const features = [
    {
      img: "https://www.pwc.co.za/en/assets/images/GettyImages-1824716878-1600px.jpg",
      title: "Feature One",
      text: "This is the description for feature one."
    },
    {
      img: "https://www.pwc.co.za/en/assets/images/AdobeStock_494618834-1600px.jpg",
      title: "Feature Two",
      text: "This is the description for feature two."
    },
    {
      img: "https://www.pwc.co.za/en/assets/images/Heroes/hero-za-careers-lady-on-laptop-smiling.jpg.pwcimage.150.100.jpg",
      title: "Feature Three",
      text: "This is the description for feature three."
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