import React from "react";
import Button from "react-bootstrap/Button";
import "./Introduction.css";
import { Carousel } from "react-bootstrap";

const Introduction = () => {
  return (
    <div className="carousel-box-container">
      <Carousel>
        <Carousel.Item>
          <div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h2 className="home-second-heading white-color mb20 mb-xs-10">Digital Core Capabilities</h2>
              <p className="fullpage-desc white-color">
                <em>Build vital capabilities to deliver digital outcomes.</em></p>
              <Button variant="warning"className="mb20 mb-xs-10 mt50 mt-xs-0 animateThird">Explore Learn More</Button>
              <br />
              <div className="row hidden-xs">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-xs-20">
                  <p>Case studies</p>
                  <h3>
                    Pfizer's journey towards increased productivity, powered by
                    AI
                  </h3>
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Introduction;
