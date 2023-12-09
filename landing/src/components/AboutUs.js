import React from "react";
import Card from "react-bootstrap/Card";

const AboutUs = () => {
  // const containerStyle = {
  //   backgroundImage:
  //     "url('https://www.blackswantechnologies.ai/wp-content/uploads/2021/08/Graph-network-scaled-e1629969799626.jpg ')",
  //   padding: "20px",
  //   backgroundColor: "orange",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };
  const cardStyle = {
    width: "18rem",
    margin: "10px",
    display: "flex",
  };

  const cardGridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "-10px",
    listStyle: "none",
  };

  return (
    <div
      class="w3-container w3-teal"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "",
      }}
    >
      <h1
        id="title"
        style={{ fontSize: "50px", fontStyle: "inherit", marginLeft: "90vh" }}
      >
        {" "}
        About Us{" "}
      </h1>
      <p style={{ fontSize: "20px", fontFamily: "bold", marginLeft: "65vh" }}>
        A global leader in next-generation digital services and consulting
      </p>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-between",
        }}
      >
        <li>
          <h1>56+</h1>
          <p>countries where we have trusting clients</p>
        </li>
        <li>
          <h1>US$18.55</h1>
          <p>billion total revenue (LTM)</p>
        </li>
        <li>
          <h1>5,575,490+</h1>
          <p>Training (days) conducted for employees, globally</p>
        </li>
      </ul>
      <ul style={{ display: "flex", marginLeft: "30vh" }}>
        <li style={{ listStyle: "none", display: "flex" }}>
          <Card style={cardStyle}>
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
          </Card>
        </li>
        <div class="w3-container w3 w3-cell">
          <ul style={{ listStyle: "none" }}>
            <li>
              <ul style={{ listStyle: "none", ...cardGridContainerStyle }}>
                <li>
                  <Card style={cardStyle}>
                    <Card.Img
                      variant="top"
                      src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg"
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
                <li>
                  <Card style={cardStyle}>
                    <Card.Img
                      variant="top"
                      src="https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg"
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
                <li>
                  <Card style={cardStyle}>
                    <Card.Img
                      variant="top"
                      src="https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg"
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
                <li>
                  <Card style={cardStyle}>
                    <Card.Img
                      variant="top"
                      src="https://th.bing.com/th/id/OIP.7xgO_DC9HV4Zg3-KRtaH9QHaHa?rs=1&pid=ImgDetMain/100px180"
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
              </ul>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default AboutUs;
