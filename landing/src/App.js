// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./Pages/About";
import Cta from "./components/Cta";
import CarouselBox from "./components/CarouselBox";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {/* <SideBar/> */}
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/home" element={<CarouselBox />} />
          <Route exact path="/cta" element={<Cta />} />
          <Route exact path="/about-us" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
