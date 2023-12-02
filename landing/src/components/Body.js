import React from "react";
import CarouselBox from "./CarouselBox";
import "./CarouselBox.css";
import Introduction from "./Introduction";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Industries from "./Industries";
import Carr from "./Career";
import Cta from "./Cta";
import Footer from "./Footer";

const Body = () => {
  return (
      <div>
        <CarouselBox />  
        <br />
        <Introduction />
        <br/>
         <Services />
         <br/>
        <AboutUs />
        <br/>
        <Industries />
        <br/>
        <Carr />
        <br/>
        <Cta />
        <br/>
        <Footer /> 
      </div>
  
  );
};

export default Body;
