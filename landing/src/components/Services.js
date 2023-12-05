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
    display: "flex",
    flexDirection: "column",
  };

  const cardGridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    listStyle: "none",
  };

  const cardStyle = {
    width: "18rem",
    margin: "10px",
    display:'flex'
  };

  return (
    <div style={containerStyle}>
      <h1>The Next</h1>
      <p>
        We bring you powerful advantages to navigate your digital transformation
      </p>
      <div className="flex">
        <div class="w3-container w3 w3-cell">
          <Card style={cardStyle}>
            <Card.Img variant="top" src="https://www.infosys.com/content/dam/infosys-web/en/home/images/experience.jpg" />
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
            <li>
              <ul style={{ listStyle: "none", ...cardGridContainerStyle }}>
                {/* {[1, 2, 3, 4].map((index) => (
                  <li key={index}>
                    <Card style={cardStyle}>
                      <Card.Img
                        variant="top"
                        src={`https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg ${index}`}
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </li> */}
                {/* ))} */}
                <li>
                  <Card style={cardStyle}>
                    <Card.Img variant="top" src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </li>
                <li>
                  <Card style={cardStyle}>
                    <Card.Img variant="top" src="https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </li>
                <li>
                  <Card style={cardStyle}>
                    <Card.Img variant="top" src="https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </li>
                <li>
                  <Card style={cardStyle}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.7xgO_DC9HV4Zg3-KRtaH9QHaHa?rs=1&pid=ImgDetMain/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
