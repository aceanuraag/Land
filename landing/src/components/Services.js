import React from "react";

const Services = () => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  };

  const listItemStyle = {
    listStyle: "none",
    display: "flex",
  };

  const cardContainerStyle = {
    display: "flex",
    height: "auto",
    width: "500px",
  };

  const imageStyle = {
    width: "100%",
  };

  const renderCard = (imgSrc, title, description) => (
    <div className="w3-card ">
      <div className="w3-display-container w3-text-white">
        <img src={imgSrc} alt={title} style={imageStyle} />
        <div className="w3-xlarge w3-display-bottomleft w3-padding">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      <h1 className="w3-xxxlarge">The Next</h1>
      <p className="w3-large">
        We bring you powerful advantages to navigate your digital transformation
      </p>
      <div>
        <ul style={{ display: "flex" }}>
          <li style={listItemStyle}>{renderCard("https://th.bing.com/th/id/OIP.vlSqXpPPvVIYXW6GPhy0RQHaJ4?rs=1&pid=ImgDetMain", "Experience", "Design-led transformation. From brand to expertise")}</li>
          <div className="w3-display-container w3-card-4" style={cardContainerStyle}>
            {[
              "https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg",
              "https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg",
              "https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg",
              "https://th.bing.com/th/id/OIP.7xgO_DC9HV4Zg3-KRtaH9QHaHa?rs=1&pid=ImgDetMain/100px180",
            ].map((imgSrc, index) => (
              <div key={index} className={`w3-red w3-display-${index % 2 === 0 ? "top" : "bottom"}${index < 2 ? "left" : "right"} w3-bottombar`} style={{ width: "50%", height: "50%" }}>
                <img src={imgSrc} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Services;
