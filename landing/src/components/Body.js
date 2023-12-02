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
       
        <Introduction />
        
         <Services />
         
        <AboutUs />
       
        <Industries />
        
        <Carr />
        
        <Cta />
        
        <Footer /> 
      </div>
  
  );
};

export default Body;
