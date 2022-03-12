import "./App.css";
import Acount from "./Component/Acount.jsx";
import Header from "../src/Component/Header";
import React, { Component } from "react";
import HomePage from "./Component/HomePage.jsx";
function App() {
  return (
    <div className="App">
      <div className="landing">
        <div className="overlay"></div>
        <div className="containerr">
          <Acount />
          <Header></Header>
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
