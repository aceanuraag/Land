import React from "react";
import {Container} from "react-bootstrap";

const Industries = () => {
  const containerStyle ={
    borderRadius: "10px",
    padding: "20px",
    borderPosition: "center",
    borderSize: "cover",
    backgroundColor: "blue",
  }
  return (
    <div className="carousel-box-container">
      <Container style={containerStyle}>
        <h1>This is Industries Pages</h1>
      </Container>
    </div>
  );
};

export default Industries;
