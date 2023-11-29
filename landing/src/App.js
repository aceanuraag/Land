// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
};

export default App;
