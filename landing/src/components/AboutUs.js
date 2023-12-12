import React from "react";
import Card from "react-bootstrap/Card";
import "./AboutUs.css"; // Import your CSS file for styling

const AboutUs = () => {
  const cardStyle = {
    width: "18rem",
    margin: "10px",
    display: "flex",
  };

  const cardGridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    listStyle: "none",
  };

  return (
    <div>
      <h1 id="title" style={{ color: "black", marginLeft: "90vh" }}>
        About Us
      </h1>
      <p className="sub-title" style={{ color: "black", marginLeft: "60vh" }}>
        A global leader in next-generation digital services and consulting
      </p>
      <div className="stats-container">
        <div className="stat">
          <h1>56+</h1>
          <p>countries where we have trusting clients</p>
        </div>
        <div className="stat">
          <h1>US$18.55</h1>
          <p>billion total revenue (LTM)</p>
        </div>
        <div className="stat">
          <h1>5,575,490+</h1>
          <p>Training (days) conducted for employees, globally</p>
        </div>
      </div>
      <div className="cards-container">
        <ul style={{ display: "flex" }}>
          <li style={{ listStyle: "none" }}>
            <div class="w3-card-4  w3-bottombar">
              <div class="w3-display-container w3-text-white">
                <img src="https://th.bing.com/th/id/OIP.vlSqXpPPvVIYXW6GPhy0RQHaJ4?rs=1&pid=ImgDetMain" alt="Lights" style={{width:"100%"}} />
                <div class="w3-xlarge w3-display-bottomleft w3-padding">
                  {/* LONDON 60&deg; F */}
                  <h3>Experience</h3>
                  <p>Design-led transformation. From brand to expertise</p>
                </div>
              </div>
            </div>
            {/* <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg"
              />
              {/* <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body> */}
            {/* </Card> */}
          </li>
          <div class="w3-container w3 w3-cell">
            <ul style={{ listStyle: "none" }}>
              <li>
                <ul style={{ listStyle: "none", ...cardGridContainerStyle }}>
                  <li>
                    <Card style={cardStyle} className="custom-card  w3-bottombar">
                      <Card.Img
                        variant="top"
                        src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg"
                      />
                      {/* <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body> */}
                    </Card>
                  </li>
                  <li>
                    <Card style={cardStyle} className="custom-card  w3-bottombar">
                      <Card.Img
                        variant="top"
                        src="https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg"
                      />
                      {/* <Card.Body >
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body> */}
                    </Card>
                  </li>
                  <li>
                    <Card style={cardStyle} className="custom-card  w3-bottombar">
                      <Card.Img
                        variant="top"
                        src="https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg"
                      />
                      {/* <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body> */}
                    </Card>
                  </li>
                  <li>
                    <Card style={cardStyle} className="custom-card  w3-bottombar">
                      <Card.Img
                        variant="top"
                        src="https://th.bing.com/th/id/OIP.7xgO_DC9HV4Zg3-KRtaH9QHaHa?rs=1&pid=ImgDetMain/100px180"
                      />
                      {/* <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body> */}
                    </Card>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </ul>
        {/* <Card className="custom-card">
          <Card.Img
            variant="top"
            src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> */}
        {/* Add more cards here as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
