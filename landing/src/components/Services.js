import React from "react";
import Card from "react-bootstrap/Card";

const Services = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://th.bing.com/th/id/R.7b026c4ecbf496cef4e5d1b8137a6253?rik=qOCyw9aX57jmtw&pid=ImgRaw&r=0')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "blok",
    flexDirection: "column",
  };

  

  const cardGridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    listStyle: "none",
  };

  const cardStyle = {
    width: "18rem",
    margin: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1>The Next</h1>
      <p>
        We bring you powerful advantages to navigate your digital transformation
      </p>
      <div className="flex">
        <div class="w3-container w3 w3-cell">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px300" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="w3-container w3 w3-cell">
          <ul style={{ listStyle: "none" }}>
            <li></li>
            <li>
              <ul style={{ listStyle: "none", ...cardGridContainerStyle }}>
                {[1, 2, 3, 4].map((index) => (
                  <li key={index}>
                    <Card style={cardStyle}>
                      <Card.Img
                        variant="top"
                        src={`holder.js/1000px180?text=Card ${index}`}
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
