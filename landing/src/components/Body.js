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
// import {Switch, Route} from "react-router-dom";

const Body = () => {
  return (
    <>
      {/* <Switch>
        <Route exact path="/" component={CarouselBox}/>
        <Route path="/introduction" component={Introduction}/>
        <Route  component={Error}/>
      </Switch> */}

      <CarouselBox />
      <hr />
      <Introduction />
      <hr />
      <Services />
      <hr />
      <AboutUs />
      <hr />
      <Industries />
      <hr />
      <Carr />
      <hr />
      <Cta />
      <hr />
      <Footer />
    </>
  );
};

export default Body;
