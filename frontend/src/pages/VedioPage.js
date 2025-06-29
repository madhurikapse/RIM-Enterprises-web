import React, { useState, useEffect } from "react";
import "../style/VedioPage.css";

const content = [
  {
    title1: "Service",
    subtitle1: "Rim enterprises offers Managed IT Services you can trust",
    image: "https://www.compudynamics.co.za/wp-content/uploads/2019/11/Compudynamics-Consult.jpg"
  },
  {
    title1: "Company Profile",
    subtitle1: "Customer service: RIM Enterprises offers high-quality customer service and strives to provide complete satisfaction to clientsRIM Enterprises maintains the highest quality standards and is an ASA-100 accredited aircraft parts supplierRIM Enterprises is open and honest, and lives its values every day",
    image: "https://www.compudynamics.co.za/wp-content/uploads/2020/10/IMG-20121211-00044-980x735.jpg"
  },
  {
    title1: "Values",
    subtitle1: "RIM Enterprises values each of its employees and supports them to the full extent of its capabilities.",
    image: "https://www.compudynamics.co.za/wp-content/uploads/2020/07/Main1.jpg"
  }
];
const VedioPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container1">
      <div className="content">
        <img src={content[index].image} alt="Logo" className="logo" />
        <div className="text">
          <h1 className="title1">{content[index].title1}</h1>
          <p className="subtitle1">{content[index].subtitle1}</p>
        </div>
      </div>
    </div>
  );
};

export default VedioPage;
