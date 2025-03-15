import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/ NewSucess.css";

const  NewSucess = () => {
  const navigate = useNavigate();

  const features = [
    {
      img: "https://www.pwc.co.za/en/temp/GettyImages-618428698.jpeg",
      title: "Transforming financial services through ‘Fit for Growth and Intelligent Hyperautomation’",
      text: "We aim to be the go-to ICT service provider known for excellence, reliability, and forward-thinking solutions.",
    },
    {
      img: "https://www.pwc.co.za/en/temp/GettyImages-1086740226.jpg_cq5dam.1600.jpeg",
      title: "Leveraging AI to drive innovation",
      text: "Empowering telecommunications through AI.",
    },
    {
      img: "https://www.pwc.co.za/en/temp/GettyImages-157475606.jpg_cq5dam.1600.jpeg",
      title: "Propelling Renaissance to be selected",
      text: "South Africa and Africa Report.",
    },
    {
      img: "https://www.pwc.co.za/en/temp/GettyImages-637229672.jpg_cq5dam.1600.jpeg",
      title: "Be well, work well",
      text: "Mental health is an ongoing journey.",
    },
  ];

  return (
    <div className="Our">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      {features.map((feature, index) => (
        <div key={index} className="Our-item">
          <img src={feature.img} alt={feature.title} className="Our-img" />
          <h1 className="Our-title">{feature.title}</h1>
          <p className="Our-text">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewSucess;
