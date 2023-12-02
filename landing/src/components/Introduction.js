import React from "react";
import Button from "react-bootstrap/Button";

const Introduction = () => {
  const containerStyle = {
    backgroundImage: "url('nature.png')", // Replace 'nature.png' with your actual image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "red",
    padding: "10px", // Add padding as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh", // Adjust as needed
    color: "white", // Set text color
  };

  const home = {
    fontSize: "50px",
    lineHeight: "50px",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
        <h2 style={home} id="title">
          Digital Core Capabilities
        </h2>
        <p className="fullpage-desc white-color">
          <em>Build vital capabilities to deliver digital outcomes.</em>
        </p>
        <Button
          variant="warning"
          className="mb20 mb-xs-10 mt50 mt-xs-0 animateThird"
        >
          Explore Learn More
        </Button>
        <div className="row hidden-xs">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-xs-20">
            <p>Case studies</p>
            <h3>Pfizer's journey towards increased productivity, powered by AI</h3>
            <p>
              <a
                href="/navigate-your-next/digital-capabilities/insight/intelligent-automation.html"
                className="view-more white-color"
                aria-label="Read about Pfizer's journey towards increased productivity, powered by AI"
                title="View"
              >
                View
              </a>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="fullpage-second-title">&nbsp;</p>
            <h3>A government that contributes to the joy of parenting</h3>
            <p>
              <a
                href="/navigate-your-next/digital-capabilities/accelerate/born-smart.html"
                className="view-more white-color"
                aria-label="Read about A government that contributes to the joy of parenting"
                title="View"
              >
                View
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
