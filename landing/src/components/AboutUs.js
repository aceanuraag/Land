import React from "react";
import "./AboutUs.css"; // Import your CSS file for styling

const AboutUs = () => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
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
      <div  style={containerStyle}>
        <ul style={{ display: "flex" }}>
          <li style={{ listStyle: "none", display: "flex" }}>
            <div class="w3-card  w3-card-4">
              <div class="w3-display-container w3-text-white">
                <img
                  src="https://th.bing.com/th/id/OIP.vlSqXpPPvVIYXW6GPhy0RQHaJ4?rs=1&pid=ImgDetMain"
                  alt="Lights"
                  style={{ width: "100%" }}
                />
                <div class="w3-xlarge w3-display-bottomleft w3-padding">
                  {/* LONDON 60&deg; F */}
                  <h3>Experience</h3>
                  <p>Design-led transformation. From brand to expertise</p>
                </div>
              </div>
            </div>
          </li>
          <div
            class="w3-display-container w3-card-4"
            style={{ height: "auto", width: "500px" }}
          >
            <div
              class="w3-red w3-display-topleft w3-bottombar"
              style={{ width: "50% ", height: "50%" }}
            >
              <img
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/insight.jpg"
                alt="insight"
              />
            </div>
            <div
              class="w3-red w3-display-topright w3-bottombar"
              style={{ width: "50%", height: "50%" }}
            >
              <img
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/innovate.jpg"
                alt="innovate"
              />
            </div>
            <div
              class="w3-red w3-display-bottomleft w3-bottombar"
              style={{ width: "50%", height: "50%" }}
            >
              <img
                src="https://www.infosys.com/content/dam/infosys-web/en/home/images/accelerate.jpg"
                alt="accelerate"
              />
            </div>
            <div
              class="w3-red w3-display-bottomright w3-bottombar"
              style={{ width: "50%", height: "50%" }}
            >
              <img
                src="https://th.bing.com/th/id/OIP.7xgO_DC9HV4Zg3-KRtaH9QHaHa?rs=1&pid=ImgDetMain/100px180"
                alt="none"
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
