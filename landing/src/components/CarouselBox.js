import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselBox.css";

const CarouselBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  const containerStyle = {
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div className="carousel" style={containerStyle}>
      <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="https://w0.peakpx.com/wallpaper/250/255/HD-wallpaper-2017-mercedes-benz-sl-500-amg-line-color-brilliant-blue-side-car.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="https://w0.peakpx.com/wallpaper/250/255/HD-wallpaper-2017-mercedes-benz-sl-500-amg-line-color-brilliant-blue-side-car.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img
            className="carousel-image"
            src="https://w0.peakpx.com/wallpaper/250/255/HD-wallpaper-2017-mercedes-benz-sl-500-amg-line-color-brilliant-blue-side-car.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;
