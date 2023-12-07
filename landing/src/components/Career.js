import React from "react";
import "./Imagee.css";

const Carr = () => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    display: "flex",
    flexDirection: "column", // Adjusted for responsive layout
    alignItems: "center",
    minHeight: "600px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    margin: "0",
    fontWeight: "600",
    fontFamily: "tungstenw05-medium, Oswald, sans-serif",
    fontSize: "36px",
    lineHeight: "1.2",
    boxSizing: "border-box",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  };

  const paragraphStyle = {
    textAlign: "center",
    color: "#333",
    boxSizing: "border-box",
    fontSize: "20px", // Adjusted font size for better readability
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px", // Added margin for spacing
  };

  return (
    <div className="Career">
      <h1 style={headingStyle}>Careers</h1>
      <p style={paragraphStyle}>
        Every Infoscion is the navigator of our clients’ digital transformation
      </p>
      <div style={containerStyle}>
        <div className="image-container">
          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/home/images/careers-video-img.jpg"
            alt="Image"
            className="zoomable-image"
          />
        </div>
      </div>
      <p style={paragraphStyle}>Find opportunities right for you</p>
      <div style={buttonContainerStyle}>
        <button className="w3-btn w3-large w3-black" type="submit">
          EXPLORE CAREERS
        </button>
      </div>
    </div>
  );
};

export default Carr;
