import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/OurSucess.css";

const SucessPage = () => {
  const navigate = useNavigate();
  const [showStories, setShowStories] = useState(false);

  const features = [
    {
      img: "https://www.pwc.co.za/content/dam/pwc/za/en/assets/images/gettyimages-1153679356.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png",
      title: "Adenia Partners acquires The Courier Guy’",
      text: "The South African e-commerce market is expected to grow significantly over the medium term. As part of its investment in TCG, Adenia partnered with co-investors DEG, a German development finance institution; Proparco, the French development finance institution; and South Suez.."
    },
    {
      img: "https://www.pwc.co.za/content/dam/pwc/za/en/assets/images/GettyImages-723504579-1600px.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png",
      title: "Leveraging AI to drive innovation, ensuring progress and impact across various business domains",
      text: "Empowering telecommunications through AI."
    },
    {
      img: "https://www.pwc.co.za/content/dam/pwc/za/en/assets/images/GettyImages-861136498-1600px.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png",
      title: "Propelling Renaissance to be selected as the preferred bidder in a competitive process",
      text: "Danny’s Auto Body Parts, a family-owned business, is a leading name in the aftermarket automotive parts market in South Africa and has a 76-year history of supplying a wide range of high-quality aftermarket automotive parts and accessories for various vehicle types to South Africa and neighbouring countries. The shareholders approached PwC to advise on the disposal of the business. This presented an excellent opportunity to enhance the business’ long-term sustainability and value.."
    },
    {
      img: "https://www.pwc.co.za/content/dam/pwc/gx/en/brand-simplified/hero-images-1600/technology/DAMIL_123195-1600.jpg/jcr:content/renditions/cq5dam.thumbnail.319.319.png",
      title: "Setting the scene",
      text: 'Adenia Partners (Adenia), a long-standing investor in Africa, makes values-based investments in promising companies across the continent and takes responsibility for guiding them to sustainable growth. In acquiring The Courier Guy (TCG), Adenia is taking another step in honouring this commitment. The acquisition marks the second investment by the Adenia V fund. '
    }
  ];

  return (
    <>
      <div className="Header">
        <h1>All Success Stories</h1>
      </div>

      {showStories && (
        <div className="Our">
          {features.map((feature, index) => (
            <div key={index} className="Our-item">
              <img src={feature.img} alt={feature.title} className="Our-img" />
              <h1 className="Our-title">{feature.title}</h1>
              <p className="Our-text">{feature.text}</p>
            </div>
          ))}
        </div>
      )}
      {!showStories && (
        <div className="btn">
          <button onClick={() => setShowStories(true)}>View all</button>
        </div>
      )}
    </>
  );
};

export default SucessPage;
