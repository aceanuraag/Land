// CarouselBox.js
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div className="" >
      <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://w0.peakpx.com/wallpaper/250/255/HD-wallpaper-2017-mercedes-benz-sl-500-amg-line-color-brilliant-blue-side-car.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://w0.peakpx.com/wallpaper/250/255/HD-wallpaper-2017-mercedes-benz-sl-500-amg-line-color-brilliant-blue-side-car.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://w0.peakpx.com/wallpaper/250/255/HD-wallpaper-2017-mercedes-benz-sl-500-amg-line-color-brilliant-blue-side-car.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;
