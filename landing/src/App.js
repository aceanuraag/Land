// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
// import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {/* <SideBar/> */}
        <Body />\
      </div>
    </BrowserRouter>
  );
};

export default App;
