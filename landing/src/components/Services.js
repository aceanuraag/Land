import React from "react";
import Container from "react-bootstrap/Container";

const Services = () => {
  const containerStyle = {
    backgroundColor: "green",
    borderRadius:"10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "20px",
  };
  return (
    <div className="carousel-box-container">
      <Container style={containerStyle}>
        <h1>This is Services pages</h1>
      </Container>
    </div>
  );
};

export default Services;
