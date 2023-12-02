import React from "react";
import { Container } from "react-bootstrap/";

const Cta = () => {
  const containerStyle = {
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "brown",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="carousel">
      <Container style={containerStyle}>
        <h1>This is CTA Pages</h1>
      </Container>
    </div>
  );
};

export default Cta;
