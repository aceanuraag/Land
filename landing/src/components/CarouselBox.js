// CarouselBox.js
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CarouselBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div className="">
      <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/iga-swiatek-lead.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/iga-swiatek-lead.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/iga-swiatek-lead.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;
